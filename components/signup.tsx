'use client'

import { useState } from 'react'

export default function Signup({ onSuccess }: any) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, password }),
    })
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
        type='password'
        placeholder='password'
      />
      <button type='submit'>Signup</button>
    </form>
  )
}
