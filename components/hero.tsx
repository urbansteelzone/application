import { Upload } from 'lucide-react'
import Image from 'next/image'
import heroImage from '../public/hero-metalwork.jpg'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <>
      <section id='home' className='container mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              Upload Your Design.
              <br />
              Get Verified Fabricators.
              <br />
              <span className='text-steel-blue'>Done.</span>
            </h1>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Custom gates, grills, furniture, shutters & metal fabrication with
              transparent pricing, expert welders, and fast delivery.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button size='lg' className='gap-2'>
                <Upload className='h-5 w-5' />
                Upload Design
              </Button>
              <Button size='lg' variant='outline'>
                Explore Catalog
              </Button>
            </div>
          </div>

          <div className='relative'>
            <Image
              src={heroImage}
              alt='Premium metal fabrication showcase'
              className='rounded-3xl shadow-lg w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>
    </>
  )
}
