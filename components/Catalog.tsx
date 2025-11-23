import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CATEGORIES } from '@/conf'
import { v2 as cloudinary } from 'cloudinary'
import ImageCard from './ImageCard'

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function Catalog() {
  // 2. Fetch ALL folders at the same time
  const tabsData = await Promise.all(
    CATEGORIES.map(async (cat) => {
      // Searches for specific folder: catalog/iron-gate, catalog/grill, etc.
      const { resources } = await cloudinary.search
        .expression(`folder:catalog/${cat.slug}`)
        .sort_by('public_id', 'desc')
        .max_results(12)
        .execute()

      return { ...cat, images: resources }
    })
  )

  return (
    <section id='catalog' className='container mx-auto px-4 mb-20'>
      <h2 className='text-3xl font-bold text-center mb-12'>Catalog</h2>

      <Tabs defaultValue={CATEGORIES[0].slug} className='w-full'>
        {/* Buttons */}
        <TabsList className='grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2'>
          {tabsData.map((tab) => (
            <TabsTrigger key={tab.slug} value={tab.slug} className='capitalize'>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content */}
        {tabsData.map((tab) => (
          <TabsContent key={tab.slug} value={tab.slug}>
            {' '}
            {/* <--- FIXED HERE */}
            {tab.images.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {tab.images.map((image: any) => (
                  <ImageCard key={image.public_id} publicId={image.public_id} />
                ))}
              </div>
            ) : (
              <div className='text-center py-10 text-gray-500'>
                <p>No designs found in {tab.slug}</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
