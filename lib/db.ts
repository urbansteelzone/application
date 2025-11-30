import mongoose from 'mongoose'

let conn: typeof mongoose | null = null

export async function connectDB() {
  if (conn) return
  conn = await mongoose.connect(process.env.DATABASE_URL!)
}
