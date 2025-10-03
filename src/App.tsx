import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/navbar'
import { Routes, Route } from "react-router-dom";
import Home from './home/home';
import About from './about/about';
import Projects from './projects/Projects'
import Skills from './about/skills'
// import Experience from './experience2/Experience'
import Experience from './experience/experience'
import { useScrollSpy } from './SectionTracker'
import Contact from './contact/contact'



// import Contact from './contact';
function App() {
  const [count, setCount] = useState(0)
  // const [activeSection, setActiveSection] = useState("home");
  
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
