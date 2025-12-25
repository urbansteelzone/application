"use client"
import { Button } from '@/components/ui/button'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Replace with your actual WhatsApp number (International format without +)
  // e.g., 919473117041 for India
  const WHATSAPP_NUMBER = '919473117041'
  const WHATSAPP_MESSAGE = 'Hi, I am interested in your designs.'

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`

  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Mobile: Hamburger Menu (Left) */}
        <div className='md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>

        {/* Logo */}
        <div className='flex items-center'>
          <a
            href='/'
            className='font-bold text-lg md:text-xl text-foreground hover:text-primary transition-colors truncate'
          >
            Urban Steel Zone
          </a>
        </div>

        {/* Desktop: Navigation (Center) */}
        <nav className='hidden md:flex items-center gap-8'>
          {['Home', 'Services', 'Catalog', 'Pricing', 'About', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors'
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* WhatsApp Button (Right) */}
        {/* On mobile: Icon only. On Desktop: Icon + Text */}
        <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
          <Button className='gap-2' size='sm'>
            <MessageCircle className='h-4 w-4' />
            <span className='hidden sm:inline'>WhatsApp Us</span>
          </Button>
        </a>
      </div>

      {/* Mobile: Dropdown Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg'>
          {['Home', 'Services', 'Catalog', 'Pricing', 'About', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-sm font-medium text-foreground/80 hover:text-foreground py-2 border-b border-border/50 last:border-0'
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </header>
  )
}

export default Header
