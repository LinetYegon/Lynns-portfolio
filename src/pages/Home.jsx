import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 md:py-28">
      <p className="text-sm font-medium tracking-wide uppercase text-neutral-500 dark:text-neutral-500">
        Software Engineer
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-white">
        Lynn Jepchirchir
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        I build modern, accessible web interfaces with React, JavaScript, and
        Tailwind CSS. Currently focused on frontend engineering and clean,
        maintainable component design.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition"
        >
          View projects
          <span aria-hidden>→</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid sm:grid-cols-3 gap-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
            Focus
          </p>
          <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
            Frontend engineering
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
            Stack
          </p>
          <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
            React · Tailwind · JavaScript
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
            Based in
          </p>
          <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </section>
  )
}