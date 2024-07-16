import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/_components/shared/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moho - We design and develop web and mobile apps",
  description: "moho - We design and develop web and mobile apps",
  metadataBase: new URL('https://moho.mk'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1b1f4f"/>
        <meta name="msapplication-TileColor" content="#1b1f4f"/>
        <meta name="theme-color" content="#1b1f4f"/>
      </head>
      <body className={`${inter.className} bg-main-blue text-main-text`}>
        <Header/>

        {children}
      </body>
    </html>
  );
}
