import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle
        title="My Projects"
        subtitle="A selection of things I've built — from side projects to client work."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}