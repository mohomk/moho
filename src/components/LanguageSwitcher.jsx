'use client'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FlagGB({ className }) {
  return (
    <svg viewBox='0 0 24 16' className={className} aria-hidden='true'>
      <rect width='24' height='16' fill='#012169' />
      <g stroke='#FFFFFF' strokeWidth='3'>
        <line x1='0' y1='0' x2='24' y2='16' />
        <line x1='24' y1='0' x2='0' y2='16' />
      </g>
      <g stroke='#C8102E' strokeWidth='1.2'>
        <line x1='0' y1='0' x2='24' y2='16' />
        <line x1='24' y1='0' x2='0' y2='16' />
      </g>
      <g stroke='#FFFFFF' strokeWidth='5'>
        <line x1='12' y1='0' x2='12' y2='16' />
        <line x1='0' y1='8' x2='24' y2='8' />
      </g>
      <g stroke='#C8102E' strokeWidth='2.6'>
        <line x1='12' y1='0' x2='12' y2='16' />
        <line x1='0' y1='8' x2='24' y2='8' />
      </g>
    </svg>
  )
}

function FlagMK({ className }) {
  const ray = '12,8 9.5,-20 14.5,-20'
  return (
    <svg viewBox='0 0 24 16' className={className} aria-hidden='true'>
      <rect width='24' height='16' fill='#D20000' />
      <g fill='#FFE600'>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <polygon key={deg} points={ray} transform={`rotate(${deg} 12 8)`} />
        ))}
        <circle cx='12' cy='8' r='3' />
      </g>
    </svg>
  )
}

const LANGUAGES = [
  { code: 'en', label: 'English', Flag: FlagGB },
  { code: 'mk', label: 'Македонски', Flag: FlagMK },
]

export default function LanguageSwitcher({ lang, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-haspopup='listbox'
        aria-expanded={open}
        className='flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300'
      >
        <current.Flag className='w-5 h-auto shrink-0' />
        <span className='uppercase'>{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role='listbox'
          className='absolute left-0 top-full mt-3 w-44 border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl py-1 z-50'
        >
          {LANGUAGES.map(({ code, label, Flag }) => (
            <a
              key={code}
              href={`/${code}`}
              role='option'
              aria-selected={lang === code}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 font-mono text-xs transition-colors duration-200 ${
                lang === code
                  ? 'text-primary bg-primary/5'
                  : 'text-muted-foreground hover:text-primary hover:bg-muted/30'
              }`}
            >
              <Flag className='w-5 h-auto shrink-0' />
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
