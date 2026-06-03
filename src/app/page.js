import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ProductsSection from '@/components/ProductsSection'

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

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <ServicesSection networkImage={IMAGES.network} />
      <ProcessSection images={[IMAGES.process1, IMAGES.process2, IMAGES.process3, IMAGES.process4, IMAGES.process5]} />
      <WhyChooseSection />
      <ProductsSection />
      <ContactSection bgImage={IMAGES.contact} />
      <Footer />
    </div>
  )
}
