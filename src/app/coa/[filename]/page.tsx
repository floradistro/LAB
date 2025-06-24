'use client'

import { useParams } from 'next/navigation'

const COAViewer = () => {
  const params = useParams()
  const filename = params?.filename as string

  if (!filename) return <p className="p-8 text-center">Loading COA...</p>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Certificate of Analysis</h1>
      <iframe
        src={`/api/coa/${filename}`}
        className="w-full h-[1000px] border border-gray-300 rounded-lg"
      />
    </div>
  )
}

export default COAViewer 