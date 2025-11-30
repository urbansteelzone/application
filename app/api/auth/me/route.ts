import { connectDB } from '@/lib/db'
import { verifyJwt } from '@/lib/jwt'
import { User } from '@/models/user'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()

  // 1. Get the cookie from the request
  const cookieStore = cookies()
  const token = (await cookieStore).get('session')?.value

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  // 2. Verify the token
  const payload = verifyJwt(token)
  if (!payload) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  // 3. Fetch user data (exclude password hash)
  const user = await User.findById(payload.sub).select('-hash')

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  return NextResponse.json(user)
}
