import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="section">
      <div ref={ref} className={seen ? 'wrap reveal in' : 'wrap reveal'}>
        <h2 id={`${id}-h`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
