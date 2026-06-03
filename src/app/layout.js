import { Manrope, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css";

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

export const metadata = {
  title: 'MOHO - We Design & Develop Web & Mobile Apps',
  description: 'We specialize in crafting innovative web solutions that captivate, engage, and inspire. Your trusted partner in digital transformation.',
  appleWebApp: {
    title: 'moho',
  },
  // --- Open Graph ---
  openGraph: {
    title: 'MOHO - We Design & Develop Web & Mobile Apps',
    description: 'We specialize in crafting innovative web solutions that captivate, engage, and inspire. Your trusted partner in digital transformation.',
    url: 'https://moho.mk',
    siteName: 'MOHO',
    images: [
      {
        url: 'https://moho.mk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MOHO OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // --- Twitter ---
  twitter: {
    card: 'summary_large_image',
    title: 'MOHO - We Design & Develop Web & Mobile Apps',
    description: 'We specialize in crafting innovative web solutions that captivate, engage, and inspire. Your trusted partner in digital transformation.',
    // creator: '@yourhandle',
    images: ['https://moho.mk/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
