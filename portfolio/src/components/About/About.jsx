import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FiDownload } from "react-icons/fi";


export const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rashi Dwivedi
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
  I am a{' '}
  <span className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 bg-clip-text text-transparent">
    <ReactTypingEffect
      text={[
        'Full-Stack Developer',
        'MERN Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'UI/UX Designer',
        'Coder',
      ]}
      speed={100}
      eraseSpeed={50}
      typingDelay={500}
      eraseDelay={2000}
      cursorRenderer={(cursor) => (
        <span className="text-pink-500">{cursor}</span>
      )}
    />
  </span>
</h3>


          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a passionate and dedicated Full Stack Developer with a strong foundation in building responsive,
            user-focused web applications using the MERN stack. I have developed, deployed, and optimized scalable
            applications that solve real-world problems. I thrive in collaborative environments, love tackling new 
            challenges, and continuously seek to grow both as a developer and as a problem-solver.
          </p>

          <a
            href="https://drive.google.com/file/d/1VBNTWH4XTlTTEVx1gRD7t_O6i2HZDBG9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
  style={{
   background: 'linear-gradient(90deg, #ec4899, #ef4444)',
boxShadow: '0 0 2px #ec489988, 0 0 4px #ef444466, 0 0 15px #ef444433',


  }}
          >
            Resume <FiDownload className="text-xl" />
          </a>
        </div>

        {/* Right Side */}
       <div className="md:w-1/2 flex justify-center md:justify-end">
  <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-3 border-pink-400 rounded-full grid place-items-center bg-black"
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
  >
            <img
              src="/profilee.jpeg"
              alt="Rashi Dwivedi"
               className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
