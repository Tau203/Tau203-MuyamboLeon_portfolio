import Nav from './components/Nav'
import { Hero, About, Skills, Projects, Experience, Education, Contact } from './sections'

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact />
      </main>
      <footer className="footer"><div className="wrap">© {new Date().getFullYear()} Leon Muyambo</div></footer>
    </>
  )
}
