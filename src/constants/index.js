import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  docker,
  rest,
  githublogo,
  unity,
  csharp,
  python,
  qvex,
  RBC,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Curious",
    icon: web,
  },
  {
    title: "Creative",
    icon: mobile,
  },
  {
    title: "Proactive",
    icon: backend,
  },
  {
    title: "Passionate",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "scharp",
    icon: csharp,
  },
  {
    name: "githublogo",
    icon: githublogo,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "rest",
    icon: rest,
  },


];

const experiences = [
  {
    title: "Student Developer",
    company_name: "RBC",
    icon: RBC,
    iconBg: "#005daa",
    date: "May 2024 - Augest 2024",
    points: [
      "Fill in at end of term!"
    ],
  },
  {
    title: "Software Project Lead",
    company_name: "Queen's Vex Robotics",
    icon: qvex,
    iconBg: "#ffffff",
    date: "Oct 2022 - May 2024",
    points: [
      "laced top 16 in 2023 VexU world championships.",
      "Lead the subsystem controller and website team",
      "Created learning modules about subsystems and state-machines for new team members.",
      "Directed the design and execution of the team’s website",
      "Used ultrasonic and hue sensors to detect changes of color."
    ],
  },
  {
    title: "Student Developer",
    company_name: "RBC",
    icon: RBC,
    iconBg: "#005daa",
    date: "May 2023 - Augest 2023",
    points: [
      "Created a series of automated tests for the front and backend of RBC’s UFind web-app using Web driver and TypeScript",
      "Applied quality engineering and automation design principles to my development of test cases",
      "Created a web scrapper that is utilized daily to update UFind procedures using JavaScript and REST APIs.",
      " Designed a Webex chatroom scrapper and appended information to a csv file. Collaborated with business end to ensure their needs were accommodated. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
