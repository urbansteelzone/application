'use client'
import { CldImage } from 'next-cloudinary'

export default function Page() {
  // Example list of your Cloudinary Public IDs
  const imageList = [
    'cld-sample-5',
    'cld-sample-2',
    'cld-sample-4',
    'cld-sample-3',
    'https://res.cloudinary.com/ddj4ziwae/image/upload/v1763408264/samples/landscapes/landscape-panorama.jpg',
    'stainless-steel-polished-double-door-main-gate_zsq18j',
  ]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
      }}
    >
      {imageList.map((publicId) => (
        <CldImage
          key={publicId} // Unique key required for lists
          src={publicId} // Passes the current ID from the loop
          width='500'
          height='500'
          crop={{
            type: 'auto',
            source: true,
          }}
          alt={`Image ${publicId}`}
          loading='lazy' // Use lazy for lists to improve performance
        />
      ))}
    </div>
  )
}
