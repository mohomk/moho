'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScrollspy } from '@/lib/hooks/use-scroll-spy'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const ids = NAV_ITEMS.map(({ href }) => href.slice(1))
  const activeId = useScrollspy(ids, 50)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between'>
        <a href='#hero'>
          <Image
            src='/moho-logo.svg'
            alt='MOHO Logo'
            width={70}
            height={28}
            priority
          />
        </a>

        {/* Desktop */}
        <div className='hidden md:flex items-center gap-10'>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ${activeId === item.href.slice(1) ? 'text-primary' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href='mailto:contact@moho.mk'
            className='bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-2.5 hover:shadow-[0_0_24px_rgba(0,242,255,0.4)] transition-all duration-300'
          >
            {'Let\'s Talk'}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden flex flex-col gap-1.5 p-2'
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4'>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-mono text-sm text-muted-foreground hover:text-primary transition-colors ${activeId === item.href.slice(1) ? 'text-primary' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href='mailto:contact@moho.mk'
            className='block text-center bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-2.5'
          >
            {'Let\'s Talk'}
          </a>
        </div>
      )}
    </nav>
  );
}