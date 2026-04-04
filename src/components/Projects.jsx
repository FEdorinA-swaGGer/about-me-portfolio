import { motion } from 'framer-motion'
import projects from '../content/projects.json'
import { Container } from './Container'
import { FeaturedProject } from './FeaturedProject'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 border-t border-section py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {projects.sectionTitle}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {projects.sectionSubtitle}
          </h2>
        </motion.div>

        <div className="mt-14">
          <FeaturedProject project={projects.featured} />
        </div>
      </Container>
    </section>
  )
}
