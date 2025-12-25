import Footer from '@/components/footer'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import AuthModal from '@/components/auth-modal'
import Catalog from '@/components/Catalog'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Hero from '@/components/hero'
import PriceEstimator from '@/components/price-estimator'
import Services from '@/components/services'
import TrustSingle from '@/components/trust-single'
import { Label } from '@/components/ui/label'
import { MessageCircle, Star, Upload } from 'lucide-react'

export default function page() {
  // const [estimatedPrice, setEstimatedPrice] = useState<string>('')
  // const [estimatedTime, setEstimatedTime] = useState<string>('')
  const estimatedPrice = 0
  const estimatedTime = 0

  const handlePriceCalculation = () => {
    // setEstimatedPrice('₹15,000 - ₹25,000')
    // setEstimatedTime('7-10 days')
    return
  }
  // const [isModalOpen, setModalOpen] = useState(false)
  // const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  // Run after successful login in modal
  // const handleAuthSuccess = () => {
  //   setModalOpen(false)
  //   if (pendingAction) pendingAction()
  // }

  return (
    <>
      {/* <AuthModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleAuthSuccess}
      /> */}
      <div className='min-h-screen bg-background'>
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Trust Signals */}
        <TrustSingle />
        {/* Price Estimator */}
        {/* <PriceEstimator /> */}

        {/* Services Section */}
        <Services />

        <Catalog />

        {/* Quick Quote Form */}
        {/* <section id='contact' className='container mx-auto px-4 mb-20'>
          <Card className='max-w-2xl mx-auto p-8 shadow-xl'>
            <h2 className='text-3xl font-bold text-center mb-2'>
              Get Custom Design
            </h2>
            <p className='text-center text-muted-foreground mb-8'>
              We'll respond in 5 minutes
            </p>
            <div className='space-y-4'>
              <Label className='inline' htmlFor='what_you_need'>
                What you need
              </Label>
              <Input
                id='what_you_need'
                placeholder='e.g., Main gate'
              />
              <Label className='inline' htmlFor='size'>
                Size
              </Label>
              <Input id='size' placeholder='e.g., 10x7 feet' />
              <Label className='inline' htmlFor='select_material'>
                Select Material
              </Label>
              <Select>
                <SelectTrigger id='select_material'>
                  <SelectValue placeholder='Select material' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='ms'>Mild Steel</SelectItem>
                  <SelectItem value='ss'>Stainless Steel</SelectItem>
                  <SelectItem value='gi'>Galvanized Iron</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor='budget'>Budget</Label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <span className='text-gray-500 sm:text-sm'>₹</span>
                </div>
                <Input
                  type='number'
                  name='budget'
                  id='budget'
                  className='block rounded-md border-0 py-1.5 pl-7 pr-2'
                  placeholder='2000'
                />
              </div>
              <div className='border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer'>
                <Upload className='h-8 w-8 mx-auto mb-2 text-muted-foreground' />
                <p className='text-sm text-muted-foreground'>
                  Upload design (optional)
                </p>
              </div>
              <Button className='w-full' size='lg'>
                Request
              </Button>
            </div>
          </Card>
        </section> */}

        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsapp />
      </div>
    </>
  )
}
