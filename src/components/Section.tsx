import type { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="section">
      <div className="wrap">
        <h2 id={`${id}-h`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
