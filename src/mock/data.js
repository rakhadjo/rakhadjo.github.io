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
    "I'm Rakha Djokosoetono, currently a second year Computer Science student at The University of Manchester.",
  paragraphTwo:
    'I started coding in 2015. ' +
    "Throughout my journey, I've taught myself various languages and technologies, and put them to use in my various roles and greenfield projects. " +
    "I'm no superstar programmer, but I try my best everyday.",
  paragraphThree: 'Have a look at my contemporary resume as of October 2020!',
  resume: 'https://personalpages.manchester.ac.uk/student/rakha.djokosoetono/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'unknown.png',
    title: 'tyrannosaurus.rest ',
    info:
      'Rest API built with ExpressJS, with data collected by Python Webscraping that returns information on dinosaurs.',
    info2: 'Information curated from the museum of natural history',
    url: '',
    repo: 'https://github.com/rakhadjo/tyrannosaurus.rest', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unknown.png',
    title: 'SPERA (SPE Resource Allocation) ',
    info:
      'Internal company human resources allocation program, built with Java Spring Boot with MongoDB and MySQL databases',
    info2: 'Rebuilt from the 2019 version of the project with the same name. ',
    url: '',
    repo: 'https://github.com/rakhadjo/spera', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unknown.png',
    title: 'Cursed Images API & Telegram Bot',
    info:
      'REST API built with Spring Boot and Java, connected to MongoDB that returns off-putting images, followed with a Telegram chat bot written in Python, hosted on Heroku that returns the image from the API.',
    info2: 'Open for contribution!',
    url: '',
    repo: 'https://github.com/cobidev/cursed_images_api', // if no repo, the button will not show up
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
    img: 'speakeasy.png',
    title: 'SpeakEasy',
    info:
      "Web application, combining text-to-speech with predictive text. Purpose of improving communication for people who can't speak.",
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
    role: 'Head of Employability',
    company: 'PPIGM',
    description1:
      'Director of professional & academic developement of the Indonesian Students Society in Greater Manchester.',
    description2:
      'Accountable in holding events related to individual career development and employability, in addition to career-related workshops.',
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Vice President',
    company: 'AIESEC Manchester',
    description1:
      'Head of prospecting & research process of potential business partners in Manchester, while ensuring sales routines in a youth-run team. ',
    description2:
      'Tracking goals & tasks to be achieved by the team. Motivating & inspiring my team players to be the best versions of themselves.',
    period: 'Jan 2020 - present',
  },
  {
    id: nanoid(),
    role: 'Secretary',
    company: 'UniCS Manchester',
    description1: 'Organized, moderated, and recorded minutes during committee meetings.',
    description2: 'Provided administrative & clerical support to ensure total workspace synergy',
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
