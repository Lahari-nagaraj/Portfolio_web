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
  " Phone: +91 86609 65642",  
  " Email: laharinagaraj9876@gmail.com",  
  " GitHub: https://github.com/Lahari-nagaraj",  
  " LinkedIn: www.linkedin.com/in/lahari-priya-n-62bb822a2",  
  " Instagram: lahari_nagaraj",  
]

  },
];

const testimonials = [
  {
    name: "Codefury",
    designation: "IEEE",
    company: "UVCE",
    testimonial:
      "Built a disaster management website in a hackathon with unique features for real-time response and resource coordination. Focused on intuitive design and efficient communication. Enhanced accessibility for affected communities and responders",
    
    
  },
  {
    testimonial:
      "Tried to develop an AI Travel Planner in a 36-hour virtual hackathon using React, Firebase, ShadCN, and Tailwind CSS. Focused on personalized trip recommendations and seamless user experience",
    name: "Argonyx'24",
    designation: "RV",
    company: "University",
  },
  {
    testimonial:
      "Participated in my first MUN under the 'All India Political Parties' domain, gaining valuable insights into debate and politics. It was a great learning experience",
    name: "Model United Nations",
    designation: "NITK",
    company: "Suratkal",
  },
];

const projects = [
  {
    name: "TO-DO List",
    description:
      "This is a simple to-do list app built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to add, update, delete, and mark tasks as complete. The backend manages data storage and retrieval, while the React frontend ensures a smooth user experience. It’s designed to be responsive and easy to use.",
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
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Lahari-nagaraj/Todo_list",
  },
  {
    name: "Musical Beats",
    description:
      "This is a small project built using HTML, CSS, and JavaScript that lets users play musical beats. Different sounds can be triggered with button clicks or keyboard keys, creating a fun and interactive experience. The design is simple, and the functionality makes it easy to experiment with rhythms.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Lahari-nagaraj/Musical-beats",
  },
  {
    name: "Device Tracker",
    description:
      "This real-time device tracker is built using Node.js, Express, Socket.io, and Leaflet for maps. It allows users to track devices dynamically on a map with live updates. Socket.io ensures seamless real-time communication, while Leaflet provides an interactive and responsive mapping experience.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "leaflet",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Lahari-nagaraj/Realtime_device_tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };