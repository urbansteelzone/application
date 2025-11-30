'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextType {
  user: any
  setUser: (user: any) => void
  protect: (action: () => void) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onLogin: () => void
  isLoading: boolean // Added loading state
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Start as loading
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  // 1. Fetch user on mount
  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        }
      } catch (error) {
        // Remain logged out on error
      } finally {
        setIsLoading(false)
      }
    }
    loadUser()
  }, [])

  const protect = (action: () => void) => {
    if (user) return action()
    setPendingAction(() => action)
    setIsOpen(true)
  }

  const onLogin = () => {
    setIsOpen(false)
    if (pendingAction) pendingAction()
    setPendingAction(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, protect, isOpen, setIsOpen, onLogin, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
