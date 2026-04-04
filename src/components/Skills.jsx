import { motion } from 'framer-motion'
import skills from '../content/skills.json'
import { Container } from './Container'

function SkillCard({ name, note, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -1, scale: 1.02 }}
      transition={{
        delay: 0.03 * index,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="hover-lift rounded-xl bg-surface/82 p-4 card-stack-quiet transition-[background-color] duration-300 hover:bg-elevated-soft sm:p-5"
    >
      <p className="font-display text-[0.9375rem] font-semibold tracking-tight text-foreground">
        {name}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{note}</p>
    </motion.div>
  )
}

export function Skills() {
  const all = [...skills.technical, ...skills.design]

  return (
    <section id="skills" className="scroll-mt-8 border-t border-section py-18 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {skills.sectionTitle}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground/95 sm:text-3xl">
            {skills.sectionSubtitle}
          </h2>
        </motion.div>

        <div className="mt-11 grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {all.map((item, i) => (
            <SkillCard key={item.name} {...item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
