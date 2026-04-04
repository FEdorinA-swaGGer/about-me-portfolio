import { motion } from 'framer-motion'
import contacts from '../content/contacts.json'
import { Container } from './Container'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 border-t border-section py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {contacts.sectionTitle}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {contacts.headline}
          </h2>
          <p className="mx-auto mt-6 text-base leading-[1.65] text-muted">
            {contacts.intro}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="mx-auto mt-14 flex max-w-xl flex-col gap-3 sm:gap-4"
        >
          {contacts.items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.38 }}
            >
              <a
                href={item.href}
                className="hover-lift group flex items-center justify-between gap-4 rounded-xl bg-surface/82 px-5 py-4 card-stack-quiet transition-[background-color] duration-300 hover:bg-elevated-soft"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.label}
                </span>
                <span className="text-right text-sm font-medium text-foreground">
                  {item.value}
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
