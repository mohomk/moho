'use client'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

export default function ContactSection({ bgImage }) {
  const [form, setForm] = useState({ email: '', subject: '', message: '' })
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const contactSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
  })

  const handleValidation = () => {
    const result = contactSchema.safeParse(form)

    if (!result.success) {
      const tree = z.treeifyError(result.error)
      setErrors({
        ...(tree.properties?.email?.errors?.[0] && { email: tree.properties.email.errors[0] }),
        ...(tree.properties?.subject?.errors?.[0] && { subject: tree.properties.subject.errors[0] }),
        ...(tree.properties?.message?.errors?.[0] && { message: tree.properties.message.errors[0] }),
      })

      toast.error('Please fill in all the required fields.')

      return false
    }

    setErrors({})
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    let isValid = handleValidation()

    if (isValid) {
      const apiEndpoint = '/api/contact';

      await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(form)
      })
        .then(res => {
          setForm({ email: '', subject: '', message: '' })

          toast.success('Message sent! We\'ll be in touch soon.')
        })
    }

    setProcessing(false)
  }

  return (
    <section id='contact' className='relative py-32 px-6 lg:px-8 overflow-hidden'>
      <Toaster position='top-right' />

      {/* Background */}
      <div className='absolute inset-0 pointer-events-none'>
        {/*<img src={bgImage} alt='' className='w-full h-full object-cover opacity-15' />*/}
        <div className='absolute inset-0 bg-linear-to-t from-background via-background/90 to-background/70' />
      </div>

      <div className='relative z-10 max-w-3xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='font-mono text-sm text-primary tracking-widest uppercase'>
            {'// Get In Touch'}
          </span>
          <h2 className='font-display font-extrabold text-4xl sm:text-5xl mt-4'>
            {'Let\'s Build Something'}
          </h2>
          <p className='text-muted-foreground text-lg mt-4'>
            Ready to transform your digital presence? Start a conversation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-8' autoComplete='off'>
          <div>
            <label className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {'$ email'}
            </label>
            <input
              type='email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder='you@company.com'
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg ${errors.email && 'border-destructive'}`}
            />
          </div>
          <div>
            <label className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {'$ subject'}
            </label>
            <input
              type='text'
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder='Project inquiry'
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg ${errors.subject && 'border-destructive'}`}
            />
          </div>
          <div>
            <label className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {'$ message'}
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder='Tell us about your project...'
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg resize-none  ${errors.message && 'border-destructive'}`}
            />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-6'>
            <button
              type='submit'
              disabled={processing}
              className='bg-primary text-primary-foreground font-heading font-bold cursor-pointer px-12 py-4 text-base hover:shadow-[0_0_40px_rgba(0,242,255,0.35)] transition-all duration-300 disabled:opacity-50'
            >
              {processing ? 'Sending...' : 'Send Message'}
            </button>
            <span className='text-muted-foreground text-sm'>
              or email us at{' '}
              <a href='mailto:contact@moho.mk' className='text-primary hover:underline'>
                contact@moho.mk
              </a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}