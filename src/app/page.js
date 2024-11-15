import Animation from '@/app/_components/shared/animation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-full flex flex-col items-center justify-center min-h-screen relative"
        // className="w-full flex flex-col items-center justify-center min-h-screen relative -mt-[72px]"
        // className="relative overflow-hidden z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <Animation/>

        <div className="w-full max-w-screen-xl mx-auto px-4 pb-20 pt-16">
          <div className="w-full">
            <h1
              className="max-w-3xl drop-shadow-lg text-white font-bold text-5xl md:text-6xl leading-tight sm:leading-tight md:leading-tight mb-5">
              We design and develop web and mobile apps
            </h1>
            <p
              className="drop-shadow-lg text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mb-20">
              We specialize in crafting innovative web solutions that captivate, engage, and inspire
            </p>

            <p className='flex'>
              <a
                href="mailto:contact@moho.mk"
                className='flex items-center justify-center uppercase text-white relative h-[50px] w-40 overflow-hidden border border-main-white hover:border-main-blue px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-main-green before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full'
              ><span className='relative z-10'>Let's talk</span></a>
            </p>
          </div>
        </div>
      </section>

      {/*<section className='w-full min-h-screen flex flex-col items-center justify-center bg-main-green'>*/}
      {/*  <div className="w-full max-w-screen-xl mx-auto p-4">*/}
      {/*    <h2 className='text-main-blue font-bold drop-shadow-lg text-3xl mb-16'>Let's Embrace New Horizons Together</h2>*/}
      {/*    <p className='text-xl mb-8'>At Moho, we're always on the lookout for fresh challenges that push the boundaries of innovation.<br/>*/}
      {/*      Whether you're seeking information, discussing new projects, or considering collaborations,*/}
      {/*      we're here to listen and explore the endless possibilities with you.</p>*/}
      {/*    <p className='text-xl'>Connect with us</p>*/}

      {/*    <h2 className='text-main-blue text-3xl font-bold'><a href="mailto:contact@moho.mk">contact@moho.mk</a></h2>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </main>
);
}
