export default function ProjectCard({ project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="group flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition">
      {/* Monogram placeholder instead of fake image */}
      <div className="relative h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            color: 'currentColor',
          }}
        />
        <span className="relative text-3xl font-semibold tracking-tight text-neutral-400 dark:text-neutral-500">
          {initials}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-neutral-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 dark:text-white hover:underline underline-offset-4"
          >
            View project
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  )
}