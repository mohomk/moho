import Image from 'next/image'

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

export default function ProcessSection({ images }) {
  return (
    <section id='process' className='relative py-32 px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-20'>
          <span className='font-mono text-sm text-primary tracking-widest uppercase'>
            // Our Process
          </span>
          <h2 className='font-display font-extrabold text-4xl sm:text-5xl mt-4'>
            System Logic
          </h2>
          <p className='text-muted-foreground text-lg mt-4 max-w-xl mx-auto'>
            From concept to deployment — a rigorous, transparent pipeline.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Center line */}
          <div className='absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent' />

          <div className='space-y-16'>
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              const img = images[i % images.length];
              return (
                <div key={step.num} className='relative'>
                  {/* Node dot */}
                  <div className='absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,242,255,0.6)] z-10' />

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 pl-12 lg:pl-0`}>
                    {/* Card */}
                    <div className={`${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'}`}>
                      <div className='border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden'>
                        {/* Terminal title bar */}
                        <div className='flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-muted/30'>
                          <div className='flex gap-1.5'>
                            <div className='w-2.5 h-2.5 rounded-full bg-destructive/60' />
                            <div className='w-2.5 h-2.5 rounded-full bg-yellow-500/60' />
                            <div className='w-2.5 h-2.5 rounded-full bg-green-500/60' />
                          </div>
                          <span className='font-mono text-xs text-muted-foreground ml-2'>
                            step_{step.num}.process
                          </span>
                          <span className={`ml-auto font-mono text-xs ${
                            step.status === 'active' ? 'text-primary' : 'text-muted-foreground/40'
                          }`}>
                            [{step.status}]
                          </span>
                        </div>

                        {/* Image */}
                        {img && (
                          <div className='overflow-hidden aspect-video'>
                            {/*<Image*/}
                            {/*  src={img}*/}
                            {/*  alt={step.title}*/}
                            {/*  width={100}*/}
                            {/*  height={100}*/}
                            {/*  className='w-full h-full object-cover opacity-40'*/}
                            {/*  priority*/}
                            {/*/>*/}
                            <img src={img} alt={step.title} className='w-full h-full aspect-video object-cover opacity-40' />
                          </div>
                        )}

                        {/* Content */}
                        <div className='p-6'>
                          <div className='flex items-center gap-3 mb-3'>
                            <span className='font-mono text-2xl font-bold text-primary/30'>{step.num}</span>
                            <h3 className='font-heading font-bold text-xl'>{step.title}</h3>
                          </div>
                          <p className='text-muted-foreground text-sm leading-relaxed'>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}