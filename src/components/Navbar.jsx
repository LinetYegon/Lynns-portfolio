import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Menu, Close } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <NavLink to="/" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          Lynn Jepchirchir
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm rounded-md transition ${
                  isActive
                    ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {open ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <ul className="px-4 py-2 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm ${
                      isActive
                        ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}