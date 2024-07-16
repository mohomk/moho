"use client"
import Link from 'next/link'
import Image from 'next/image'
import useScroll from '@/lib/hooks/use-scroll'

const Header = () => {
  const scrolled = useScroll(100)

  return (
    <header className={`absolute flex items-center w-full top-0 left-0 z-40 h-16 transition-colors duration-300 ${scrolled ? 'backdrop-blur-sm bg-main-blue/60' : ''} `}>
      <div className='flex w-full max-w-screen-xl mx-auto px-4 py-2'>
        <Link href='/'>
          <Image
            src="/moho-logo.svg"
            alt="MOHO Logo"
            width={100}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
