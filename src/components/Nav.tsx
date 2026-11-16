import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/content'

export const asset = (p: string) => import.meta.env.BASE_URL + p
const links = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function Nav() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand" aria-label="Leon Muyambo, home">LM</a>
        <button className="icon-btn menu" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'links open' : 'links'} aria-label="Primary">
          {links.map(l => (
            <a key={l} href={`#${l}`} className={active === l ? 'active' : ''} aria-current={active === l ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a className="btn small" href={asset(profile.cv)} download><Download size={15} /> CV</a>
        </nav>
      </div>
    </header>
  )
}
