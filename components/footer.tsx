import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-muted/30 border-t border-border mt-20'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4'>About Urban Steel Zone</h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Premium steel fabrication services with 7+ years of experience.
              Custom gates, grills, furniture, and metal works delivered with
              precision and quality.
            </p>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Services</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Custom Gates
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Metal Grills
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Steel Furniture
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Rolling Shutters
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Custom Fabrication
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Catalog</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Gates & Doors
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Window Grills
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Metal Sofas
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Security Shutters
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  Custom Designs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Contact Info</h3>
            <div className='space-y-3 text-sm text-muted-foreground'>
              <div className='flex items-start gap-2'>
                <MapPin className='h-4 w-4 mt-0.5 shrink-0' />
                <span>Azad Nagar, Millat Nagar, Araria, Bihar 854311</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4 shrink-0' />
                <span>+91 94731 17041</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4 shrink-0' />
                <span>urbansteelzone@gmail.com</span>
              </div>
            </div>

            <div className='mt-6'>
              <h4 className='font-semibold mb-3'>Follow Us</h4>
              <div className='flex gap-3'>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  <Facebook className='h-5 w-5' />
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  <Instagram className='h-5 w-5' />
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  <Twitter className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground'>
          <p>&copy; 2025 Urban Steel Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
