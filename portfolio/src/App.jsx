import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Work } from './components/work/Work';
import { Education } from './components/education/Education';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

const App = () => {
   return (
    <div className="bg-[#0a0a23] min-h-screen">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;