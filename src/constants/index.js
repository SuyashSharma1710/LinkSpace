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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  suven,
  docker,
  skola,
  django,
  java,
  python,
  meta,
  starbucks,
  colabera,
  tesla,
  shopify,
  estate,
  handsign,
  faceex,
  sync,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine-L Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Analyst IT",
    company_name: "Collabera",
    icon: colabera,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Provided essential technical support to troubleshoot and resolve hardware (computers, printers) and software issues, honing problem-solving skills crucial for web development challenges.",
      "Configured and optimized hardware and software setups, ensuring robust system performance essential for web applications and services",
      "Achieved consistently high resolution and customer satisfaction ratings, reflecting strong communication and client-focused skills pivotal in web development projects.",
      "Installed and configured hardware and software, ensuring optimal system performance.",
      "Managed and resolved network complexities involving Cisco devices, routers, switches, LAN, WAN, and MAN connections, ensuring reliable web service delivery.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "SYNC Intern",
    icon: sync,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Constructed 4 web applications utilizing the robust Django framework.",
      "Engineered a Python-powered solution for server-side logic and database manipulation, streamlining data retrieval processes and enhancing system efficiency by 50%.",
      "Revamped user interfaces with meticulous HTML, CSS, and JavaScript enhancements, leading to a 30% drop-in bounce rates and a 20% boost in average session durations, improving user experience.",

    ],
  },
  {
    title: "Web Developer",
    company_name: "Suven Consultancy PVT. LTD.",
    icon: suven,
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2022",
    points: [
      "Developed and implemented 4 web applications using Django framework.",
      "Employed Python for server-side logic and data access, resulting in a 25% decrease in data processing time.",
      "Engineered an API connection to centralize data storage in a SQL database, reducing data retrieval time by 40% and improving system performance for 1000+ daily users.",
      "Utilized Django features to streamline ORM (Object-Relational Mapping), routing, views, and develop RESTful APIs, resulting in a 30% reduction in development time.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Suyash proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Suyash does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Suyash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Elearning Platform",
    description:
      "Built an E-Learning platform using Python and Django, empowering digital education. Users registered, accessed course materials, took online assessments, and generate certificate. Demonstrated expertise in web development.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: skola,
    source_code_link: "https://github.com/SuyashSharma1710/E_Learning_PROJECT/",
  },
  {
    name: "Estate Agency",
    description:
      "Web application that enables users to search for nearby properties for sale, view estimated price ranges for property, and locate available land based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/SuyashSharma1710/estate-agency",
  },
  {
    name: "Hand Sign Recog.",
    description:
      "Hand Gesture Recognition is a project focused on developing a computer vision system that can accurately detect and interpret human hand sign language in real-time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: handsign,
    source_code_link: "https://github.com/SuyashSharma1710/Hand_Gesture_Recognition",
  },
  {
    name: "Facial Expression Recog.",
    description:
      "Facial Expression Recognition (FER) is a computer vision task aimed at identifying and categorizing emotional expressions depicted on a human face.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "notebook",
        color: "pink-text-gradient",
      },
    ],
    image: faceex,
    source_code_link: "https://github.com/SuyashSharma1710/face_expression_recognition_in_jupyter",
  },
];

export { services, technologies, experiences, testimonials, projects };
