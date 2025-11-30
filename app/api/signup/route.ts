import { connectDB } from '@/lib/db'
import { hashPassword } from '@/lib/hash'
import { User } from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  await connectDB()
  const { phone, password } = await req.json()
  const existing = await User.findOne({ phone })
  if (existing) return new Response('Conflict', { status: 409 })

  const hash = await hashPassword(password)
  const user = await User.create({ phone, hash })
  return NextResponse.json({ ok: true, id: user._id })
}
