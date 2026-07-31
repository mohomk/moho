import { CreamLogoLight } from '@/components/Logos'
import { ExternalLink } from 'lucide-react'

export default function ProductsSection({ dict }) {
  return (
    <section id='products' className='relative py-32 px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-20'>
          <span className='font-mono text-sm text-primary tracking-widest uppercase'>
            {dict.eyebrow}
          </span>
          <h2 className='font-display font-extrabold text-4xl sm:text-5xl mt-4'>
            {dict.title}
          </h2>
          <p className='text-muted-foreground text-lg mt-4 max-w-xl mx-auto'>
            {dict.description}
          </p>
        </div>

        {/* Products */}
        <div className='relative border-border/60 border-t border-b'>
          <div className='relative border-border/60 bg-card/40 xl:border-x px-4 py-16'>
            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='flex items-center justify-center'>
                <CreamLogoLight className='max-w-3xs'/>
              </div>

              <div>
                <h3 className='font-heading font-bold text-2xl mb-2'>{dict.product.name}</h3>
                <h4 className='font-heading font-bold text-primary text-lg mb-4'>{dict.product.tagline}</h4>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  {dict.product.desc}
                </p>

                <a href="https://cream.mk" target='_blank'
                   className='bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-2.5 hover:shadow-[0_0_24px_rgba(0,242,255,0.4)] transition-all duration-300 inline-flex items-center'>
                  {dict.product.cta} <ExternalLink size={16} className='ml-2'/>
                </a>
              </div>
            </div>

            <div className="absolute -top-1 -left-1 size-1.75 bg-primary" />
            <div className="absolute -top-1 -right-1 size-1.75 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}