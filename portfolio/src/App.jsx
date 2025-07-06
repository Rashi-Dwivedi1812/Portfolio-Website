import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Work } from './components/work/Work';
import { Education } from './components/education/Education';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { About } from './components/About/About';
import GalaxyBackground from './components/GalaxyBackground';

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