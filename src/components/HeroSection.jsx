'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection ({ heroImage }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (!gridRef.current) return
      const rect = gridRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      gridRef.current.style.setProperty('--mouse-x', `${x}%`)
      gridRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      id='hero'
      ref={gridRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
    >
      {/* Animated grid background */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Spotlight */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.08), transparent 50%)',
        }}
      />

      {/* Hero image overlay */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <img
          src={heroImage}
          alt='Abstract glass cubes refracting cyan light'
          className='w-full h-full object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40'/>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center max-w-5xl mx-auto px-6'>
        <p className='font-mono text-sm text-primary tracking-widest uppercase mb-6'>
          {'// Software Engineering Studio'}
        </p>
        <h1 className='font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.2] mb-8'>
          {'We Design & '}
          <span className='relative inline-block'>
            Develop
            {/*<span className='absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full'/>*/}
          </span>
          <br/>
          <span
            className='text-transparent bg-clip-text'
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
            }}
          >
            {'Web & Mobile Apps'}
          </span>
        </h1>
        <p className='text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
          We specialize in crafting innovative web solutions that captivate,
          engage, and inspire. Your trusted partner in digital transformation.
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='#contact'
            className='bg-primary text-primary-foreground font-heading font-bold px-10 py-4 text-base hover:shadow-[0_0_40px_rgba(0,242,255,0.35)] transition-all duration-300'
          >
            {'Start a Project →'}
          </a>
          <a
            href='#services'
            className='border border-border text-foreground font-heading font-medium px-10 py-4 text-base hover:border-primary/50 hover:text-primary transition-all duration-300'
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {/*<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>*/}
      {/*  <span className='font-mono text-xs text-muted-foreground'>scroll</span>*/}
      {/*  <div className='w-px h-8 bg-gradient-to-b from-primary/60 to-transparent animate-pulse'/>*/}
      {/*</div>*/}
    </section>
  )
}