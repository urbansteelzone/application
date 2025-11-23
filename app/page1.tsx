'use client'
import Link from 'next/link'

const categories = [
  { name: 'Iron Gate Designs', slug: 'iron-gate' },
  { name: 'Almira Designs', slug: 'almira' },
  { name: 'Grill', slug: 'grill' },
  { name: 'Fabrication', slug: 'fabrication' },
  { name: 'Steel Gate', slug: 'steel-gate' },
  { name: 'Steel Window', slug: 'steel-window' },
]

export default function HomePage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/gallery/${cat.slug}`}
          className='block p-6 border rounded-lg hover:bg-gray-100 transition'
        >
          <h2 className='text-xl font-bold'>{cat.name}</h2>
          <p className='text-gray-500'>View all photos</p>
        </Link>
      ))}
    </div>
  )
}
