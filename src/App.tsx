import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/navbar'
import { Routes, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import Projects from './projects/Projects'
// import Contact from './contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-shell'>
      <Navbar
        brand="Aaron Honjaya"
        links={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

    
      <main className="page">
        <Home />
        <Projects />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
     
        </Routes> */}
      </main>
    </div>
  )
}

export default App
