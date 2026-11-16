// All site content lives here. Edit this file to update the portfolio.
// Leave a link as '' to hide its button (e.g. LinkedIn, repo, demo).
export const profile = {
  name: 'Leon Muyambo',
  title: 'Software Developer | Full-Stack & Mobile Development',
  intro: [
    'I am an emerging software developer with a strong interest in building practical, scalable and user-focused software solutions. My experience spans full-stack web development, backend architecture, Android application development, database design and API integration.',
    'I enjoy solving problems through technology, collaborating with development teams and continuously expanding my technical capabilities.',
  ],
  about: [
    'I am currently pursuing a Bachelor of Computer and Information Science and Application Development at IIE MSA in Roodepoort. I previously completed a Higher Certificate in Mobile Application and Web Development at IIE MSA.',
    'My technical journey has given me exposure to software engineering, mobile development, web technologies, backend systems, databases, UI/UX design and cybersecurity fundamentals.',
    'Through academic, collaborative and client-based projects, I have developed practical experience with modern development technologies, managing GitHub repositories, implementing application features and contributing to software architecture.',
    'I am interested in opportunities that let me contribute to real-world software projects, learn from experienced developers and grow as a software engineering professional.',
  ],
  email: 'leonmuyambo@gmail.com',
  location: 'South Africa',
  github: 'https://github.com/MuyamboLeon',
  linkedin: 'https://www.linkedin.com/in/leon-muyambo-51b9ba351',
  cv: 'assets/Leon_Muyambo_CV.pdf',
}

export const skills = [
  { group: 'Programming languages', items: ['Java', 'C#', 'Kotlin', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { group: 'Frameworks and technologies', items: ['ASP.NET Core', 'Node.js', 'Express.js', 'React', 'Jetpack Compose', 'React Native'] },
  { group: 'Databases', items: ['Microsoft SQL Server', 'SQLite', 'Firebase Realtime Database', 'Room Database', 'SQL / NoSQL'] },
  { group: 'Tools and platforms', items: ['Git', 'GitHub', 'Docker', 'Android Studio', 'Visual Studio', 'REST APIs'] },
  { group: 'Professional skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management', 'Agile Teamwork'] },
]

export type Project = {
  name: string; role: string; tech: string[]; description: string
  contributions: string[]; featured?: boolean; repo?: string; demo?: string; shot?: string; phone?: boolean
}

export const projects: Project[] = [
  { name: 'HustleHub+', repo: 'https://github.com/EMGPRS/insy7314-2026-insy7314-poe-classroom-HustleHubProject', shot: 'assets/img/hustlehub.webp', role: 'Group Leader & Backend Architect', featured: true,
    tech: ['Node.js', 'Express.js', 'JWT', 'GitHub'],
    description: 'A collaborative gig marketplace application designed to connect clients with freelancers.',
    contributions: ['Built the backend foundation with an Express API, HTTPS and environment configuration.', 'Implemented a health endpoint and fixed the JWT role-claim implementation.', 'Managed repository administration, using feature branches and pull requests to coordinate the team.'] },
  { name: 'RoadWatch SA', repo: 'https://github.com/EMGPRS/prog7314-2026-poe-part-2-RoadWatchSouthAfrica2', shot: 'assets/img/roadwatch.webp', phone: true, role: 'Group Leader, SSO & UI Developer', featured: true,
    tech: ['Kotlin', 'Jetpack Compose', 'Ktor', 'Firebase'],
    description: 'A smart commuting and safety-focused mobile application designed around South African commuters.',
    contributions: ['Implemented Google Sign-In plus registration, login and sign-out, integrated with a Ktor REST API.', 'Improved the interface to align with the prototype, working on a dedicated Git branch.', 'Coordinated project leadership and the demonstration video.'] },
  { name: 'Smart-X IoT Mesh Ecosystem', repo: 'https://github.com/EMGPRS/prog7312-2026-poe-summative-exam-muyamboleon', shot: 'assets/img/smartx.webp', role: 'Developer', featured: true,
    tech: ['C#', '.NET 10', 'ASP.NET Core Web API', 'ASP.NET Core MVC'],
    description: 'An IoT telemetry and device-management platform demonstrating connected device monitoring and structured data management.',
    contributions: ['Developed the telemetry platform using generics, operator overloading and recursive validation.', 'Built the application in stages with meaningful GitHub commits and project documentation.'] },
  { name: 'ShantiDrive Portal', repo: 'https://github.com/EMGPRS/insy7315-2026-task-2-ShantiflairDrive', shot: 'assets/img/shantidrive.webp', role: 'Backend Developer', featured: true,
    tech: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Firebase Auth', 'JWT'],
    description: 'A driving school administration portal supporting administrative operations and student-related workflows.',
    contributions: ['Designed a 17-table normalised database and developed UML diagrams.', 'Contributed to the system architecture and Firebase authentication with JWT integration.', 'Documented the Git branching strategy and deployed to MonsterASP.NET using Web Deploy.'] },
  { name: 'Optometry Practice Management System', role: 'Front-End Developer',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A client-based project developed to support an optometry practice.',
    contributions: ['Developed the Dispensing Studio interface and a printable A4 prescription sheet.', 'Implemented OD/OS power grids, lens options and laboratory slip functionality.'] },
  { name: 'BudgetTracker App', role: 'Android Developer',
    tech: ['Kotlin', 'Firebase Auth', 'Realtime Database', 'Room'],
    description: 'A collaborative Android application focused on personal budget tracking.',
    contributions: ['Worked with Firebase Authentication and integrated Firebase Realtime Database with Room.', 'Collaborated using version control and GitHub.'] },
  { name: 'GLMSTechMove', role: 'Full-Stack Developer',
    tech: ['.NET 10', 'Docker', 'SQL Server', 'ASP.NET Core'],
    description: 'A containerised Web API and MVC application.',
    contributions: ['Containerised the solution with Docker Compose and SQL Server.', 'Resolved Entity Framework Core migration issues and built a custom dark-themed CSS frontend.'] },
  { name: 'ResearchMate AI', repo: 'https://github.com/Tau203/insight-weaver-ai', role: 'Developer',
    tech: ['React', 'TypeScript', 'OpenAI API'],
    description: 'An AI-powered research web application.',
    contributions: ['Developed the application with React and TypeScript and integrated the OpenAI API.', 'Created a custom presentation slide deck.'] },
]

export const experience = [
  { role: 'Painter', company: 'Shall Win, Orange Farm', period: 'November 2023 – December 2023',
    points: ['Prepared surfaces and applied finishes.', 'Conducted quality checks.', 'Collaborated with clients and project managers.', 'Followed design specifications.'] },
  { role: 'General Worker', company: 'Duncan Recycling Company, Vereeniging', period: 'November 2022 – January 2023',
    points: ['Supported different operational departments.', 'Followed company safety procedures.', 'Participated in team projects.', 'Worked towards production targets.'] },
]

export const education = [
  { title: 'Bachelor of Computer and Information Science and Application Development', school: 'IIE MSA, Roodepoort', period: 'January 2024 – Present',
    points: ['Java', 'C#', 'SQL / NoSQL', 'Mobile Application Development', 'UI/UX Design', 'Cybersecurity Fundamentals', 'Full-Stack Web Development', 'Enterprise Architecture'] },
  { title: 'Higher Certificate – Mobile Application and Web Development', school: 'IIE MSA, Roodepoort', period: 'January 2023 – December 2023',
    points: ['Android development', 'HTML, CSS and JavaScript', 'React Native', 'Flutter', 'Collaborative software development', 'Agile teamwork'] },
  { title: 'National Senior Certificate', school: 'Vaal High School', period: '2018 – 2022', points: [] },
]

export const certification = {
  title: 'Google AI Essentials Specialization', provider: 'Google / Coursera', date: '6 July 2026',
  courses: ['Introduction to AI', 'Maximize Productivity With AI Tools', 'Discover the Art of Prompting', 'Use AI Responsibly', 'Stay Ahead of the AI Curve'],
  file: 'assets/Leon_Muyambo_Google_AI_Cert.pdf',
  verify: 'https://coursera.org/verify/specialization/APG6JOWXHKY3',
}
