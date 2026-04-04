import { motion } from 'framer-motion'

const DEFAULT_PREVIEW = '/ecommerce-preview.png'

export function FeaturedProject({ project }) {
  const liveIsPlaceholder = !project.liveUrl || project.liveUrl === '#'
  const repoIsPlaceholder = !project.repoUrl || project.repoUrl === '#'
  const previewSrc = project.previewImage || DEFAULT_PREVIEW
  const descriptionParagraphs = Array.isArray(project.description)
    ? project.description
    : [project.description].filter(Boolean)

  const previewShell = (interactive) => (
    <div
      className={[
        'relative overflow-hidden rounded-[14px] bg-linear-to-b from-surface/90 to-page/95 p-1.5',
        'shadow-[0_1px_0_rgba(255,253,248,0.09)_inset,0_24px_48px_-28px_rgba(0,0,0,0.55)]',
        'ring-1 ring-foreground/[0.12] transition-[transform,box-shadow] duration-300 ease-out will-change-transform',
        interactive && 'group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-[0_32px_56px_-24px_rgba(0,0,0,0.58)]',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="pointer-events-none absolute inset-x-6 top-2 h-px bg-linear-to-r from-transparent via-foreground/18 to-transparent" />
      <div className="overflow-hidden rounded-xl bg-page/40 ring-1 ring-black/25">
        <img
          src={previewSrc}
          alt={`Превью главной страницы — ${project.title}`}
          className="aspect-[4/3] w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl bg-elevated p-8 card-stack-featured sm:p-10 lg:p-11"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          {project.badge && (
            <span className="mb-4 inline-block rounded-full border border-[var(--color-accent-line)] bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.badge}
            </span>
          )}
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <div className="mt-4 max-w-xl space-y-4 text-base leading-[1.65] text-muted sm:max-w-lg">
            {descriptionParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {project.whatIDid?.items?.length > 0 && (
            <div className="mt-6 max-w-xl sm:max-w-lg">
              <h4 className="text-sm font-semibold text-foreground">{project.whatIDid.title}</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {project.whatIDid.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-foreground/12 bg-page/90 px-2.5 py-1 text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl || '#'}
              className={`btn-premium inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold ${
                liveIsPlaceholder
                  ? 'pointer-events-none border border-foreground/8 bg-surface text-muted opacity-55'
                  : 'bg-elevated-soft/85 text-foreground'
              }`}
              {...(liveIsPlaceholder
                ? { 'aria-disabled': true }
                : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              Live Demo
            </a>
            <a
              href={project.repoUrl || '#'}
              className={`btn-premium-ghost inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold ${
                repoIsPlaceholder
                  ? 'pointer-events-none bg-surface/60 text-muted opacity-55'
                  : 'bg-surface/70 text-foreground'
              }`}
              {...(repoIsPlaceholder
                ? { 'aria-disabled': true }
                : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="min-w-0 w-full lg:justify-self-end">
          {!liveIsPlaceholder ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group block max-w-xl rounded-[16px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-line)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] lg:max-w-none"
              aria-label={`Открыть демо в новой вкладке: ${project.title}`}
            >
              {previewShell(true)}
            </a>
          ) : (
            <div className="max-w-xl opacity-70 lg:max-w-none" aria-hidden>
              {previewShell(false)}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}
