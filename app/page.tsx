import Footer from '@/components/footer'
import Header from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import Catalog from '@/components/Catalog'
import {
  Award,
  CheckCircle2,
  Clock,
  DollarSign,
  MessageCircle,
  Package,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Upload,
  Users,
} from 'lucide-react'
import Image from 'next/image'
// import { useState } from 'react'
import heroImage from '../public/hero-metalwork.jpg'

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

  return (
    <>
      <div className='min-h-screen bg-background'>
        <Header />
        {/* Hero Section */}
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
                Custom gates, grills, furniture, shutters & metal fabrication
                with transparent pricing, expert welders, and fast delivery.
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

        {/* AI Suggestions Box */}
        <section className='container mx-auto px-4 mb-16'>
          <Card className='bg-steel-light/30 border-border shadow-sm'>
            <CardContent className='p-6'>
              <div className='flex items-start gap-3 mb-4'>
                <Sparkles className='h-5 w-5 text-steel-blue mt-1' />
                <h3 className='font-semibold text-lg'>
                  AI-Assisted Suggestions
                </h3>
              </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm'>
                <div className='flex items-center gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-steel-blue' />
                  <span>Similar design ideas</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-steel-blue' />
                  <span>Material Recommendations (MS/SS/GI)</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-steel-blue' />
                  <span>Estimated cost range</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-steel-blue' />
                  <span>Delivery time estimate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Price Estimator */}
        <section id='pricing' className='container mx-auto px-4 mb-20'>
          <Card className='max-w-3xl mx-auto shadow-xl border-border'>
            <CardContent className='p-8'>
              <h2 className='text-3xl font-bold text-center mb-8'>
                Instant Price Estimator
              </h2>
              <div className='grid md:grid-cols-3 gap-4 mb-6'>
                <div>
                  <label className='text-sm font-medium mb-2 block'>Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select size' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='small'>Small (3x5 ft)</SelectItem>
                      <SelectItem value='medium'>Medium (5x7 ft)</SelectItem>
                      <SelectItem value='large'>Large (7x10 ft)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className='text-sm font-medium mb-2 block'>
                    Material
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select material' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='ms'>Mild Steel (MS)</SelectItem>
                      <SelectItem value='ss'>Stainless Steel (SS)</SelectItem>
                      <SelectItem value='gi'>Galvanized Iron (GI)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className='text-sm font-medium mb-2 block'>
                    Complexity
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select complexity' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='simple'>Simple</SelectItem>
                      <SelectItem value='moderate'>Moderate</SelectItem>
                      <SelectItem value='complex'>Complex</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                // onClick={handlePriceCalculation}
                className='w-full mb-6'
                size='lg'
              >
                Calculate Price
              </Button>
              {estimatedPrice && (
                <div className='grid md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg'>
                  <div className='text-center'>
                    <DollarSign className='h-5 w-5 mx-auto mb-2 text-steel-blue' />
                    <p className='text-sm text-muted-foreground mb-1'>
                      Estimated Price
                    </p>
                    <p className='font-semibold'>{estimatedPrice}</p>
                  </div>
                  <div className='text-center'>
                    <Clock className='h-5 w-5 mx-auto mb-2 text-steel-blue' />
                    <p className='text-sm text-muted-foreground mb-1'>
                      Estimated Timeline
                    </p>
                    <p className='font-semibold'>{estimatedTime}</p>
                  </div>
                  <div className='text-center'>
                    <Users className='h-5 w-5 mx-auto mb-2 text-steel-blue' />
                    <p className='text-sm text-muted-foreground mb-1'>
                      Suggested Fabricator
                    </p>
                    <p className='font-semibold'>Rajesh Kumar</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Services Section */}
        <section id='services' className='container mx-auto px-4 mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>Our Services</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            {['Gate', 'Grill', 'Furniture', 'Rolling Shutter'].map(
              (service) => (
                <Button
                  key={service}
                  variant='outline'
                  size='lg'
                  className='rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all'
                >
                  {service}
                </Button>
              )
            )}
          </div>
        </section>

        {/* Catalog Section */}
        <Catalog />

        {/* Verified Fabricators */}
        <section className='container mx-auto px-4 mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Verified Fabricators
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                name: 'Rajesh Kumar',
                exp: '12 years',
                specialty: 'Gates & Grills',
                rating: 4.9,
              },
              {
                name: 'Amit Singh',
                exp: '8 years',
                specialty: 'Furniture',
                rating: 4.8,
              },
              {
                name: 'Vijay Sharma',
                exp: '15 years',
                specialty: 'Custom Work',
                rating: 5.0,
              },
              {
                name: 'Suresh Patel',
                exp: '10 years',
                specialty: 'Shutters',
                rating: 4.7,
              },
            ].map((fabricator) => (
              <Card
                key={fabricator.name}
                className='text-center p-6 hover:shadow-lg transition-shadow'
              >
                <div className='w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <Users className='h-10 w-10 text-muted-foreground' />
                </div>
                <Badge className='mb-2' variant='secondary'>
                  <Shield className='h-3 w-3 mr-1' />
                  Verified
                </Badge>
                <h3 className='font-semibold text-lg mb-2'>
                  {fabricator.name}
                </h3>
                <p className='text-sm text-muted-foreground mb-2'>
                  {fabricator.exp} Experience
                </p>
                <p className='text-sm font-medium mb-3'>
                  {fabricator.specialty}
                </p>
                <div className='flex items-center justify-center gap-1'>
                  <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                  <span className='font-semibold'>{fabricator.rating}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Before-After Gallery */}
        <section className='container mx-auto px-4 mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Before & After
          </h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card className='overflow-hidden'>
              <div className='aspect-video bg-muted flex items-center justify-center'>
                <p className='text-muted-foreground font-medium'>Before</p>
              </div>
              <CardContent className='p-4'>
                <p className='text-sm text-muted-foreground'>
                  Old rusted gate before renovation
                </p>
              </CardContent>
            </Card>
            <Card className='overflow-hidden'>
              <div className='aspect-video bg-muted flex items-center justify-center'>
                <p className='text-muted-foreground font-medium'>After</p>
              </div>
              <CardContent className='p-4'>
                <p className='text-sm text-muted-foreground'>
                  Premium custom gate with modern design
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reviews Section */}
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

        {/* Recommended Designs */}
        <section className='container mx-auto px-4 mb-20'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-3xl font-bold'>Recommended Designs For You</h2>
            <Button variant='ghost'>
              View All
              <TrendingUp className='h-4 w-4 ml-2' />
            </Button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='aspect-square bg-muted flex items-center justify-center'>
                  <Package className='h-16 w-16 text-muted-foreground' />
                </div>
                <CardContent className='p-4'>
                  <Badge variant='secondary' className='mb-2'>
                    Trending
                  </Badge>
                  <h3 className='font-semibold mb-2'>Modern Design {item}</h3>
                  <p className='text-sm text-muted-foreground'>
                    Starting from ₹12,000
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section id='about' className='container mx-auto px-4 mb-20'>
          <div className='bg-muted/30 rounded-3xl p-8 md:p-12'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-8 text-center'>
              <div>
                <Award className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
                <p className='font-bold text-2xl mb-1'>7+</p>
                <p className='text-sm text-muted-foreground'>
                  Years Experience
                </p>
              </div>
              <div>
                <CheckCircle2 className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
                <p className='font-bold text-2xl mb-1'>500+</p>
                <p className='text-sm text-muted-foreground'>Projects</p>
              </div>
              <div>
                <Shield className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
                <p className='font-bold text-2xl mb-1'>100%</p>
                <p className='text-sm text-muted-foreground'>
                  Verified Fabricators
                </p>
              </div>
              <div>
                <DollarSign className='h-10 w-10 mx-auto mb-3 text-steel-blue' />
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

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href='https://wa.me/9473117041'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50'
        >
          <MessageCircle className='h-6 w-6' />
        </a>
      </div>
    </>
  )
}
