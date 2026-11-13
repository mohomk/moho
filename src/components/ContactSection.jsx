'use client'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

export default function ContactSection({ bgImage, dict }) {
  const [form, setForm] = useState({ email: '', subject: '', message: '' })
  const [processing, setProcessing] = useState(false)
  const [errors, setErrors] = useState({})

  const contactSchema = z.object({
    email: z.string().min(1, dict.validation.emailRequired).email(dict.validation.emailInvalid),
    subject: z.string().min(1, dict.validation.subjectRequired),
    message: z.string().min(1, dict.validation.messageRequired),
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

      toast.error(dict.validation.toastError)

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

          toast.success(dict.validation.toastSuccess)
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
        <div className='text-center mb-16' data-reveal>
          <span className='font-mono text-sm text-primary tracking-widest uppercase'>
            {dict.eyebrow}
          </span>
          <h2 className='font-display font-extrabold text-4xl sm:text-5xl mt-4'>
            {dict.title}
          </h2>
          <p className='text-muted-foreground text-lg mt-4'>
            {dict.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-8' autoComplete='off'>
          <div>
            <label htmlFor='contact-email' className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {dict.form.emailLabel}
            </label>
            <input
              type='email'
              id='contact-email'
              name='email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={dict.form.emailPlaceholder}
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg ${errors.email && 'border-destructive'}`}
            />
          </div>
          <div>
            <label htmlFor='contact-subject' className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {dict.form.subjectLabel}
            </label>
            <input
              type='text'
              id='contact-subject'
              name='subject'
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder={dict.form.subjectPlaceholder}
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg ${errors.subject && 'border-destructive'}`}
            />
          </div>
          <div>
            <label htmlFor='contact-message' className='font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block'>
              {dict.form.messageLabel}
            </label>
            <textarea
              rows={4}
              id='contact-message'
              name='message'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={dict.form.messagePlaceholder}
              className={`w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors text-lg resize-none  ${errors.message && 'border-destructive'}`}
            />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-6'>
            <button
              type='submit'
              disabled={processing}
              className='bg-primary text-primary-foreground font-heading font-bold cursor-pointer px-12 py-4 text-base hover:shadow-[0_0_40px_rgba(0,242,255,0.35)] transition-all duration-300 disabled:opacity-50'
            >
              {processing ? dict.form.submitting : dict.form.submit}
            </button>
            <span className='text-muted-foreground text-sm'>
              {dict.form.orEmailUs}{' '}
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