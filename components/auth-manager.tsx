'use client'

import { useAuth } from '@/contexts/auth-context'
import AuthModal from './auth-modal'

export default function AuthManager() {
  const { isOpen, setIsOpen, onLogin } = useAuth()

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSuccess={onLogin}
    />
  )
}
