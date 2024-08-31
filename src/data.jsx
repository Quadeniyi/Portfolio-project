import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import Image1 from "./assets/Images/image1.png";
import Image2 from "./assets/Images/image2.png";
import Image3 from "./assets/Images/image3.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-lime-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-lime-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-lime-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Image1,
    url: "",
    github: "",
    title: "social medial",
    text: "this is a typical React.Js component based social media dashboard front-end interface that display number of users or followers.It is a responsive design with light and dark mode",
  },
  {
    id: nanoid(),
    img: Image2,
    url: "https://sail-sign-qcldg6alp-adeniyi-quadris-projects.vercel.app",
    github: "https://github.com/Quadeniyi/Sail-sign-in",
    title: "login page",
    text: "A typical login page,designed using HTML/CSS. its responsive for all screen sizes.",
  },
  {
    id: nanoid(),
    img: Image3,
    url: "https://sail-remote-sdnhyec08-adeniyi-quadris-projects.vercel.app/",
    github: "https://github.com/Quadeniyi/-Sail-Remote-Job",
    title: "Home page",
    text: "An appealing and attractive remote work platform home page,designed with HTML/CSS with screen size responsiveness.",
  },
];
