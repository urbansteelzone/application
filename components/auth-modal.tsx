'use client'
import { useState } from 'react'

export default function AuthModal({ isOpen, onClose, onSuccess }: any) {
  const [isLogin, setIsLogin] = useState(true)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  async function submit(e: any) {
    e.preventDefault()
    const endpoint = isLogin ? '/api/login' : '/api/signup'

    // Replace with your actual fetch
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      onSuccess() // <--- CRITICAL: Triggers the protected action
    } else {
      alert('Error')
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='bg-white p-6 rounded-lg w-full max-w-sm relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-4 text-xl font-bold'
        >
          &times;
        </button>

        <h2 className='text-xl font-bold mb-4'>
          {isLogin ? 'Login' : 'Signup'}
        </h2>

        <form onSubmit={submit} className='flex flex-col gap-3'>
          <input
            className='border p-2 rounded'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone'
          />
          <input
            className='border p-2 rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <button type='submit' className='bg-black text-white p-2 rounded'>
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p
          className='mt-4 text-center text-sm text-blue-600 cursor-pointer'
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need account? Signup' : 'Have account? Login'}
        </p>
      </div>
    </div>
  )
}
