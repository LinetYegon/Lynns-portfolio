export default function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {skill.name}
        </span>
        <span className="text-xs tabular-nums text-neutral-500 dark:text-neutral-500">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-neutral-900 dark:bg-white transition-[width] duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}