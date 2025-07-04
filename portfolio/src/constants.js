// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import phpLogo from './assets/tech_logo/php.png';
import golangLogo from './assets/tech_logo/golang.png';
import dockerLogo from './assets/tech_logo/docker.png';


// Experience Section Logo's
import gdgLogo from './assets/company_logo/gdg.png';
import aimlLogo from './assets/company_logo/aiml.png';

// // Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import ridebuddyLogo from './assets/work_logo/ridebuddy.jpeg';
import animaticLogo from './assets/work_logo/animatic.jpeg';
import urlLogo from './assets/work_logo/url.jpeg';
import relaxerLogo from './assets/work_logo/relaxer.jpeg';
import tetrisLogo from './assets/work_logo/tetris.jpeg';
import cloudLogo from './assets/work_logo/cloud.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
       { name: 'PHP', logo: phpLogo },
      { name: 'Golang', logo: golangLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Docker', logo: dockerLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: aimlLogo,
      role: "JIIT 128 Campus Lead",
      company: "AI/ML Hub of JIIT",
      date: "June 2025 - Present",
      desc: "Led the AI/ML student community by organizing workshops, tech talks, and hands-on sessions focused on machine learning and data science. Fostered collaboration among peers, mentored juniors, and promoted a culture of innovation and learning in the field of artificial intelligence.",
      skills: [
        "Team Leadership",
        "Event Coordination",
        "Public Speaking",
        "Communication Skills",
        "Time Management",
        "Problem Solving",
      ],
    },
    {
      id: 1,
      img: gdgLogo,
      role: "Core Team Member",
      company: "Google Developer Groups (GDG JIIT 128)",
      date: "September 2024 - September 2025",
      desc: "As a core team member of GDG JIIT 128, I actively contributed to both social media strategy and event management. I handled content creation, campaign planning, and audience engagement across platforms like Instagram and LinkedIn. I also collaborated with team leads to organize tech events, coordinate volunteers, and ensure smooth execution of community-driven initiatives.",
      skills: [
        "Social Media Management",
        "Event Planning",
        "Leadership","Responsibility",
        "Team Communication",
        "Problem Solving"
      ],
    },
  ];
  
  // export const education = [
  //   {
  //     id: 0,
  //     img: glaLogo,
  //     school: "GLA University, Mathura",
  //     date: "Sept 2022 - July 2024",
  //     grade: "7.81 CGPA",
  //     desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //     degree: "Master of Computer Applications - MCA",
  //   },
  //   {
  //     id: 1,
  //     img: bsaLogo,
  //     school: "BSA College, Mathura",
  //     date: "Sept 2018 - Aug 2021",
  //     grade: "73.2%",
  //     desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //     degree: "Bachelor of Science - BSC (Computer Science)",
  //   },
  //   {
  //     id: 2,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2017 - March 2018",
  //     grade: "78%",
  //     desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //     degree: "CBSE(XII) - PCM with Computer Science",
  //   },
  //   {
  //     id: 3,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },
  // ];
  
  export const projects = [
    {
      id: 0,
      title: "Ride Buddy",
      description:
        "RideBuddy – A smart ride-sharing web app for college students with real-time chat, cost transparency, and college email authentication. Built using MERN stack + Socket.IO.",
      image: ridebuddyLogo,
      tags: [ "React Js","Node Js","Express.js","MongoDB","Socket.IO","Cloudinary"],
      github: "https://github.com/Rashi-Dwivedi1812/Ride-Buddy",
      webapp: "https://ride-buddy-indol.vercel.app/",
    },
    {
      id: 1,
      title: "Animatic",
      description:
        "Animatic is a modern, responsive website with smooth scroll animations and interactive sliders using Locomotive.js and Swiper.js. Perfect for portfolios, landing pages, and creative showcases.",
      image: animaticLogo,
      tags: ["HTML", "CSS", "JavaScript","Swiper-js","locomotive-scroll"],
      github: "https://github.com/Rashi-Dwivedi1812/Animatic",
      webapp: "https://rashi-dwivedi1812.github.io/Animatic/",
    },
    {
      id: 2,
      title: "LinkCut",
      description:
        "A fast and efficient URL shortening service built with Go, Redis, and Docker for the backend, and a modern React + TypeScript frontend for a smooth user experience.",
      image: urlLogo,
      tags: ["React JS","Vite","TypeScript","GoLang","Docker","Redis"],
      github: "https://github.com/Rashi-Dwivedi1812/Url-Shortener",
      webapp: "",
    },
    {
      id: 3,
      title: "Relaxer",
      description:
        "Relaxer, breathing Exercise Web App is a simple, responsive tool that guides users through mindful breathing with smooth animations. Ideal for reducing stress, improving focus, and promoting relaxation. 🌿",
      image: relaxerLogo,
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/Rashi-Dwivedi1812/Relaxer",
      webapp: "https://rashi-dwivedi1812.github.io/Relaxer/",
    },
    {
      id: 4,
      title: "Tetris Game",
      description:
        "Tetris Game is a classic block-stacking game built with React and Vite. It features smooth gameplay, responsive controls, and a clean UI—all optimized for performance and modern browsers. 🎮",
      image: tetrisLogo,
      tags: ["React.js","Vite","JavaScript", "HTML", "CSS"],
      github: "https://github.com/Rashi-Dwivedi1812/Tetris-Game",
      webapp: "",
    },
    {
      id: 5,
      title: "Cloud Cast",
      description:
        "A responsive weather app that fetches real-time weather data using the OpenWeatherMap API. Built with HTML and CSS, it features a clean UI, city-based search, and accurate weather details. ☁️🌍",
      image: cloudLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/Rashi-Dwivedi1812/Cloud-Cast",
      webapp: "https://rashi-dwivedi1812.github.io/Cloud-Cast/",
    },
  ];  