import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  'https://elhsobjvwmjfminxxcwy.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename

  if (!filename || typeof filename !== 'string') {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  const filePath = `pdfs/${filename}.pdf`

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

  const buffer = await response.arrayBuffer()

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${filename}.pdf"`
    }
  })
} 