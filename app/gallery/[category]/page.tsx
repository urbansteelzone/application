import ImageCard from '@/components/ImageCard'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function CategoryPage({ params }: any) {
  const { category } = await params

  const { resources } = await cloudinary.search
    .expression(`folder:catalog/${category}`)
    .sort_by('public_id', 'desc')
    .max_results(500)
    .execute()

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4 capitalize'>{category} Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {resources.map((image: any) => (
          <ImageCard key={image.public_id} publicId={image.public_id} />
        ))}
      </div>
    </div>
  )
}
