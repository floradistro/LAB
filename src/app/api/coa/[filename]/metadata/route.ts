import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Check if environment variables are available
const supabaseUrl = process.env.SUPABASE_URL || 'https://elhsobjvwmjfminxxcwy.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is not set')
}

const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params

  if (!filename || typeof filename !== 'string') {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  // If Supabase is not configured, return mock metadata
  if (!supabase) {
    return NextResponse.json({
      completionDate: new Date().toLocaleDateString('en-US'),
      filename,
      extractedText: 'Storage service not configured. Please set SUPABASE_SERVICE_ROLE_KEY environment variable.'
    })
  }

  const filePath = `pdfs/${filename}.pdf`

  try {
    const { data, error } = await supabase.storage
      .from('coas')
      .createSignedUrl(filePath, 60)

    if (error || !data?.signedUrl) {
      console.error('Supabase storage error:', error)
      return NextResponse.json({ error: 'COA not found' }, { status: 404 })
    }

    const response = await fetch(data.signedUrl)
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 })
    }

    const buffer = await response.arrayBuffer()
    
    // Dynamic import to avoid build issues
    const pdf = (await import('pdf-parse')).default
    const pdfData = await pdf(Buffer.from(buffer))
    
    // Extract completion date from PDF text
    const text = pdfData.text
    
    // Look for various date patterns that might indicate completion date
    const datePatterns = [
      /completed[:\s]*(\d{1,2}\/\d{1,2}\/\d{4})/i,
      /completion[:\s]*(\d{1,2}\/\d{1,2}\/\d{4})/i,
      /finished[:\s]*(\d{1,2}\/\d{1,2}\/\d{4})/i,
      /date[:\s]*(\d{1,2}\/\d{1,2}\/\d{4})/i,
      /(\d{1,2}\/\d{1,2}\/\d{4})/g // fallback to any date pattern
    ]
    
    let completionDate = null
    
    for (const pattern of datePatterns) {
      const match = text.match(pattern)
      if (match) {
        completionDate = match[1]
        break
      }
    }
    
    // If no specific completion date found, try to find the most recent date
    if (!completionDate) {
      const allDates = text.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)
      if (allDates && allDates.length > 0) {
        // Sort dates and take the most recent one
        const sortedDates = allDates.sort((a: string, b: string) => {
          const dateA = new Date(a)
          const dateB = new Date(b)
          return dateB.getTime() - dateA.getTime()
        })
        completionDate = sortedDates[0]
      }
    }

    return NextResponse.json({
      completionDate,
      filename,
      extractedText: text.substring(0, 500) // First 500 chars for debugging
    })

  } catch (error) {
    console.error('Error parsing PDF:', error)
    return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 })
  }
} 