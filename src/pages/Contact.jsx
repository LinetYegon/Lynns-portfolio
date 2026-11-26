import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { Mail, MapPin } from '../components/Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // Wire this to Formspree / EmailJS / your backend
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <SectionTitle
        title="Contact"
        subtitle="Have a project, a question, or just want to connect? Send a message."
      />

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 mt-0.5 text-neutral-500 dark:text-neutral-500" />
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              Email
            </p>
            <a
              href="mailto:lynn@example.com"
              className="text-sm text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
            >
              lynn@example.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-0.5 text-neutral-500 dark:text-neutral-500" />
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              Location
            </p>
            <p className="text-sm text-neutral-900 dark:text-neutral-100">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={change}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={change}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={change}
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10 resize-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition"
        >
          Send message
        </button>
        {sent && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Thanks — your message was captured. I'll reply soon.
          </p>
        )}
      </form>
    </section>
  )
}