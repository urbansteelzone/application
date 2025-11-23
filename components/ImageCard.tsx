'use client'

import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

export default function ImageCard({ publicId }: { publicId: string }) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='border rounded overflow-hidden'>
      <CldImage
        src={publicId}
        width='400'
        height='400'
        crop='fill'
        alt='Gallery Image'
      />
      <button
        onClick={() => setClicked(true)}
        className='w-full bg-black text-white p-2 cursor-pointer'
      >
        {clicked ? 'Interest Sent!' : 'I am Interested'}
      </button>
    </div>
  )
}
