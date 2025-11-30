import { connectDB } from '@/lib/db'
import { verifyJwt } from '@/lib/jwt'
import { User } from '@/models/user'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectDB()

    // 1. Verify User
    const cookieStore = cookies()
    const token = (await cookieStore).get('session')?.value
    if (!token) return new Response('Unauthorized', { status: 401 })

    const payload = verifyJwt(token) as any
    if (!payload) return new Response('Unauthorized', { status: 401 })

    // 2. Get Data
    const { publicId } = await req.json()
    if (!publicId) return new Response('Missing ID', { status: 400 })

    // 3. Update DB (Use $addToSet to prevent duplicates)
    await User.findByIdAndUpdate(payload.sub, {
      $addToSet: { interestedItems: publicId },
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return new Response('Internal Error', { status: 500 })
  }
}
