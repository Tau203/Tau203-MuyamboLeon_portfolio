import { Download, Mail, ExternalLink, Award } from 'lucide-react'
import Section from '../components/Section'
import { asset } from '../components/Nav'
import { profile, skills, projects, experience, education, certification, type Project } from '../data/content'

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          {profile.intro.map((t, i) => <p key={i} className="lead">{t}</p>)}
          <div className="actions">
            <a className="btn" href="#projects">View my projects</a>
            <a className="btn ghost" href={asset(profile.cv)} download><Download size={16} /> Download my CV</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
          <p className="links-row">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </p>
        </div>
        <div className="portrait">
          <div className="frame"><img src={asset('assets/img/leon.webp')} alt="Portrait of Leon Muyambo" width="760" height="1132" /></div>
          <pre className="code" aria-hidden="true">{`const leon = {
  focus: ["full-stack", "mobile"],
  stack: ["Node.js", "ASP.NET Core", "Kotlin"],
  status: "open to graduate roles",
}`}</pre>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return <Section id="about" title="About me"><div className="prose">{profile.about.map((t, i) => <p key={i}>{t}</p>)}</div></Section>
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="skill-grid">
        {skills.map(s => (
          <div key={s.group} className="panel">
            <h3>{s.group}</h3>
            <ul className="chips">{s.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Card({ p }: { p: Project }) {
  return (
    <article className={p.featured ? 'card featured' : 'card'}>
      {p.shot && <div className={p.phone ? 'shot phone' : 'shot'}><img src={asset(p.shot)} alt={`${p.name} screenshot`} loading="lazy" /></div>}
      <h3>{p.name}</h3>
      <p className="meta">{p.role}</p>
      <p>{p.description}</p>
      <ul className="bullets">{p.contributions.map(c => <li key={c}>{c}</li>)}</ul>
      <ul className="chips">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
      <p className="card-links">
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repository <ExternalLink size={13} /></a>}
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} /></a>}
      </p>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="feat-grid">{projects.filter(p => p.featured).map(p => <Card key={p.name} p={p} />)}</div>
      <h3 className="sub">More projects</h3>
      <div className="grid">{projects.filter(p => !p.featured).map(p => <Card key={p.name} p={p} />)}</div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Professional experience">
      <div className="timeline">
        {experience.map(e => (
          <div key={e.role} className="tl-item">
            <h3>{e.role}</h3>
            <p className="meta">{e.company} | {e.period}</p>
            <ul className="bullets">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="note">These roles built reliability, teamwork, communication and attention to detail, which I bring to every software team.</p>
    </Section>
  )
}

export function Education() {
  return (
    <>
      <Section id="education" title="Education">
        <div className="timeline">
          {education.map(e => (
            <div key={e.title} className="tl-item">
              <h3>{e.title}</h3>
              <p className="meta">{e.school} | {e.period}</p>
              {e.points.length > 0 && <ul className="chips">{e.points.map(p => <li key={p}>{p}</li>)}</ul>}
            </div>
          ))}
        </div>
      </Section>
      <Section id="certifications" title="Certifications">
        <div className="panel cert">
          <Award size={28} aria-hidden="true" />
          <div>
            <h3>{certification.title}</h3>
            <p className="meta">{certification.provider} | Completed {certification.date}</p>
            <ul className="bullets">{certification.courses.map(c => <li key={c}>{c}</li>)}</ul>
            <p className="actions">
              <a className="btn small" href={asset(certification.file)} target="_blank" rel="noreferrer">View certificate</a>
              <a className="btn small ghost" href={certification.verify} target="_blank" rel="noreferrer">Verify on Coursera</a>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export function Contact() {
  return (
    <>
      <Section id="github" title="GitHub">
        <p className="prose">My repositories and day-to-day development work live on GitHub.</p>
        <p className="actions"><a className="btn" href={profile.github} target="_blank" rel="noreferrer">Explore my repositories</a></p>
      </Section>
      <Section id="contact" title="Let's build something meaningful.">
        <p className="prose">I am open to graduate opportunities, internships, junior software development roles and opportunities to collaborate on innovative technology projects.</p>
        <p className="meta">{profile.location}</p>
        <div className="actions">
          <a className="btn" href={`mailto:${profile.email}`}><Mail size={16} /> Email me</a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.linkedin && <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        </div>
      </Section>
    </>
  )
}
