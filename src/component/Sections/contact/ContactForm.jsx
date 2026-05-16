// src/components/sections/contact/ContactForm.jsx
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef()

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('sent')
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
      })

      // Reset after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')

      // Reset after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="bg-surface-dark border border-border-dark 
      p-7 md:p-8 rounded-xl relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-56 h-56 
        bg-primary/5 blur-[100px] -z-10 pointer-events-none"
      />

      {/* Title */}
      <h2 className="text-title font-bold text-text-main mb-7">
        Send Me a Message
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-label text-text-subtle 
              uppercase block"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="form-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-label text-text-subtle 
              uppercase block"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="form-input"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-label text-text-subtle 
            uppercase block"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Internship Opportunity"
            required
            className="form-input"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-label text-text-subtle 
            uppercase block"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi, I wanted to reach out about..."
            required
            rows="5"
            className="form-input resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`btn-primary w-full md:w-auto 
            ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}
            ${status === 'sent' ? '!bg-accent-green !shadow-none' : ''}
            ${status === 'error' ? '!bg-red-500 !shadow-none' : ''}`}
        >
          {status === 'sending' && (
            <>
              Sending...
              <span className="material-symbols-outlined 
                text-sm animate-spin"
              >
                progress_activity
              </span>
            </>
          )}

          {status === 'sent' && (
            <>
              Message Sent!
              <span className="material-symbols-outlined text-sm">
                check_circle
              </span>
            </>
          )}

          {status === 'error' && (
            <>
              Failed to Send
              <span className="material-symbols-outlined text-sm">
                error
              </span>
            </>
          )}

          {status === 'idle' && (
            <>
              Send Message
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </>
          )}
        </button>

        {/* Error Help Text */}
        {status === 'error' && (
          <p className="text-body-sm text-red-400 mt-2">
            Something went wrong. Please try again or 
            email me directly.
          </p>
        )}
      </form>
    </div>
  )
}