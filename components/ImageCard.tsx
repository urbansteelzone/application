'use client'

import { useAuth } from '@/contexts/auth-context'
import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'

export default function ImageCard({ publicId }: { publicId: string }) {
  const { user, protect, isLoading } = useAuth()
  const [clicked, setClicked] = useState(false)

  // Check if ID exists in user's list
  const isServerInterested = user?.interestedItems?.includes(publicId)

  // The item is interested if Server has it OR user just clicked it
  const isInterested = isServerInterested || clicked

  const handleInterestedClick = async (id: string) => {
    // 1. Optimistic UI update
    setClicked(true)

    try {
      // 2. Send to server
      const res = await fetch('/api/user/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicId: id }),
      })

      if (!res.ok) throw new Error('Failed to save')

      // Optional: You could reload the user context here if you wanted
      // strictly accurate data, but local state is usually enough for this interaction.
    } catch (error) {
      console.error(error)
      setClicked(false) // Revert on error
      alert('Something went wrong')
    }
  }

  return (
    <div className='border rounded overflow-hidden'>
      <CldImage
        src={publicId}
        width='400'
        height='400'
        crop='fill'
        alt='Gallery Image'
      />
      {/* <button
        // Disable if loading, or if already interested (prevents double submits)
        disabled={isLoading || isInterested}
        onClick={() => protect(() => handleInterestedClick(publicId))}
        className='w-full bg-black text-white p-2 cursor-pointer disabled:opacity-50 disabled:cursor-default'
      >
        {isLoading
          ? 'Loading...'
          : isInterested
          ? 'Interest Sent!'
          : 'I am Interested'}
      </button> */}
    </div>
  )
}
