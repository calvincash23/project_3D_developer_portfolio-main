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

import bruce from "../assets/headshots/bruce.jpg";

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
      "Spearheaded the development of a new LLM endpoint for RBC’s GENAI app BART, reducing call time by an average of 15 seconds, resulting in an estimated savings of $1M annually. ",
      "Adapted and updated the endpoint to align with dynamic business needs, ensuring continuous alignment with organizational needs.",
      "Gained knowledge of the Helios production pipeline, including updating Rook checks for multiple applications.",
      "Successfully orangized and led the migration of over 10 applications, ensuring we met the deadline one month before the due date.",
    ],
  },
  {
    title: "Software Project Lead",
    company_name: "Queen's Vex Robotics",
    icon: qvex,
    iconBg: "#ffffff",
    date: "Oct 2022 - May 2024",
    points: [
      "Placed top 16 in 2023 VexU world championships.",
      "Lead the subsystem controller and website team",
      "Created learning modules about subsystems and state-machines for new team members.",
      "Directed the design and execution of the team’s website",
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
      "We were pleased to have Calvin join our CCT development team during the COOP term. Initially, he helped migrate applications from Nexus to Artifactory, easing the workload for our team focused on urgent priorities. Calvin then shifted to our GenAI team, where he quickly adapted to hands-on coding and demonstrated a strong desire to contribute and grow. His ability to swiftly incorporate feedback from senior developers was impressive. Calvin's passion for IT is evident, and I wish him continued success, whether at RBC or elsewhere.",
    name: "Bruce Emberly",
    designation: "Director, Application Development & Support - Advisor Enablement, Contact Centre Technology",
    company: "RBC",
    image: bruce,
  },
  {
    testimonial:
      "Calvin Birch has been an exceptional co-op student at RBC, demonstrating remarkable growth and contributions during his second year with our team. He has played a pivotal role in advancing our GenAI application, by developing production-ready web services, enhancing technical debt, and significantly improving code coverage. Calvin's willingness to assist in various areas, collaborative spirit, and ability to work independently have made him an invaluable asset. Calvin's eagerness to learn, adapt, and deliver high-quality results has earned him our appreciation and respect. We would enthusiastically welcome Calvin back for future co-op terms, and we highly recommend him to any organization seeking a talented, dedicated, and team-oriented individual.",
    name: "Chris Kao",
    designation: "Director, Integration Development, and GenAI Contact Centre Technology",
    company: "RBC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Calvin's exceptional skills and dedication have consistently made a positive impact on our team. Calvin combines technical expertise with strong leadership, showing a commitment to excellence in every project they undertake. Their ability to collaborate effectively and drive results is truly impressive. I am confident that Calvin will continue to achieve great success in their future endeavors.",
    name: "Michael Cassidy",
    designation: "VP",
    company: "Queen's Vex Robotics",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQG1yheNaNTm4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663898197384?e=1729728000&v=beta&t=GAtv5ojLA4fYODvgW3pHOjn7KTaZrFlkZTYxlO0xrtk",
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
