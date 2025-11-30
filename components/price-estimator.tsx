import { Clock, DollarSign, Users } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export default function PriceEstimator() {
  const estimatedPrice = true
  const estimatedTime = 424
  return (
    <>
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
    </>
  )
}
