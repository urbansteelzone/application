import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// import { verifyJwt } from './lib/jwt'

export function proxy(req: NextRequest) {
//   const url = req.nextUrl.clone()
//   if (req.nextUrl.pathname.startsWith('/interested')) {
//     const token = req.cookies.get('session')?.value
//     const payload = token ? verifyJwt(token) : null
//     if (!payload) {
//       url.pathname = '/login'
//       return NextResponse.redirect(url)
//     }
//   }
//   return NextResponse.next()
}

// export const config = { matcher: ['/interested/:path*'] }
