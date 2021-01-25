import { FaReact, FaLightbulb, FaPhoneAlt, FaCodepen, FaGithub } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

interface Icon {
  icon: string | any;
}

export interface Data extends Icon {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  img: string;
  shortDesc: string;
  description: string;
}

export interface Phone extends Icon {
  number: string;
}

export interface Email extends Icon {
  address: string; 
}

export interface WebPage extends Icon {
  address: string;
}

export interface Contacts {
  phone: Phone;
  email: Email;
  linkedIn: WebPage;
  codepen: WebPage;
  github: WebPage;
}

export interface Article {
  title: string;
  file: string;
  path: string;
  description: string;
}

export const achievements: Data[] = [
  {
    title: 'Frontend Developer',
    description: 'I work with React-powered frontend stack to create delightful, powerful and performant applications for wide range of browsers',
    icon: FaReact
  },
  {
    title: 'Experienced Engineer',
    description: 'I have developed complex, highly-performative applications using React, Redux (including Redux toolkit), GraphQL, vanilla JavaScript, Data structures and Algorithms, Git (Github and Gitlab)',
    icon: GiMuscleUp
  },
  {
    title: 'Continuous Learner',
    description: 'I never stop learning to stay competitive. I do it to try new processes, to innovate, or to do something new',
    icon: FaLightbulb
  }
];

export const skills: Data[] = [
  {
    title: 'Frontend Development',
    description: '',
    icon: ''
  },
  {
    title: 'React Development',
    description: '',
    icon: ''
  },
  {
    title: 'Redux State Management',
    description: '',
    icon: ''
  }
];

export const projects: Project[] = [
  {
    title: 'Recipe Search',
    img: project1,
    shortDesc: 'In this app you can choose your favourite recipe and get info about it',
    description: ''
  },
  {
    title: 'Todo List',
    img: project2,
    shortDesc: 'In this app you can create, edit and delete your own todo list',
    description: ''
  },
  {
    title: 'Author Quiz',
    img: project3,
    shortDesc: 'In this app you need to choose the book written by the author shown on the picture',
    description: ''
  },
  {
    title: 'Video Games Sales Visualisation',
    img: project4,
    shortDesc: 'This app is created using D3.js and visualizes data',
    description: ''
  },
  {
    title: 'Calculator',
    img: project5,
    shortDesc: 'A simple calculator created using React',
    description: ''
  },
  {
    title: 'Markdown Previewer',
    img: project6,
    shortDesc: 'An app that transform markdown to text created using React',
    description: ''
  }
];

export const contacts: Contacts = {
  phone: {
    number: '+7-902-802-13-14',
    icon: FaPhoneAlt
  },
  email: {
    address: 'dmitriilobanov3@gmail.com',
    icon: MdEmail
  },
  linkedIn: {
    address: 'https://www.linkedin.com/in/dmitrii-lobanov',
    icon: GrLinkedin
  },
  codepen: {
    address: 'https://codepen.io/Dmitrii-Lobanov',
    icon: FaCodepen
  },
  github: {
    address: 'https://github.com/Dmitrii-Lobanov',
    icon: FaGithub
  }
}

export const blog: Article[] = [
  {
    title: 'Generators',
    file: 'generators',
    path: 'generators',
    description: `Regular functions return only one, single value (or nothing).
    Generators can return (“ **yield** ”) multiple values, one after another, on-demand. They work great with [iterables](https://javascript.info/iterable), allowing to create data streams with ease`
  },
  {
    title: 'Canvas',
    file: 'canvas',
    path: 'canvas',
    description: 'Some tasks, such as drawing a line between arbitrary points, are extremely awkward to do with regular HTML elements.'
  }
]