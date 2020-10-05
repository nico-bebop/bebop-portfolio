import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '<bebop />', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, this is',
  name: '<bebop />',
  subtitle: 'Your next software partner',
  cta: "Let's meet",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "My real name is Nicolás Bibbó Pérez, I'm a software developer based in Mar del Plata, Buenos Aires, Argentina.",
  paragraphTwo:
    'This portfolio is meant to showcase my latest projects, so you can get an idea of what we can build together.',
  paragraphThree: 'Know more about my skills and experience checking my resume right here:',
  resume:
    'https://firebasestorage.googleapis.com/v0/b/nico-bebop.appspot.com/o/Nicolas-Bibbo-Resume.pdf?alt=media', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Módulo Renders',
    info:
      'Online portfolio for a 3d architecture rendering project. It consists of a photo gallery of renders, with an admin section for CRUD and a simple contact form.',
    info2: 'Built with React and Firebase. [Currently under development]',
    url: 'https://modulorenders.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Get in touch',
  email: 'nicolas.bibboperez@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/nico-bebop',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nico-bebop',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
