import {
 javascript,
  // mysql,
  postgresql,
  nodejs,
  react,
  // typescript,
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
  mongo
} from "../assets";

export const AppText = {
  hello: "Hello,",
  Iam: "I am ",
  SwapnilKadam: "Swapnil Kadam",
  aboutMeDescripion:
    "Hi, I'm Swapnil Kadam!I’m a passionate frontend developer with hands-on experience in ReactJS, Tailwind CSS, and JavaScript. Currently, I’m expanding into backend development with Node.js, Express.js, and RESTful APIs to strengthen my full-stack capabilities.\n\nI love building scalable, user-friendly web applications and have worked on projects like an Online eBook Selling Website (featuring authentication, search, and cart functionality) and a Tractor Work Management System that streamlines farm service operations.\n\nBeyond coding, I actively contribute to tech communities, organizing coding and communication clubs to help peers enhance their skills. My goal is to become a proficient software developer while mentoring others in technology.",
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
    title: "Backend Developer",
    desc: "Managing databases and backend logic effectively.",
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
    name: "React.js",
    icon: react,
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   id: 3,
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    id: 4,
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    id: 7,
    name: "MongoDB",
    icon: mongo,
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

