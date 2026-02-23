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
import githubLogo from './assets/tech_logo/githubs.png';
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
import pythonLogo from './assets/tech_logo/python.png';
import clerkLogo from './assets/tech_logo/clerk.png';
import convexLogo from './assets/tech_logo/convex.png';
import supabaseLogo from './assets/tech_logo/supabase.png';
import socketioLogo from './assets/tech_logo/socket-io.svg';
import restapiLogo from './assets/tech_logo/rest.png';

// Experience Section Logo's
import gdgLogo from './assets/company_logo/gdg.png';
import aimlLogo from './assets/company_logo/aiml.png';
import gssocLogo from './assets/company_logo/gssoc.png';
import internLogo from './assets/company_logo/interns.jpeg';

// // Education Section Logo's
import jiitLogo from './assets/education_logo/jiit.png';
import vpsLogo from './assets/education_logo/vps.jpeg';

// Project Section Logo's
import ridebuddyLogo from './assets/work_logo/ridebuddy.jpeg';
import animaticLogo from './assets/work_logo/animatic.jpeg';
import cyberheist from './assets/work_logo/cyberheist.jpeg';
import chatbotLogo from './assets/work_logo/chatbots.jpeg';
import laraLegalLogo from './assets/work_logo/Lara.jpeg';
import forgedSignatureLogo from './assets/work_logo/forged.jpeg';

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
      { name: 'Socket.IO', logo: socketioLogo },
      { name: 'REST API', logo: restapiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      {name: 'Python', logo:  pythonLogo},
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
      { name: 'Clerk Auth', logo: clerkLogo },
      { name: 'Convex', logo: convexLogo },
      { name: 'Supabase', logo: supabaseLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: internLogo,
      role: "Backend Developer Internship",
      company: "Panel Voices Pvt. Ltd.",
      date: "Oct 2025 - Nov 2025",
      desc: "During my internship, I contributed to several core projects that involved backend architecture, API development, and OpenAI-powered AI functionalities.",
      skills: [
        "Backend architecture",
        "API development",
        "System optimization",
        "Debugging & Testing",
        "Problem Solving",
      ],
    },
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      title: "Lara-Legal Analysis & Research Assistant",
      description:
        "L.A.R.A is a deployed, AI-powered legal research system for Indian law that automates issue identification, case retrieval, statutory analysis, and structured legal drafting using a multi-agent RAG architecture.",
      image: laraLegalLogo,
      tags: ["FastAPI", "Langraph","Groq","Sentence-Transformers","Tavily Search API","React.js","Clerk Auth"],
      github: "https://github.com/Rashi-Dwivedi1812/Lara-Legal-Assistant",
      webapp: "https://lara-legal-assistant.streamlit.app/",
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
      title: "Forged Signature Verification",
      description:
        "A full-stack web application built with React and a TensorFlow/FastAPI backend to detect forged signatures and compare signature similarity.",
       image: forgedSignatureLogo,
      tags: ["FastAPI", "TensorFlow & Keras","Python3","Vite","Pillow","React.js","Vercel","Render"],
      github: "https://github.com/Rashi-Dwivedi1812/Forged-Signature-Verification",
      webapp: "https://forged-signature-verification.vercel.app/",
    },
    {
      id: 3,
      title: "CyberHeist",
      description:
        "Nostalgic gaming platform that brings retro arcade games into the modern era.",
      image: cyberheist,
      tags: [ "React Js","Typescript","Vite","Tailwind","Node Js","Postgresql","Google Authentication"],
      github: "https://github.com/Cyberheist1/cyberheist",
      webapp: "https://cyber-heist.netlify.app/",
    },
    {
      id: 4,
      title: "Chatbot",
      description:
        "A modern real-time chat application built using Next.js, Convex, Clerk, and Tailwind CSS. Supports one-to-one chat, group conversations, reactions, typing indicators, presence detection, and smart UX enhancements.",
     image: chatbotLogo,
      tags: ["Nextjs","Typescript","Convex","Clerk Auth","Tailwind CSS","Vercel"],
      github: "https://github.com/Rashi-Dwivedi1812/Tars-Chatbot",
      webapp: "https://tars-chat-bot.vercel.app/",
    },
    {
      id: 5,
      title: "Animatic",
      description:
        "Animatic is a modern, responsive website with smooth scroll animations and interactive sliders using Locomotive.js and Swiper.js. Perfect for portfolios, landing pages, and creative showcases.",
      image: animaticLogo,
      tags: ["HTML", "CSS", "JavaScript","Swiper-js","locomotive-scroll"],
      github: "https://github.com/Rashi-Dwivedi1812/Animatic",
      webapp: "https://rashi-dwivedi1812.github.io/Animatic/",
    }
  ];  