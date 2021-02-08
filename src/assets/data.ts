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
  repo: string;
  demo: string;
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
  tags: string[];
}

export interface Accomplishment {
  title: string;
  school: string;
  schoolUrl?: string;
  credential?: string;
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
  },
  {
    title: 'C1 English',
    description: '',
    icon: ''
  },
];

export const projects: Project[] = [
  {
    title: 'Recipe Search',
    img: project1,
    shortDesc: 'In this app you can choose your favourite recipe and get info about it',
    description: '',
    repo: 'https://github.com/Dmitrii-Lobanov/Recipe-App',
    demo: 'https://dmitrii-lobanov-recipeapp.netlify.app/'
  },
  {
    title: 'Todo List',
    img: project2,
    shortDesc: 'In this app you can create, edit and delete your own todo list',
    description: '',
    repo: 'https://github.com/Dmitrii-Lobanov/todo-list',
    demo: 'https://dmitrii-lobanov-todolist.netlify.app/'
  },
  {
    title: 'Author Quiz',
    img: project3,
    shortDesc: 'In this app you need to choose the book written by the author shown on the picture',
    description: '',
    repo: 'https://github.com/Dmitrii-Lobanov/Author-Quiz',
    demo: 'https://dmitrii-lobanov-authorquiz.netlify.app/'
  },
  {
    title: 'Video Games Sales Visualisation',
    img: project4,
    shortDesc: 'This app is created using D3.js and visualizes data',
    description: '',
    repo: 'https://codepen.io/Dmitrii-Lobanov/pen/zgvEyM',
    demo: 'https://codepen.io/Dmitrii-Lobanov/pen/zgvEyM'
  },
  {
    title: 'Calculator',
    img: project5,
    shortDesc: 'A simple calculator created using React',
    description: '',
    repo: 'https://codepen.io/Dmitrii-Lobanov/pen/ymBVEm',
    demo: 'https://codepen.io/Dmitrii-Lobanov/pen/ymBVEm'
  },
  {
    title: 'Markdown Previewer',
    img: project6,
    shortDesc: 'An app that transform markdown to text created using React',
    description: '',
    repo: 'https://codepen.io/Dmitrii-Lobanov/pen/MNggxw',
    demo: 'https://codepen.io/Dmitrii-Lobanov/pen/MNggxw'
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
    description: 'Basic approach to generators in Javascript',
    tags: ['JavaScript', 'Frontend', 'WebDev']
  },
  {
    title: 'Canvas',
    file: 'canvas',
    path: 'canvas',
    description: 'Review of canvas element of HTML and how to use it in Javascript',
    tags: ['JavaScript', 'Frontend', 'WebDev']
  },
  {
    title: 'Promises',
    file: 'promises',
    path: 'promises',
    description: 'Short but yet eloquent article on promises and asynchronous actions in Javascript',
    tags: ['JavaScript', 'Frontend', 'WebDev']
  }
]

export const accomplishments: Accomplishment[] = [
  {
    title: 'JavaScript: The Advanced Concepts',
    school: 'Udemy',
    schoolUrl: 'https://www.udemy.com/',
    credential: 'https://www.udemy.com/certificate/UC-a1598345-3779-4b07-9e90-1dd56a342ec0/'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    school: 'Udemy',
    schoolUrl: 'https://www.udemy.com/',
    credential: 'https://www.udemy.com/certificate/UC-97f31ead-0ad3-4627-80c2-b0710b31b670/'
  },
  {
    title: 'Advanced React and Redux',
    school: 'Udemy',
    schoolUrl: 'https://www.udemy.com/',
    credential: 'https://www.udemy.com/certificate/UC-caf55023-5aff-4513-9ce6-285c8597fac6/'
  },
  {
    title: 'Modern React with Redux',
    school: 'Udemy',
    schoolUrl: 'https://www.udemy.com/',
    credential: 'https://www.udemy.com/certificate/UC-5ee72c2b-f2ae-4266-9c1f-d231dd423658/'
  },
  {
    title: 'Full Stack',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/full-stack'
  },
  {
    title: 'Information Security and Quality Assurance',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/information-security-and-quality-assurance'
  },
  {
    title: 'Responsive Web Design',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/responsive-web-design'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/javascript-algorithms-and-data-structures'
  },
  {
    title: 'Front End Libraries',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/front-end-libraries'
  },
  {
    title: 'Data Visualization',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/data-visualization'
  },
  {
    title: 'APIs and Microservices',
    school: 'FreeCodeCamp',
    schoolUrl: 'https://www.freecodecamp.org/',
    credential: 'https://freecodecamp.org/certification/dmitrii-lobanov/apis-and-microservices'
  },
  {
    title: 'English (credential ID: 17RU006648LOBD069A)',
    school: 'IELTS',
    schoolUrl: 'https://www.ielts.com/',
    credential: 'https://ielts.ucles.org.uk/ielts-trf/'
  }
];