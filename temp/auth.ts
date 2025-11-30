import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
// Import your DB adapter or user fetcher here
import { getUserByPhone } from '@/lib/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Phone',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.phone || !credentials?.password) {
          return null
        }

        // 1. Fetch user from DB
        const user = await getUserByPhone(credentials.phone as string)
        if (!user) return null

        // 2. Verify Password
        const passwordsMatch = await bcrypt.compare(
          credentials.password as string,
          user.password_hash
        )

        if (!passwordsMatch) return null

        // 3. Return user object (saved to JWT)
        return { id: user.id, name: user.name, phone: user.phone }
      },
    }),
  ],
})
