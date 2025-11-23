import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <a
            href='/'
            className='font-bold text-xl text-foreground hover:text-primary transition-colors'
          >
            Urban Steel Zone
          </a>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <a
            href='#home'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            Home
          </a>
          <a
            href='#services'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            Services
          </a>
          <a
            href='#catalog'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            Catalog
          </a>
          <a
            href='#pricing'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            Pricing
          </a>
          <a
            href='#about'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            About Us
          </a>
          <a
            href='#contact'
            className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
          >
            Contact
          </a>
        </nav>

        <Button className='gap-2'>
          <MessageCircle className='h-4 w-4' />
          WhatsApp Us
        </Button>
      </div>
    </header>
  )
}

export default Header
