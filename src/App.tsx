import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/navbar'
import { Routes, Route } from "react-router-dom";
import Home from './home/home';
import About from './about';
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

       {/* Route definitions */}
      <main className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </main>
    </div>
  )
}

export default App
