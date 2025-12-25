import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsapp() {
  const WHATSAPP_NUMBER = '919473117041'
  const WHATSAPP_MESSAGE = 'Hi, I am interested in your designs.'

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`
  return (
    <>
      <a
        href={whatsappLink}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50'
      >
        <MessageCircle className='h-6 w-6' />
      </a>
    </>
  )
}
