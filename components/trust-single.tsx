import { Award, CheckCircle2, Clock, IndianRupee, Shield } from 'lucide-react'

export default function TrustSingle() {
  return (
    <>
      <section id='about' className='container mx-auto px-4 mb-20'>
        <div className='bg-muted/30 rounded-3xl p-8 md:p-12'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-8 text-center'>
            <div>
              <Award className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
              <p className='font-bold text-2xl mb-1'>22+</p>
              <p className='text-sm text-muted-foreground'>Years Experience</p>
            </div>
            <div>
              <CheckCircle2 className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
              <p className='font-bold text-2xl mb-1'>200+</p>
              <p className='text-sm text-muted-foreground'>Projects</p>
            </div>
            <div>
              <Shield className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
              <p className='font-bold text-2xl mb-1'>100%</p>
              <p className='text-sm text-muted-foreground'>Quality Assurance</p>
            </div>
            <div>
              <IndianRupee className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
              <p className='font-bold text-2xl mb-1'>Secure</p>
              <p className='text-sm text-muted-foreground'>Payments</p>
            </div>
            <div>
              <Clock className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
              <p className='font-bold text-2xl mb-1'>On-Time</p>
              <p className='text-sm text-muted-foreground'>Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
