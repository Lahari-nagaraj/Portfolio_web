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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Education",
    company_name: "My Academic Journey",
    icon: starbucks,
    iconBg: "#ffffff",
    
    points: [
      " I completed my schooling at Sri KV English School (ICSE) [2015-2021], where I built a strong foundation in academics",
      " I pursued my higher secondary education at Presidency PU College [2021-2023], where I strengthened my analytical thinking",
      " Currently, I am pursuing a Bachelor's degree in Computer Science and Engineering at University Visvesvaraya College of Engineering, Bangalore",
      "  My journey at UVCE has been exciting, filled with opportunities to learn, collaborate, and grow. The exposure to different fields has helped me broaden my perspective beyond textbooks",
    ],
  },
  {
    title: "Technical Challenges and Beyond",
    company_name: "Building, Competing, Networking..",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      " I am a part of IEEE UVCE, a technical club that provides me with exposure to organizing events, collaborating with peers, and exploring various domains beyond academics.",
  " I am also involved with Marvel UVCE, an R&D lab where I have delved into the AI/ML domain, embracing self-learning and deep exploration of cutting-edge technologies.",
  "Additionally, I am a part of VFX  with UVCE Chronicles, allowing me to enhance my creative skills and storytelling through visuals.",
    ],
  },
  {
    title: "Interests and Hobbies",
    company_name: "What fuels Me..",
    icon: shopify,
    iconBg: "#ffffff",
    points: [
  " I find joy in chess, writing, and reading novels each of them offering a unique escape. Chess sharpens my strategy, writing helps me express my thoughts and books let me live a thousand lives through their stories.",
  " Creativity fuels me, whether it's through craftwork, music or storytelling. These passions keep me inspired and constantly learning."
]

  },
  {
    title: "Reach Out",
    company_name: "Communication Hub",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
  "📞 Phone: +91 86609 65642",  
  "📧 Email: laharinagaraj9876@gmail.com",  
  "💻 GitHub: https://github.com/Lahari-nagaraj",  
  "🔗 LinkedIn: www.linkedin.com/in/lahari-priya-n-62bb822a2",  
  "📸 Instagram: lahari_nagaraj",  
]

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