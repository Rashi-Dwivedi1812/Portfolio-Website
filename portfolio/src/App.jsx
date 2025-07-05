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
    <div className='bg-[#050414]'>
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div>
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Work/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;