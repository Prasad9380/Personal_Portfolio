// All content below is sourced directly from Prasad's resume.
// Do not add companies, projects, links, or numbers that are not present there.

export const profile = {
  name: "Prasad Manjunath Kandagal",
  shortName: "Prasad M. Kandagal",
  initials: "PMK",
  role: "Java Backend Developer | DevOps & CI/CD",
  location: "Bangalore, India",
  phone: "+91 9380757218",
  email: "prasadmk2004@gmail.com",
  linkedin: "linkedin.com/in/prasadmk",
  linkedinUrl: "https://linkedin.com/in/prasadmk",
  github: "github.com/Prasad9380",
  githubUrl: "https://github.com/Prasad9380",
  summary:
    "Java Backend Developer (B.E. CSE, 2026, CGPA 7.9) with hands-on internship experience building CRUD-based applications using Core Java, OOP, JDBC, and MySQL. Comfortable working across the deployment pipeline with Docker, Linux shell scripting, and CI/CD workflows in GitHub Actions and GitLab CI, alongside AWS Cloud Fundamentals knowledge of EC2, S3, and IAM. Seeking an entry-level Java Developer or Java Backend role with DevOps exposure to build and ship reliable, scalable backend systems in an agile team.",
  resumeFile: "/resume/Prasad_Kandagal_Java_Backend_DevOps.pdf",
};

export const heroPipeline = [
  { id: "java", label: "Java", x: 50, y: 12 },
  { id: "jdbc", label: "JDBC", x: 14, y: 34 },
  { id: "mysql", label: "MySQL", x: 84, y: 34 },
  { id: "docker", label: "Docker", x: 10, y: 68 },
  { id: "git", label: "Git", x: 50, y: 82 },
  { id: "cicd", label: "CI/CD", x: 90, y: 68 },
  { id: "aws", label: "AWS", x: 50, y: 50 },
] as const;

export const heroConnections: [string, string][] = [
  ["java", "jdbc"],
  ["java", "mysql"],
  ["java", "aws"],
  ["jdbc", "docker"],
  ["mysql", "cicd"],
  ["docker", "git"],
  ["cicd", "git"],
  ["aws", "git"],
];

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { id: "languages", label: "Languages", skills: ["Java (Core & Advanced)", "Python (Basic)", "SQL"] },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "OOP",
      "Collections Framework",
      "Exception Handling",
      "Multithreading",
      "JVM",
      "JDBC",
      "DAO Pattern",
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MySQL", "Database Design", "Normalization", "Parameterized Queries"],
  },
  {
    id: "devops",
    label: "DevOps & CI/CD",
    skills: ["Docker", "GitHub Actions", "GitLab CI", "Linux / Shell Scripting", "Git", "GitHub"],
  },
  {
    id: "cloud",
    label: "Cloud",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "Cloud Architecture Basics"],
  },
  { id: "web", label: "Web", skills: ["HTML5", "CSS3", "JavaScript (Basic)"] },
  { id: "tools", label: "Tools", skills: ["Eclipse", "IntelliJ IDEA", "VS Code"] },
  {
    id: "methodologies",
    label: "Methodologies",
    skills: ["SDLC", "Agile / Scrum", "Requirement Analysis", "Incremental Development"],
  },
];

export const experience = [
  {
    role: "Full Stack Java Developer Intern",
    company: "Pankaj Sir Academy",
    period: "January 2026 – Present",
    location: "Bangalore",
    highlights: [
      "Developed and deployed 3+ Java applications with full CRUD functionality using JDBC and MySQL, reducing data retrieval time through optimized SQL queries.",
      "Engineered modular, maintainable Java modules applying OOP principles (inheritance, polymorphism, encapsulation), enabling 40% faster code reuse across projects.",
      "Implemented robust exception handling and input validations, reducing runtime errors by an estimated 60% in practice tasks.",
      "Used Docker and Linux shell scripting to containerize and run practice applications consistently across environments.",
      "Collaborated with peers using Git for version control, managing branches, commits, and pull requests in a simulated agile sprint environment; explored GitHub Actions/GitLab CI for automated build and test workflows.",
      "Followed Agile Scrum methodology: participated in stand-ups, sprint planning, and iterative delivery of feature modules.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tag: string;
  tech: string[];
  description: string;
  features: string[];
  repoUrl?: string;
  visual: "db" | "terminal";
};

export const projects: Project[] = [
  {
    id: "expense-tracker",
    name: "Personal Expense Tracker",
    tag: "01",
    tech: ["Java", "MySQL", "JDBC", "Docker"],
    description:
      "Desktop Java application for recording, categorizing and viewing income and daily expenses with persistent MySQL storage.",
    features: [
      "Normalized 3-table database schema — users, categories, transactions",
      "Parameterized SQL queries via JDBC to prevent SQL injection",
      "DAO pattern separating business logic from data access",
      "OOP architecture built for maintainability and testability",
      "Containerized with Docker for consistent local setup and portability",
    ],
    visual: "db",
  },
  {
    id: "student-management",
    name: "Student Management System",
    tag: "02",
    tech: ["Java", "MySQL"],
    description: "Console-based system for managing student academic records.",
    features: [
      "Add, update, delete and search students by roll number or name",
      "Custom exception classes for duplicate entries and record-not-found cases",
      "Foreign key relationships enforcing referential integrity",
      "Improved error traceability through structured exception handling",
    ],
    visual: "terminal",
  },
];

export const certifications = [
  {
    name: "Java Programming Certification",
    topics: "Core Java, OOP, Collections, Exception Handling",
  },
  {
    name: "SQL & Database Fundamentals",
    topics: "Relational databases, Normalization, Query Optimization",
  },
  {
    name: "AWS Cloud Fundamentals",
    topics: "EC2, S3, IAM, Cloud architecture basics",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  institution: "BGS Institute of Technology, Bangalore",
  period: "June 2026",
  cgpa: "7.9 / 10",
  coursework: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Software Engineering"],
};

export const pipelineStages = [
  { id: "code", label: "Java Code", detail: "Writing modular, OOP-driven Java with JDBC data access." },
  { id: "git", label: "Git", detail: "Version control — branches, commits, and pull requests." },
  { id: "github", label: "GitHub", detail: "Central repository for review and collaboration." },
  { id: "cicd", label: "CI/CD", detail: "Automated build and test workflows in GitHub Actions & GitLab CI." },
  { id: "docker", label: "Docker", detail: "Containerizing the app for consistent environments." },
  { id: "aws", label: "AWS", detail: "Cloud fundamentals — EC2, S3, IAM." },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
