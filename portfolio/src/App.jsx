import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Work } from './components/work/Work';
import { Education } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import GalaxyBackground from './components/GalaxyBackground';
import { Contact } from './components/Contact/Contact';

const App = () => {
   return (
    <>
    <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/slowmovingstars.mp4" type="video/mp4" />
      </video>
      <GalaxyBackground />
    <div className=" min-h-screen">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </>
  )
}

export default App;