import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const ALLOWED_IPS = new Set<string>([
  '31.146.70.219', // user IP
  '127.0.0.1',     // localhost (dev)
  '::1',           // localhost IPv6 (dev)
])

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isStatsPage = pathname.startsWith('/stats')
  const isTrackApi = pathname.startsWith('/api/track')

  // Only protect:
  // - /stats (all methods)
  // - /api/track GET (allow POST for tracking from any visitor)
  const shouldProtect =
    isStatsPage ||
    (isTrackApi && req.method === 'GET')

  if (!shouldProtect) {
    return NextResponse.next()
  }

  const ip =
    req.ip ||
    req.headers.get('x-real-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
    ''

  const isAllowed =
    process.env.NODE_ENV !== 'production' // allow all in dev
    || (ip && ALLOWED_IPS.has(ip))

  if (isAllowed) {
    return NextResponse.next()
  }

  // Block unauthorized access:
  if (pathname.startsWith('/api/')) {
    return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: ['/stats/:path*', '/api/track', '/api/track/:path*'],
}


