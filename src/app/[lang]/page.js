import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ProductsSection from '@/components/ProductsSection'
import ScrollEffects from '@/components/ScrollEffects'
import { getDictionary, hasLocale } from './dictionaries'

const IMAGES = {
  hero: '/hero-bg.jpg',
  network: '/network.jpg',
  process1: '/step-1.jpg',
  process2: '/step-2.jpg',
  process3: '/step-3.jpg',
  process4: '/step-4.jpg',
  process5: '/step-5.jpg',
  contact: '',
}

export default async function Home({ params }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar lang={lang} dict={dict.nav} />
      <HeroSection heroImage={IMAGES.hero} dict={dict.hero} />
      <ServicesSection networkImage={IMAGES.network} dict={dict.services} />
      <ProcessSection images={[IMAGES.process1, IMAGES.process2, IMAGES.process3, IMAGES.process4, IMAGES.process5]} dict={dict.process} />
      <WhyChooseSection dict={dict.whyChoose} />
      <ProductsSection dict={dict.products} />
      <ContactSection bgImage={IMAGES.contact} dict={dict.contact} />
      <Footer dict={{ ...dict.footer, nav: dict.nav }} />
      <ScrollEffects />
    </div>
  )
}
