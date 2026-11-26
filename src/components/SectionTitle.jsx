export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-16 bg-neutral-300 dark:bg-neutral-700" />
    </div>
  )
}