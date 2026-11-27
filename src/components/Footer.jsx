import { Github, Mail } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Lynn Jepchirchir
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/linetyegon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Github className="w-4 h-4" />
          </a>
          
          <a
            href="mailto:lynnkish35@gmail.com"
            aria-label="Email"
            className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}