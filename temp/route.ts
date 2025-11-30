import { db } from '@/db'
import { todos } from '@/db/schema'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { title } = await req.json()

  if (!title) {
    return NextResponse.json({ error: 'Missing title' }, { status: 400 })
  }
  console.log('In Server')
  const [inserted] = await db.insert(todos).values({ title }).returning()
  return NextResponse.json(inserted)
}
