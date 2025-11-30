'use client'

import { useState } from 'react'

export default function Login({ onSuccess }: any) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    const r = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (r.ok) {
      console.log('Loggedin')
    } else alert('invalid')
  }

  return (
    <form onSubmit={submit}>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='phone'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        type='password'
      />
      <button type='submit'>Login</button>
    </form>
  )
}
