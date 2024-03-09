import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
   {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Portfolio",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Jan 2024 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Crypto Tracker",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - Feb 2024",
        points: [
            "Created Crypto tracker,where traders can watch the charts and prices of the crypto currency ,create with mulitple libraries",
            "In charts we can check the market valuation , price tracker ,total volume",
            "API call is used ,it was a live tracker"
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "FEB 2024 - FEB 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: "https://github.com/Pandian-Arjunan",
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/pandian-arjunan-b36442227/",
    }
];

export const projects = [
    {
        
        theme: 'btn-back-red',
        name: 'Portfolio',
        description: 'Created my own portfolio ,which describe about me,my skills and knowledge about the tools,It was created with react and tailwind css',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        
        theme: 'btn-back-green',
        name: 'Admin Dashboard',
        description: 'Created a Front-end Projects ,It was a Admin dashboard,where admin can see his/her market revenue, sales and expenses , give additional features  like different types charts and market structure,we can sort the orders, crud app .',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
      
        theme: 'btn-back-blue',
        name: 'Crypto Tracker',
        description: 'It was react projects, A crpto traders can see the digital curriencies live price and tracking , we can see the chart with period wise',
        link: 'https://cryptodash-board.netlify.app/dashboard',
    },
    {
        
        theme: 'btn-back-pink',
        name: 'Todo APP',
        description: 'Is a basic app, we can add the todos ,edit and delete ,update the todos.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
   
];