import { Manrope, Inter, JetBrains_Mono } from "next/font/google"
import { notFound } from 'next/navigation'
import "../globals.css";
import { getDictionary, hasLocale, locales } from './dictionaries'

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    appleWebApp: {
      title: dict.metadata.appleWebAppTitle,
    },
    // --- Open Graph ---
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `https://moho.mk/${lang}`,
      siteName: 'MOHO',
      images: [
        {
          url: 'https://moho.mk/og-image.jpg',
          width: 1200,
          height: 630,
          alt: dict.metadata.ogImageAlt,
        },
      ],
      locale: lang === 'mk' ? 'mk_MK' : 'en_US',
      type: 'website',
    },

    // --- Twitter ---
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['https://moho.mk/og-image.jpg'],
    },
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
