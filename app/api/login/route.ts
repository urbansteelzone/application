import { connectDB } from '@/lib/db'
import { verifyPassword } from '@/lib/hash'
import { createJwt } from '@/lib/jwt'
import { User } from '@/models/user'
import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  await connectDB()
  const { phone, password } = await req.json()
  const user = await User.findOne({ phone })
  if (!user) return new Response('Unauthorized', { status: 401 })

  const ok = await verifyPassword(password, user.hash)
  if (!ok) return new Response('Unauthorized', { status: 401 })

  const token = createJwt({ sub: user._id.toString(), phone: user.phone })
  const res = NextResponse.json({ ok: true })
  // set httpOnly cookie
  res.cookies.set({
    name: 'session',
    value: token,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return res
}
