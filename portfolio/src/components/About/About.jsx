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

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
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
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a passionate and dedicated Full Stack Developer with a strong foundation in building responsive,
            user-focused web applications using the MERN stack. I have developed, deployed, and optimized scalable
            applications that solve real-world problems. Alongside development, I have a keen eye for UI/UX design 
            and enjoy creating intuitive, clean interfaces that enhance the user experience. I thrive in 
            collaborative environments, love tackling new challenges, and continuously seek to grow both as a 
            developer and as a problem-solver.
          </p>

          <a
            href="https://drive.google.com/file/d/1VBNTWH4XTlTTEVx1gRD7t_O6i2HZDBG9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
  }}
          >
            Resume <FiDownload className="text-xl" />
          </a>
        </div>

        {/* Right Side */}
       <div className="md:w-1/2 flex justify-center md:justify-end">
  <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-5 border-[#8245ec] rounded-full grid place-items-center bg-black"
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
  >
            <img
              src="/public/profile.jpeg"
              alt="Rashi Dwivedi"
               className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
