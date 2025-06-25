import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import * as pdfjsLib from 'pdfjs-dist'

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

const supabase = createClient(
  'https://elhsobjvwmjfminxxcwy.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy-key-for-development'
)

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params

  if (!filename || typeof filename !== 'string') {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  const filePath = `pdfs/${filename}.pdf`

  try {
    const { data, error } = await supabase.storage
      .from('coas')
      .createSignedUrl(filePath, 60)

    if (error || !data?.signedUrl) {
      return NextResponse.json({ error: 'COA not found' }, { status: 404 })
    }

    const response = await fetch(data.signedUrl)
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 })
    }

    const arrayBuffer = await response.arrayBuffer()
    
    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdf = await loadingTask.promise
    
    // Extract text from all pages
    let fullText = ''
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum)
      const textContent = await page.getTextContent()
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ')
      fullText += pageText + '\n'
    }
    
    // Look for completion date patterns
    const datePatterns = [
      /[Cc]ompleted[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Cc]ompletion\s+[Dd]ate[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Tt]est\s+[Dd]ate[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Aa]nalysis\s+[Dd]ate[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Rr]eport\s+[Dd]ate[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Dd]ate\s+[Cc]ompleted[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Dd]ate\s+[Tt]ested[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      /[Dd]ate\s+of\s+[Aa]nalysis[:\s]+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/,
      // Also check for dates in format like "January 26, 2025"
      /[Cc]ompleted[:\s]+(\w+\s+\d{1,2},\s+\d{4})/,
      /[Cc]ompletion\s+[Dd]ate[:\s]+(\w+\s+\d{1,2},\s+\d{4})/,
      /[Tt]est\s+[Dd]ate[:\s]+(\w+\s+\d{1,2},\s+\d{4})/,
    ]
    
    let completionDate = null
    
    // Try each pattern to find a completion date
    for (const pattern of datePatterns) {
      const match = fullText.match(pattern)
      if (match && match[1]) {
        completionDate = match[1]
        // Normalize date format
        try {
          const parsedDate = new Date(completionDate)
          if (!isNaN(parsedDate.getTime())) {
            completionDate = parsedDate.toISOString().split('T')[0]
          }
        } catch (e) {
          // Keep original format if parsing fails
        }
        break
      }
    }
    
    // If no specific completion date found, look for any date that might be relevant
    if (!completionDate) {
      // Look for dates near keywords
      const contextPatterns = [
        /(?:completed|tested|analyzed|finished|conducted)(?:.{0,50}?)(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/i,
        /(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})(?:.{0,50}?)(?:completed|tested|analyzed|finished|conducted)/i,
      ]
      
      for (const pattern of contextPatterns) {
        const match = fullText.match(pattern)
        if (match && match[1]) {
          completionDate = match[1]
          try {
            const parsedDate = new Date(completionDate)
            if (!isNaN(parsedDate.getTime())) {
              completionDate = parsedDate.toISOString().split('T')[0]
            }
          } catch (e) {
            // Keep original format if parsing fails
          }
          break
        }
      }
    }

    return NextResponse.json({
      completionDate,
      filename,
      extractedText: fullText.substring(0, 1000), // First 1000 chars for debugging
      message: completionDate ? 'Date extracted successfully' : 'No completion date found in PDF'
    })

  } catch (error) {
    console.error('Error parsing PDF:', error)
    return NextResponse.json({ 
      error: 'Failed to parse PDF',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 