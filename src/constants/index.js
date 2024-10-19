import {
 javascript,
  mysql,
  postgresql,
  nodejs,
  react,
  typescript,
  c,
  cpp,
  java,
  html,
  css,
  todo,
  movie,
  codebook,
  hotel,
  tailwind,
} from "../assets";

export const AppText = {
  hello: "Hello,",
  Iam: "I am ",
  SwapnilKadam: "Swapnil Kadam",
  aboutMeDescripion:
    "Hello! I’m Swapnil Kadam, a passionate and driven computer science student with a strong interest in software development and problem-solving. Currently in my 3rd year of a Bachelor's in Computer Application (BCA), I have hands-on experience with front-end development using ReactJS and backend systems like JSON-Server. I enjoy working on innovative projects, including web development. I’m also actively involved in organizing student-led clubs to foster technical skills, such as coding and communication, and recently took part in the Avishkar project competition, where my team’s innovative idea was selected for further development. With a growing expertise in programming languages like Java, C++, and JavaScript, I am continuously learning to expand my skill set, preparing for campus placements and technical interviews.I aim to become a proficient software developer who contributes to meaningful projects while mentoring others in the field of technology. When I’m not coding, you can find me exploring new technology trends, sharing knowledge with my peers, or working on passion projects that combine creativity and problem-solving.",
  Skills: "Skills",
  Experties: "Experties",
  UIUXDesigner: "UI/UX Designer",
  Developer: "C++ Dev",
  FrontedDeveloper: "Frontend Dev",
  Portfolio: "Portfolio",
  Contact: "Contact ",
  
  copywriteText: "Copyright by Swapnil Kadam @2023",
};

export const aboutSection = [
  
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=",
    title: "Frontend Developer",
    desc: "Building responsive, user-friendly interfaces.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000",
    title: "Java Developer",
    desc: "Creating scalable and robust applications with Java.",
  },
];

export const skillsList = [
  {
    id: 5,
    name: "C",
    icon: c,
  },
  {
    id: 6,
    name: "C++",
    icon : cpp,
  },
  {
    id: 8,
    name: "Java",
    icon : java,
  },
  {
    id: 9,
    name: "Html",
    icon : html,
  },
  {
    id: 10,
    name: "CSS",
    icon : css,
  },

  {
    id: 1,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 12,
    name: "Node.js",
    icon: nodejs,
  },
  {
    id: 2,
    name: "React",
    icon: react,
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 4,
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    id: 7,
    name: "MySQL",
    icon: mysql,
  },
  
];


export const portfolio = [
  {
    id: 1,
    title: "ToDo List",
    type: "ui/ux",
    desc: "A Todo List app built with React that lets users manage tasks with add, edit, and delete functionality using React hooks.",
    imageUrl:todo,
    code : "https://github.com/swapnilKadam-10/taskease",
    demo : "https://taskease-eight.vercel.app/",
    isDemo : true
    
  },
  {
    id: 2,
    title: "Movie Search Website",
    type: "website",
    desc: "A movie search website built with React that allows users to search for movies and view details using dynamic API integration.",
    imageUrl: movie,
    code: "https://github.com/swapnilKadam-10/cineverse",
    demo : "https://cineverse-sk.vercel.app/",
    isDemo : true
  },
  {
    id: 3,
    title: "E-commerce Website",
    type: "mobile",
    desc: "An e-commerce website built with React for selling e-books, featuring a user-friendly interface, secure authentication.",
    imageUrl:codebook,
    code : "https://github.com/swapnilKadam-10/codebook",
    demo : "https://codebook-sk.netlify.app/",
    isDemo : true
  },
  {
    id: 4,
    title: "Hotel Management",
    type: "devlopment",
    desc: "A console-based Java Hotel Management System for booking rooms, ordering food, and managing customer details.",
    imageUrl:hotel,
    code : "https://github.com/swapnilKadam-10/hotelMangement",
    demo : "https://taskease-eight.vercel.app/",
    isDemo : false,
    
  },
];

