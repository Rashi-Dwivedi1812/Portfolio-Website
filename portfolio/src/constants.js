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
import gssocLogo from './assets/company_logo/gssoc.png';

// // Education Section Logo's
import jiitLogo from './assets/education_logo/jiit.png';
import vpsLogo from './assets/education_logo/vps.jpeg';

// Project Section Logo's
import ridebuddyLogo from './assets/work_logo/ridebuddy.jpeg';
import animaticLogo from './assets/work_logo/animatic.jpeg';
import urlLogo from './assets/work_logo/url.jpeg';
import relaxerLogo from './assets/work_logo/relaxer.jpeg';
import tetrisLogo from './assets/work_logo/tetris.jpeg';
import cloudLogo from './assets/work_logo/cloud.jpeg';
import cyberheist from './assets/work_logo/cyberheist.jpeg';
import sentilogLogo from './assets/work_logo/sentilog.jpeg';

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
      img: gssocLogo,
      role: "Tech Contributor",
      company: "GirlScript Summer of Code 2025",
      date: "July 2025 - Present",
      desc: "Contributed to multiple open-source projects by fixing bugs, adding features, and improving documentation. Collaborated with project maintainers and fellow contributors while enhancing skills in Git, GitHub, and full-stack development.",
      skills: [
        "Git & GitHub",
        "Bug Fixing",
        "Feature Enhancement",
        "Open Source Workflow",
        "Problem Solving",
        "Frontend & Backend Development",
        "API Integration",
      ],
    },
    {
      id: 1,
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
      id: 2,
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
  
  export const education = [
    {
      id: 0,
      img: jiitLogo,
      school: "Jaypee institute of Information Technology, Noida",
      date: "July 2023 - May 2027",
      grade: "7.5 SGPA",
      desc: "Pursuing B.Tech in CSE with a strong foundation in software development, data structures, algorithms, and modern web technologies. Actively involved in technical clubs and leadership roles, contributing to real-world projects and collaborative initiatives.",
      degree: "B.Tech in Computer Science Engineering",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Vanasthali Public School, Ghaziabad",
      date: "April 2021 - March 2023",
      grade: "93.4%",
      desc: "Completed Class XII with a focus on Science stream (PCM), building a strong academic base in mathematics, physics, and computer science. Actively participated in school activities, laying the groundwork for a career in technology and engineering.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vanasthali Public School, Ghaziabad",
      date: "April 2009 - March 2021",
      grade: "96.4%",
      desc: "Successfully completed Class X with a well-rounded academic foundation across all subjects. Demonstrated consistent performance and active participation in co-curricular activities, fostering early interest in technology and innovation.",
      degree: "CBSE(X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CyberHeist",
      description:
        "Nostalgic gaming platform that brings retro arcade games into the modern era.",
      image: cyberheist,
      tags: [ "React Js","Typescript","Vite","Tailwind","Node Js","Postgresql","Google Authentication"],
      github: "https://github.com/Cyberheist1/cyberheist",
      webapp: "https://cyber-heist.netlify.app/",
    },
    {
      id: 1,
      title: "Ride Buddy",
      description:
        "RideBuddy – A smart ride-sharing web app for college students with real-time chat, cost transparency, and college email authentication. Built using MERN stack + Socket.IO.",
      image: ridebuddyLogo,
      tags: [ "React Js","Node Js","Express.js","MongoDB","Socket.IO","Cloudinary"],
      github: "https://github.com/Rashi-Dwivedi1812/Ride-Buddy",
      webapp: "https://ride-buddy-indol.vercel.app/",
    },
    {
      id: 2,
      title: "SentiLog-AI",
      description:
        "An open-source platform that combines news sentiment analysis and personal mood journaling. It features a modern React frontend, a robust Node.js/Express backend, and a Python/Flask microservice for ML-powered sentiment/emotion analysis.",
      image: sentilogLogo,
      tags: ["HTML", "CSS", "JavaScript","Swiper-js","locomotive-scroll"],
      github: "https://github.com/Rashi-Dwivedi1812/SentiLog-AI",
      webapp: "https://sentilog-ai.vercel.app",
    },
    {
      id: 2,
      title: "Animatic",
      description:
        "Animatic is a modern, responsive website with smooth scroll animations and interactive sliders using Locomotive.js and Swiper.js. Perfect for portfolios, landing pages, and creative showcases.",
      image: animaticLogo,
      tags: ["HTML", "CSS", "JavaScript","Swiper-js","locomotive-scroll"],
      github: "https://github.com/Rashi-Dwivedi1812/Animatic",
      webapp: "https://rashi-dwivedi1812.github.io/Animatic/",
    },
    {
      id: 3,
      title: "LinkCut",
      description:
        "A fast and efficient URL shortening service built with Go, Redis, and Docker for the backend, and a modern React + TypeScript frontend for a smooth user experience.",
      image: urlLogo,
      tags: ["React JS","Vite","TypeScript","GoLang","Docker","Redis"],
      github: "https://github.com/Rashi-Dwivedi1812/Url-Shortener",
      webapp: "",
    },
    {
      id: 4,
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