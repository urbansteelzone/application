import AuthManager from '@/components/auth-manager'
import { AuthProvider } from '@/contexts/auth-context'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Urban Steel Zone',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <AuthManager /> {/* Pops up when needed */}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
