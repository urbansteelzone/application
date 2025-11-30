import { Button } from './ui/button'

export default function Services() {
  return (
    <>
      <section id='services' className='container mx-auto px-4 mb-20'>
        <h2 className='text-3xl font-bold text-center mb-12'>Our Services</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {['Gate', 'Grill', 'Furniture', 'Rolling Shutter'].map((service) => (
            <Button
              key={service}
              variant='outline'
              size='lg'
              className='rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all'
            >
              {service}
            </Button>
          ))}
        </div>
      </section>
    </>
  )
}
