import { Container } from './Container'

export function Layout({ children }) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-page text-foreground selection:bg-accent/22 selection:text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 18% 8%, rgba(255, 242, 224, 0.09) 0%, transparent 38%), radial-gradient(circle at 84% 12%, rgba(255, 236, 206, 0.07) 0%, transparent 42%)',
        }}
        aria-hidden
      />
      <div className="ambient-grid pointer-events-none fixed inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-linear-to-r from-transparent via-[rgba(250,246,238,0.18)] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-x-0 top-px z-50 h-px bg-linear-to-r from-transparent via-[var(--color-accent-line)] to-transparent"
        aria-hidden
      />
      {children}
      <footer className="border-t border-section py-10">
        <Container className="text-center text-sm text-muted">
          Портфолио · {new Date().getFullYear()}
        </Container>
      </footer>
    </div>
  )
}
