import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET!
const EXPIRES = process.env.JWT_EXPIRES_IN || '7d'

export function createJwt(payload: object) {
  // @ts-ignore
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES })
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}
