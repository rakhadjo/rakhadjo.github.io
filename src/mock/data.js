import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rakha Djokosoetono', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Rakha Djokosoetono', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '@rakhadjo',
  subtitle: 'Welcome to my one-pager',
  cta: 'Cool',
};

// ABOUT DATA
export const aboutData = {
  img: 'selfportrait.jpg',
  paragraphOne:
    "I'm Rakha Djokosoetono, currently an incoming third year Computer Science student at The University of Manchester.",
  paragraphTwo:
    'I started coding in 2015. ' +
    "Throughout my journey, I've taught myself various languages and technologies, and put them to use in my various roles and greenfield projects. " +
    "I'm no superstar programmer, but I try my best everyday.",
  paragraphThree: 'Have a look at my contemporary resume as of May 2021!',
  resume: './resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cursedimg.png',
    title: 'Cursed Images API & Telegram Bot',
    info: 'REST API built with ExpressJS and the PugJS template engine hosted on Heroku that returns unsettling, seemingly cursed images, followed with a Telegram chat bot written in Python, also hosted on Heroku that returns the image from the API among other API calls.',
    info2: 'Open for contribution!',
    url: 'https://cursedimg.herokuapp.com',
    repo: 'https://github.com/rakhadjo/cursedimages.rest', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'htm-hell.png',
    title: 'HTM-HELL',
    info:
      'HTM-HELL is a website that serves as a multiple-level fun game.' +
      'Each page represents a level. Complete one level to go to the next. In some levels, losing means being sent back to previous levels, and sometimes even a few pages behind.',
    info2: 'Built with HTML, CSS, JS, one line of PHP, hosted at Heroku.',
    url: 'https://htm-hell.herokuapp.com',
    repo: 'https://github.com/rakhadjo/htm-hell', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eventlite.png',
    title: 'Eventlite ',
    info: 'Second year Software Engineering Project posing as an Eventbrite clone. Built using Java 11 Spring MVC.',
    info2: 'Information curated from the museum of natural history',
    url: '',
    repo: 'https://github.com/rakhadjo/eventlite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unknown.png',
    title: 'SPERA (SPE Resource Allocation) ',
    info: 'Internal company human resources allocation program, built with Java Spring Boot with MongoDB and MySQL databases',
    info2: 'Rebuilt from the 2019 version of the project with the same name. ',
    url: '',
    repo: 'https://github.com/rakhadjo/spera', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'speakeasy.png',
    title: 'SpeakEasy',
    info: "Web application, combining text-to-speech with predictive text. Purpose of improving communication for people who can't speak.",
    info2:
      'Built as a first year Computer Science Project, my personal focus was at the Databases & Verification bit',
    url: 'http://speakeasyapp.pythonanywhere.com/',
    repo: 'https://github.com/rakhadjo/speakeasy', // if no repo, the button will not show up
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    role: 'President',
    company: 'UniCS Manchester',
    description1:
      'UniCS is the largest Computer Science Students Society at the University of Manchester, representing the School of Computer Science. ',
    description2:
      "Responsible for overseeing the planning, execution and promotion of tech-based events (hackathons, tech-talks, etc) and technical project development. Additionally tasked to maintain a stellar relationship with the School of Computer Science faculty members & students, and the Students' Union",
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Head of Professional Development',
    company: 'PPIGM',
    description1:
      'PPIGM is the premier Indonesian Students Society in all of Greater Manchester. Director of professional & academic developement of the Indonesian Students Society in Greater Manchester.',
    description2:
      'Accountable in holding events related to individual career development and employability, in addition to career-related workshops.',
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Director of B2B',
    company: 'AIESEC Manchester',
    description1:
      'Head of prospecting & research process of potential business partners in Manchester, while ensuring sales routines in a youth-run team. ',
    description2:
      'Tracking goals & tasks to be achieved by the team. Motivating & inspiring my team players to be the best versions of themselves.',
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Developer',
    company: 'SPE Solution',
    description1:
      'Responsible for the creation and maintenance of a REST API (old version of SPERA) using MongoDB and Java Spring Boot, as an internal project for human resource allocation using an MVC approach.',
    description2: '',
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Cloud Specialist',
    company: 'RightCloud Pte. Ltd.',
    description1:
      'Attended client meetings to discuss the involvements of cloud migration from on-prem processes.',
    description2:
      'Conducted market research on cloud competitiveness (technical & financial) between AWS, Azure, and Google Cloud, working with interns from the RightCloud Singapore office.',
    period: 'Jan 2020 - present',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Wanna get in touch? That's awesome!",
  btn: 'Email Me',
  email: 'rakhadjo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/rakhadjo',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rakhadjo',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/rakhadjo',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/rakhadjo',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/447871347950',
    },
  ],
};
