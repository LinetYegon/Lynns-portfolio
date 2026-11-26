import SectionTitle from '../components/SectionTitle'
import SkillBar from '../components/SkillBadge'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <SectionTitle
        title="About"
        subtitle="A little context on how I work and what I work with."
      />

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-2 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            I'm a software engineer focused on building thoughtful frontend
            experiences. I care about accessible markup, predictable layouts,
            and components that are easy for other developers to pick up and
            extend.
          </p>
          <p>
            My day-to-day work centers on React and Tailwind CSS, backed by a
            solid foundation in HTML, CSS, and vanilla JavaScript. I enjoy
            translating design intent into interfaces that feel fast and
            consistent across devices.
          </p>
          <p>
            Outside of building things, I read about design systems, contribute
            to small open source projects, and help newer developers get
            comfortable with the React ecosystem.
          </p>
        </div>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-neutral-500 dark:text-neutral-500">Location</dt>
            <dd className="mt-0.5 text-neutral-900 dark:text-neutral-100">
              Nairobi, Kenya
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500 dark:text-neutral-500">Role</dt>
            <dd className="mt-0.5 text-neutral-900 dark:text-neutral-100">
              Frontend Engineer
            </dd>
          </div>
          <div>
            <dt className="text-neutral-500 dark:text-neutral-500">Availability</dt>
            <dd className="mt-0.5 text-neutral-900 dark:text-neutral-100">
              Open to freelance
            </dd>
          </div>
        </dl>
      </div>

      <SectionTitle title="Skills" />
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl">
        {skills.map((s) => (
          <SkillBar key={s.name} skill={s} />
        ))}
      </div>
    </section>
  )
}