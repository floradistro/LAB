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

  // If Supabase is not configured, return a mock PDF or error
  if (!supabase) {
    return NextResponse.json({ 
      error: 'Storage service not configured. Please set SUPABASE_SERVICE_ROLE_KEY environment variable.' 
    }, { status: 503 })
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

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}.pdf"`
      }
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 