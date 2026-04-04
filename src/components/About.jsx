import { motion } from 'framer-motion'
import profile from '../content/profile.json'
import { Container } from './Container'

export function About() {
  const { about } = profile

  return (
    <section id="about" className="scroll-mt-8 border-t border-section py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {about.sectionTitle}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {about.lead}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-muted">
            {about.body}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
