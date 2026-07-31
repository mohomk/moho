import { NextResponse } from 'next/server'

const locales = ['en', 'mk']
const defaultLocale = 'en'

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())

  return preferred.find((lang) => locales.includes(lang)) || defaultLocale
}

export function proxy(request) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
