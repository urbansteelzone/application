import { Star } from 'lucide-react'
import { Card } from './ui/card'

export default function CustomerReview() {
  return (
    <>
      <section className='container mx-auto px-4 mb-20'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Customer Reviews
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              name: 'Priya Mehta',
              location: 'Mumbai',
              rating: 5,
              review:
                'Exceptional quality and timely delivery. The custom gate exceeded our expectations!',
            },
            {
              name: 'Arjun Reddy',
              location: 'Bangalore',
              rating: 5,
              review:
                'Professional service from start to finish. Highly recommend for any metal work.',
            },
            {
              name: 'Sneha Desai',
              location: 'Pune',
              rating: 4,
              review:
                'Great craftsmanship and attention to detail. Worth every penny!',
            },
          ].map((review, idx) => (
            <Card key={idx} className='p-6'>
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='h-4 w-4 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-sm mb-4 leading-relaxed'>{review.review}</p>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-muted rounded-full' />
                <div>
                  <p className='font-semibold text-sm'>{review.name}</p>
                  <p className='text-xs text-muted-foreground'>
                    {review.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
