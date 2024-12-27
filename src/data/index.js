import { algorithms, devnotes, oscs, microsoft } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Synechron Technologies",
    date: "Sep 2022 – Present",
    details: [
      "Tech Stack: JavaScript, TypeScript, HTML, CSS, JSON, Angular, React, Spring Boot, Git, AWS, MySQL.",
      "Developed a secure and efficient user entitlement solution, resulting in a 60% reduction in manual processing time and significantly enhancing user experience.",
      "Improved development efficiency by collaborating with backend developers and API teams, employing Agile methodologies for quicker issue resolution and optimized user interactions.",
      "Increased application stability by designing and executing comprehensive unit tests, which decreased deployment errors by 40%.",
      "Implemented data validation processes using Angular Reactive Forms, increasing data accuracy and integrity by 30%, which minimized errors in user-facing applications.",
      "Optimized code performance through refactoring and best practices, utilizing performance profiling tools, reducing load times by 25% and enhancing user satisfaction.",
      "Created authentication mechanisms to establish secure, role-based access control for both internal and external users, significantly enhancing overall security.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "JPMorgan Chase & Co.",
    date: "Apr 2022 – Sep 2022",
    details: [
      "Tech Stack: HTML, CSS, JavaScript, AWS, Angular, Node.js, REST APIs.",
      "Developed reusable UI components to improve consistency and reduce development time by 20%.",
      "Contributed to frontend development by utilizing HTML, CSS, and JavaScript to enhance user interfaces, improving usability and performance across multiple platforms.",
      "Built cloud-based applications on AWS, enabling scalable and efficient service deployment.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self Employed",
    date: "Jan 2021 – Dec 2021",
    details: [
      "Developed dynamic, responsive websites for small businesses using HTML, CSS, JavaScript, and React.",
      "Collaborated with clients to gather requirements and delivered customized solutions to meet their needs.",
      "Optimized websites for SEO, improving search engine rankings and driving traffic growth by 25%.",
      "Integrated payment gateways and e-commerce features for online retail platforms.",
      "Provided ongoing technical support and training to ensure clients could effectively manage their websites.",
    ],
  },
];


const portfolio = [
  {
    name: "AWS Certified DevOps Engineer - Professional",
    description:
      "Achieved AWS Certified DevOps Engineer - Professional certification, showcasing expertise in implementing, automating, and optimizing continuous delivery systems and methodologies on AWS.",
    image: oscs,
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    description:
      "Achieved AWS Certified Solutions Architect Associate certification, demonstrating expertise in designing scalable, cost-optimized, and secure AWS cloud solutions.",
    image: algorithms,
  },
  {
    name: "AWS Certified Developer - Associate",
    description:
      "Achieved AWS Certified Developer - Associate certification, demonstrating expertise in developing and maintaining AWS-based applications using core services and best practices.",
    image: devnotes,
  },
  {
    name: "Microsoft Certified Associate",
    description:
      "Earned Microsoft Certified Associate credential, validating proficiency in Microsoft technologies and solutions, including cloud computing, application development, and database management.",
    image: microsoft,
  },
];


export { experiences, portfolio };

