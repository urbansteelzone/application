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
        <PriceEstimator />

        {/* Services Section */}
        <Services />

        <Catalog />

        {/* Quick Quote Form */}
        <section id='contact' className='container mx-auto px-4 mb-20'>
          <Card className='max-w-2xl mx-auto p-8 shadow-xl'>
            <h2 className='text-3xl font-bold text-center mb-2'>
              Get Quote in 30 Seconds
            </h2>
            <p className='text-center text-muted-foreground mb-8'>
              We'll respond in 5 minutes
            </p>
            <div className='space-y-4'>
              <Input placeholder='What you need (e.g., Main gate)' />
              <Input placeholder='Size (e.g., 10x7 feet)' />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select material' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='ms'>Mild Steel</SelectItem>
                  <SelectItem value='ss'>Stainless Steel</SelectItem>
                  <SelectItem value='gi'>Galvanized Iron</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder='Budget range' />
              <div className='border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer'>
                <Upload className='h-8 w-8 mx-auto mb-2 text-muted-foreground' />
                <p className='text-sm text-muted-foreground'>
                  Upload design (optional)
                </p>
              </div>
              <Button className='w-full' size='lg'>
                Get Quote in 5 Minutes
              </Button>
            </div>
          </Card>
        </section>

        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsapp />
      </div>
    </>
  )
}
