import { CreamLogoLight } from '@/components/Logos'
import { ExternalLink } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We begin by understanding your vision, goals, and requirements. Through in-depth consultations, we map out the project scope and define success metrics.',
    status: 'initialized',
  },
  {
    num: '02',
    title: 'Design & Architecture',
    desc: 'Our team crafts pixel-perfect designs and robust technical architectures. We prototype, iterate, and refine until every detail aligns with your vision.',
    status: 'active',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'We code with precision using cutting-edge frameworks and best practices. Agile sprints, code reviews, and continuous integration ensure quality at every step.',
    status: 'in_progress',
  },
  {
    num: '04',
    title: 'Testing & QA',
    desc: 'Rigorous testing across devices, browsers, and scenarios. We catch every edge case so your users experience only perfection.',
    status: 'pending',
  },
  {
    num: '05',
    title: 'Deployment & Support',
    desc: 'Seamless launch and ongoing maintenance. We monitor performance, push updates, and provide dedicated support to keep your product running flawlessly.',
    status: 'pending',
  },
];

export default function ProductsSection() {
  return (
    <section id='products' className='relative py-32 px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-20'>
          <span className='font-mono text-sm text-primary tracking-widest uppercase'>
            {`// Featured Products`}
          </span>
          <h2 className='font-display font-extrabold text-4xl sm:text-5xl mt-4'>
            Our Solutions
          </h2>
          <p className='text-muted-foreground text-lg mt-4 max-w-xl mx-auto'>
            {`Explore the products we\'ve developed to help organizations work smarter, automate processes, and achieve their goals.`}
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
                <h3 className='font-heading font-bold text-2xl mb-2'>CREAM ERP</h3>
                <h4 className='font-heading font-bold text-primary text-lg mb-4'>One System for Complete Business
                  Management</h4>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  CREAM is a modular ERP system designed to grow alongside your business ambitions.
                  With integrated modules, an intuitive user experience, and clear, accurate insights into business
                  data, CREAM provides complete control, improved efficiency, and streamlined operations.
                </p>

                <a href="https://cream.mk" target='_blank'
                   className='bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-2.5 hover:shadow-[0_0_24px_rgba(0,242,255,0.4)] transition-all duration-300 inline-flex items-center'>
                  Explore CREAM <ExternalLink size={16} className='ml-2'/>
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