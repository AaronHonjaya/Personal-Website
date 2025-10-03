import './App.css'
import Navbar from './navbar/navbar'
import Home from './home/home';
import About from './about/about';
import Projects from './projects/Projects'
import Skills from './about/skills'
import Experience from './experience/experience'
import { useScrollSpy } from './SectionTracker'
import Contact from './contact/Contact'



function App() {

  const activeSection = useScrollSpy(['home','about','experience','projects','contact']);

  return (
    <div className='app-shell'>

      <Navbar
        brand="Aaron Honjaya"
        links={[
          { name: 'Home', path: '#home' },
          { name: 'About', path: '#about' },
          { name: 'Experience', path: '#experience' },
          { name: 'Projects', path: '#projects' },
          { name: 'Contact', path: '#contact' },
        ]}
        activeSection={activeSection}
      />

      <main className="page">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
