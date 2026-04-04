import { motion } from 'framer-motion'
import profile from '../content/profile.json'
import { Container } from './Container'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function HeroVisual() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-sm sm:max-w-md">
      <div className="absolute inset-0 rounded-2xl bg-elevated card-stack-featured" />
      <div className="absolute inset-[10px] rounded-[14px] bg-surface/92 p-5 card-stack-quiet sm:inset-3 sm:p-6">
        <div className="grid h-full grid-cols-4 grid-rows-5 gap-3 sm:gap-3.5">
          {Array.from({ length: 16 }).map((_, i) => {
            const isAccent = i === 5
            return (
              <motion.div
                key={i}
                className={`rounded-sm ${
                  isAccent
                    ? 'border border-[var(--color-accent-line)] bg-accent-soft'
                    : 'border border-foreground/12 bg-elevated-soft'
                }`}
                initial={{ opacity: 0.55 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.03 * i,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            )
          })}
        </div>
      </div>
      <motion.div
        className="absolute -bottom-5 right-4 h-20 w-[42%] max-w-[180px] rounded-xl bg-linear-to-t from-elevated to-surface card-stack-raised sm:-bottom-6 sm:h-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{
          delay: 0.45,
          duration: 0.55,
          ease: [0.25, 0.46, 0.45, 0.94],
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </div>
  )
}

function heroHasPhoto(photoSrc) {
  return Boolean(photoSrc && photoSrc !== 'null')
}

export function Hero() {
  const { hero } = profile
  const hasPhoto = heroHasPhoto(hero.photoSrc)

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div
        className="pointer-events-none absolute -right-28 top-0 h-72 w-72 rounded-full opacity-[0.22] blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(255, 244, 228, 0.14) 0%, transparent 52%)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 55% 55%, rgba(255, 248, 236, 0.08) 0%, transparent 48%)',
        }}
      />
      <motion.div
        className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[78%] opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <Container>
        <div className="flex flex-col items-center justify-between gap-12 text-left lg:flex-row lg:items-center">
          <div className="w-full max-w-xl shrink-0 text-left">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent"
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
            >
              {hero.name}
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-4 text-lg font-medium text-foreground sm:text-xl"
            >
              {hero.title}
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-lg text-base leading-[1.65] text-muted"
            >
              {hero.tagline}
            </motion.p>
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href={`#${hero.primaryTargetId}`}
                className="btn-premium inline-flex items-center justify-center rounded-lg bg-elevated-soft/85 px-6 py-3 text-sm font-semibold text-foreground"
              >
                {hero.primaryCta}
              </a>
              <a
                href={`#${hero.secondaryTargetId}`}
                className="btn-premium-ghost inline-flex items-center justify-center rounded-lg bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground"
              >
                {hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              y: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-end"
          >
            {hasPhoto ? (
              <img
                src={hero.photoSrc}
                alt="Profile"
                width={320}
                height={420}
                loading="eager"
                decoding="async"
                className="h-[min(420px,52vh)] w-full max-w-[min(20rem,calc(100%-0.5rem))] object-cover shadow-2xl sm:h-[420px] sm:max-w-none sm:w-80 rounded-2xl border border-white/10"
              />
            ) : (
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <HeroVisual />
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
