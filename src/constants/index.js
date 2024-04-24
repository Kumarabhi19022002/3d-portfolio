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
    flabs,
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
      title: "Web Developer",
      icon: web,
    },
     {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
    {
      title:"Problem Solving",
      icon:mobile
    }
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
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Flabs",
      icon: flabs,
      iconBg: "#383E56",
      date: "December 2023 - January 2024",
      points: [
       "Created responsive and visually appealing user interfaces using HTML, CSS, and JavaScript frameworks like React",
       "Implemented authentication and authorization features, including login/logout functionality and user permissions management",
      "Integrated frontend components with backend APIs to fetch and display dynamic data, ensuring seamless communication between client and server",
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
      name: "Chat App",
      description:
        "In this  project, I designed and built a real-time group chat application using Node.js, Socket.io, HTML, and CSS. The application features an integrated notification system that promptly informs users whenever someone enters or exits the chat room. By utilizing Node.js and Socket.io, I ensured instant message updates, contributing to a seamless conversational experience. Moreover, I crafted an intuitive user interface that showcases both online and offline users, enhancing the overall usability of the application.",
      tags: [
        {
          name: "node js",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie App",
      description:
        "This React.js project offers a movie discovery platform allowing users to explore trending films, add selections to favorites, and sort favorites by popularity and IMDb rating. The app employs React.js, API integration, CSS, and JavaScript ES6 to create a responsive user interface. The result is an efficient and visually appealing system for users to discover and manage their preferred movies. Future plans include integrating user authentication and a recommendation feature for an enhanced user experience.",
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
      name: "Portfolio",
      description:
        "This portfolio project is a website that showcases my skills and experience in HTML CSS and JavaScript. It includes a navigation bar, an about me section, and a contact form. I created the website using HTML, CSS, Bootstrap, and Font Awesome. I am proud of this project because it demonstrates my ability to use these technologies to create a professional and visually appealing website.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };