export const profile = {
  name: 'Zubayer Ahamed',
  firstName: 'Zubayer',
  lastName: 'Ahamed',
  title: 'Senior Software Engineer',
  specialty: 'Java & Spring Boot',
  email: 'zubayerahamed1990@gmail.com',
  phone: '+880 1748562164',
  phoneHref: 'tel:+8801748562164',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/zubayerahamed',
  linkedin: 'https://linkedin.com/in/zubayerahamed',
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: 'Enterprise application development',
    description:
      'Scalable, secure, production-grade backend systems built with Java, Spring Boot, microservices and SQL Server, MySQL or PostgreSQL.',
    icon: 'Code2',
  },
  {
    title: 'Full-stack web applications',
    description:
      'End-to-end delivery pairing robust Spring Boot backends with modern Angular, HTML and Bootstrap frontends.',
    icon: 'Layers',
  },
  {
    title: 'API design & system integration',
    description:
      'Secure REST APIs and integrations with third-party services, payment gateways, bank interfaces and cloud platforms.',
    icon: 'Cable',
  },
  {
    title: 'ERP & business automation',
    description:
      'Workflow automation, inventory, accounting, restaurant POS, food-court management and multi-tenant reporting.',
    icon: 'Workflow',
  },
  {
    title: 'Microservices & cloud deployment',
    description:
      'Distributed systems, Docker containers, Kubernetes orchestration and deployments on AWS, Azure or GCP.',
    icon: 'CloudCog',
  },
  {
    title: 'SaaS platforms',
    description:
      'Multi-tenant, subscription-based products with solid authentication, role management and data isolation.',
    icon: 'Rocket',
  },
  {
    title: 'Legacy system modernization',
    description:
      'Refactoring monoliths, improving performance, migrating to microservices and upgrading older Java/Spring systems.',
    icon: 'RefreshCcwDot',
  },
  {
    title: 'Technical consulting & system design',
    description:
      'Architecture for systems that need to scale, technical roadmaps, and help with strategic engineering decisions.',
    icon: 'Lightbulb',
  },
  {
    title: 'Code review & mentorship',
    description:
      'Raising code quality, setting coding standards, mentoring developers and applying clean architecture.',
    icon: 'GraduationCap',
  },
];

export type Skill = { name: string; logo: string };
export type SkillGroup = { category: string; skills: Skill[] };

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', logo: devicon('java/java-original.svg') },
      { name: 'Spring Boot', logo: devicon('spring/spring-original.svg') },
      { name: 'Spring MVC', logo: devicon('spring/spring-original.svg') },
      { name: 'Hibernate', logo: devicon('hibernate/hibernate-original.svg') },
      { name: 'REST API', logo: devicon('swagger/swagger-original.svg') },
      { name: 'PHP', logo: devicon('php/php-original.svg') },
      { name: 'Laravel', logo: devicon('laravel/laravel-original.svg') },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', logo: devicon('angularjs/angularjs-original.svg') },
      { name: 'HTML5', logo: devicon('html5/html5-original.svg') },
      { name: 'CSS3', logo: devicon('css3/css3-original.svg') },
      { name: 'Bootstrap', logo: devicon('bootstrap/bootstrap-original.svg') },
      { name: 'jQuery', logo: devicon('jquery/jquery-original.svg') },
    ],
  },
  {
    category: 'Mobile',
    skills: [{ name: 'Ionic', logo: devicon('ionic/ionic-original.svg') }],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', logo: devicon('postgresql/postgresql-original.svg') },
      { name: 'SQL Server', logo: devicon('microsoftsqlserver/microsoftsqlserver-plain.svg') },
      { name: 'MySQL', logo: devicon('mysql/mysql-original.svg') },
      { name: 'MongoDB', logo: devicon('mongodb/mongodb-original.svg') },
      { name: 'Redis', logo: devicon('redis/redis-original.svg') },
    ],
  },
  {
    category: 'DevOps & tools',
    skills: [
      { name: 'Docker', logo: devicon('docker/docker-original.svg') },
      { name: 'Kafka', logo: devicon('apachekafka/apachekafka-original.svg') },
      { name: 'Jenkins', logo: devicon('jenkins/jenkins-original.svg') },
      { name: 'AWS', logo: devicon('amazonwebservices/amazonwebservices-plain-wordmark.svg') },
      { name: 'Git', logo: devicon('git/git-original.svg') },
      { name: 'Maven', logo: devicon('maven/maven-original.svg') },
    ],
  },
];

export type ProjectStatus = 'Present' | 'Past' | 'Upcoming';

export type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  cover: string;
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
};

const shots = (folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/projects/${folder}/${i + 1}.png`);

type ThemedShots = { dark: string[]; light: string[] };

const themedShots = (folder: string, dark: number, light: number, ext = 'jpg'): ThemedShots => ({
  dark: Array.from({ length: dark }, (_, i) => `/projects/${folder}-dark/${i + 1}.${ext}`),
  light: Array.from({ length: light }, (_, i) => `/projects/${folder}-light/${i + 1}.${ext}`),
});

// The product I'm building now, shown above the project grid. Screenshots follow the site theme.
export const flagship = {
  title: 'Karbar24 POS',
  tagline: 'Everything your restaurant counter needs.',
  description:
    'An offline-first point-of-sale platform for food businesses, from a single counter to multi-outlet franchises. It runs on Windows desktops and Android devices, keeps billing through internet outages, and grows into a cloud setup with waiter and kitchen apps.',
  audience: ['Restaurants', 'Food courts', 'Cloud kitchens', 'Franchises', 'Small food businesses'],
  highlights: [
    {
      icon: 'offline',
      title: 'Keeps billing offline',
      body: 'Orders, receipts and payments run from a local SQLite database, so the counter never stops when the internet does.',
    },
    {
      icon: 'kitchen',
      title: 'Counter to kitchen',
      body: 'Orders go straight to the kitchen as KOTs, with a kitchen display and a waiter app for taking orders at the table.',
    },
    {
      icon: 'tables',
      title: 'Floor and table service',
      body: 'Tables by floor, table merging, dine-in, takeaway and parcel orders, waiter assignment, and held orders to recall later.',
    },
    {
      icon: 'menu',
      title: 'Menu engine',
      body: 'Variants, modifiers, bundles, prep times, and a step-by-step set-menu builder with a choice for every course.',
    },
    {
      icon: 'payment',
      title: 'Checkout that fits Bangladesh',
      body: 'Cash, card and mobile wallets like bKash and Nagad, customer dues, coupons, complimentary items, VAT, service charge and rounding.',
    },
    {
      icon: 'scale',
      title: 'Built to scale',
      body: 'Multi-tenant: one account runs several businesses, each with multiple terminals, cash-counted shifts and its own reports.',
    },
  ],
  engineering: [
    'One Angular codebase shipped as a Windows desktop app (Electron) and an Android app (Ionic)',
    'Offline-first local storage in SQLite, with a Spring Boot and PostgreSQL cloud back end',
    'Multi-tenant architecture with multi-business, multi-terminal and multi-outlet support',
    'Standalone editions from Lite to Ultra, and a Cloud edition with waiter app and kitchen display',
    'Country-specific tax and regulations as plugins, keeping the core POS unchanged',
  ],
  technologies: ['Angular', 'Ionic', 'Electron', 'Java', 'Spring Boot', 'SQLite', 'PostgreSQL'],
  desktop: themedShots('KARBAR24/desktop', 13, 13),
  mobile: themedShots('KARBAR24/mobile', 11, 13),
  desktopCaptions: [
    'POS terminal',
    'Set menu builder',
    'Table selection',
    'Merging tables',
    'Checkout and payment',
    'Customer receipt',
    'Held orders',
    'Quick settings',
    'Shift control',
    'Business selection',
    'POS terminal, compact list without images',
    'Customer dues',
    'Customer dues history',
  ],
  // Index of the POS screen in each mobile set, used as the phone preview.
  mobileCover: { dark: 0, light: 2 },
};

export const projects: Project[] = [
  {
    id: 'aspi',
    title: 'ASPI',
    kind: 'Enterprise ERP',
    description:
      'Enterprise-grade ERP on Spring Boot that brings procurement, inventory, sales and financial operations into one system.',
    cover: '/projects/ASPI/6.png',
    screenshots: shots('ASPI', 6),
    technologies: ['Java', 'Spring Boot', 'MS SQL', 'jQuery', 'Bootstrap 5', 'Crystal Reports'],
    status: 'Present',
    featured: true,
  },
  {
    id: 'lira',
    title: 'LIRA',
    kind: 'Enterprise ERP',
    description:
      'ERP platform on Spring Boot covering procurement, inventory, sales and finance for growing businesses.',
    cover: '/projects/LIRA/1.png',
    screenshots: shots('LIRA', 2),
    technologies: ['Java', 'Spring Boot', 'MS SQL', 'jQuery', 'Bootstrap 5', 'Crystal Reports'],
    status: 'Present',
    featured: true,
  },
  {
    id: 'money-manager-app',
    title: 'Money Manager App',
    kind: 'Cross-platform mobile app',
    description:
      'Personal finance app for tracking income, expenses, budgets, goals, shopping and habits, with reports and visual analytics.',
    cover: '/projects/MONEY-MANAGER-APP/1.png',
    screenshots: shots('MONEY-MANAGER-APP', 19),
    githubUrl: 'https://github.com/zubayerahamed/MONEYIO-APP.git',
    liveUrl: 'https://mm.zayaanit.com/',
    technologies: ['Angular', 'Ionic', 'Capacitor'],
    status: 'Present',
    featured: true,
  },
  {
    id: 'brihatta',
    title: 'Brihatta Art Foundation',
    kind: 'Cultural platform',
    description:
      'Website for an artist-led platform in Dhaka that runs residencies, exhibitions and community programs.',
    cover: '/projects/Brihatta/1.png',
    screenshots: shots('Brihatta', 6),
    liveUrl: 'https://brihattaartfoundation.com/',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap 5'],
    status: 'Present',
    featured: true,
  },
  {
    id: 'tasknest',
    title: 'TaskNest',
    kind: 'Team collaboration',
    description:
      'Task management platform where teams create workspaces, assign members, and plan tasks and events together.',
    cover: '/projects/TASKNEST/1.png',
    screenshots: shots('TASKNEST', 1),
    technologies: ['Java', 'Spring Boot', 'MS SQL', 'Angular', 'ECharts', 'Bootstrap 5'],
    status: 'Upcoming',
    featured: true,
  },
  {
    id: 'kit-pos',
    title: 'KIT POS',
    kind: 'Point of sale',
    description:
      'POS suite with inventory control, bill of materials, sales tracking, payments and reporting, on desktop and web.',
    cover: '/projects/KIT-POS/1.png',
    screenshots: shots('KIT-POS', 17),
    technologies: ['Java', 'Spring Boot', 'JavaFX', 'MS SQL', 'jQuery', 'Crystal Reports'],
    status: 'Past',
    featured: true,
  },
  {
    id: 'netcourier',
    title: 'NetCourier',
    kind: 'Logistics platform',
    description:
      'UK courier management system handling bookings, dispatch, driver allocation, live tracking, proof of delivery and invoicing.',
    cover: '/projects/NetCourier/1.png',
    screenshots: shots('NetCourier', 4),
    technologies: ['Java', 'Spring MVC', 'PostgreSQL', 'jQuery', 'Bootstrap 3', 'FOP'],
    status: 'Past',
    featured: true,
  },
  {
    id: 'money-manager',
    title: 'Money Manager',
    kind: 'Personal finance web app',
    description:
      'Web app for tracking income, expenses, budgets and savings goals, with clear reports and charts.',
    cover: '/projects/MM/1.png',
    screenshots: shots('MM', 10),
    githubUrl: 'https://github.com/zubayerahamed/money-manager.git',
    liveUrl: 'https://mm.zubayerahamed.com/',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap 5', 'DOMPDF'],
    status: 'Past',
    featured: false,
  },
  {
    id: 'aju-erp',
    title: 'AJU-ERP',
    kind: 'Enterprise ERP',
    description:
      'ERP for small and mid-sized businesses that unifies inventory, sales, procurement and accounting on Spring Boot and Oracle.',
    cover: '/projects/AJU-ERP/1.png',
    screenshots: shots('AJU-ERP', 5),
    technologies: ['Java', 'Spring Boot', 'Oracle', 'jQuery', 'Bootstrap 3', 'BIRT'],
    status: 'Past',
    featured: false,
  },
  {
    id: 'eldorado',
    title: 'Eldorado Holdings',
    kind: 'Real estate website',
    description:
      'Website for a Dhaka real estate developer presenting its residential projects to prospective buyers.',
    cover: '/projects/Eldorado/1.png',
    screenshots: shots('Eldorado', 6),
    liveUrl: 'https://eldoradoholdingsltd.com/home',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap 5'],
    status: 'Past',
    featured: false,
  },
  {
    id: 'bishwajit',
    title: 'Bishwajit Goswami',
    kind: 'Artist portfolio',
    description: 'Portfolio website for a renowned artist, educator and curator.',
    cover: '/projects/BISHWAJIT/1.png',
    screenshots: shots('BISHWAJIT', 5),
    liveUrl: 'https://bishwajitgoswami.com/',
    technologies: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery'],
    status: 'Past',
    featured: false,
  },
];

export type Role = {
  company: string;
  shortName: string;
  position: string;
  summary?: string;
  highlights: string[];
  start: string;
  end: string | null;
  location: string;
  technologies: string[];
  /** Titles held within this role when promoted, newest first. */
  titles?: { position: string; start: string; end: string | null }[];
};

// Newest first.
export const experience: Role[] = [
  {
    company: 'Know Why',
    shortName: 'Know Why',
    position: 'Senior Software Engineer',
    highlights: [
      'Lead end-to-end development and long-term maintenance of the Knowwhy Survey Platform and an internal server monitoring system used at enterprise scale.',
      'Architect backend services in Java and ASP.NET, with AngularJS frontends backed by MS SQL Server.',
      'Improved reliability, performance monitoring and operational visibility with custom monitoring tools.',
      'Mentor junior engineers on clean code, design patterns and scalable architecture.',
      'Work with product owners and stakeholders to turn business requirements into robust technical solutions.',
    ],
    start: '2026-01-01',
    end: null,
    location: 'Netherlands (remote)',
    technologies: ['Java', 'Spring Boot', 'SQL Server', 'MySQL', 'Angular', 'ASP.NET'],
  },
  {
    company: 'Metatude Asia Ltd',
    shortName: 'Metatude',
    position: 'Senior Software Engineer',
    summary:
      'Owned backend architecture, reliability and performance for enterprise web applications, working with cross-functional teams to ship scalable, secure solutions.',
    highlights: [
      'Built and maintained applications with secure, maintainable coding practices.',
      'Supported architecture and design discussions, bridging developers and the senior technical lead.',
      'Reviewed and refined technical specifications.',
      'Mentored developers and helped the lead coordinate development work.',
      'Took part in code reviews and shaped coding standards.',
      'Worked with QA through test cycles and supported releases.',
      'Maintained technical documentation.',
    ],
    start: '2022-02-16',
    end: '2025-12-31',
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring Boot', 'SQL Server', 'MySQL', 'Angular', 'ASP.NET'],
  },
  {
    company: 'Automation Services Ltd (ASL)',
    shortName: 'ASL',
    position: 'Programmer Analyst',
    titles: [
      { position: 'Programmer Analyst', start: '2021-10-17', end: '2022-02-16' },
      { position: 'Software Engineer', start: '2020-11-17', end: '2021-10-16' },
    ],
    summary:
      'Designed, built and maintained ERP, POS and utility systems, turning complex business requirements into stable production software.',
    highlights: [
      'Built a web-based ERP platform with Java, Spring Boot, jQuery and Oracle supporting multiple business workflows.',
      'Led architecture and development of a multi-business POS system for food courts and restaurants.',
      'Built a microservices-based SMS and email delivery system integrated with telecom and messaging APIs.',
      'Enhanced and maintained prepaid electricity metering systems for power distribution boards.',
      'Worked with QA, operations and business teams to ship on schedule with production-grade stability.',
    ],
    start: '2020-11-17',
    end: '2022-02-16',
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'Struts', 'PrimeFaces', 'jQuery', 'Bootstrap'],
  },
  {
    company: 'MF Asia Ltd (Metafour)',
    shortName: 'Metafour',
    position: 'Software Developer',
    titles: [
      { position: 'Software Developer', start: '2018-06-02', end: '2020-11-15' },
      { position: 'Software Developer Intern', start: '2017-12-02', end: '2018-06-01' },
    ],
    summary:
      'Built backend services, integrations and location features for a large-scale courier and logistics platform.',
    highlights: [
      'Implemented multi-drop delivery workflows that optimized routing and operations.',
      'Integrated Google Maps APIs for live tracking, route calculation, distance estimates and location services.',
      'Built asynchronous import/export pipelines that process large datasets without slowing the system.',
      'Integrated and maintained 8+ third-party courier APIs for unified booking, job management and tracking.',
      'Improved scalability and reliability through performance tuning and modular service design.',
    ],
    start: '2017-12-02',
    end: '2020-11-15',
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'jQuery', 'Bootstrap'],
  },
  {
    company: 'Software Industry Ltd',
    shortName: 'SIL',
    position: 'Junior Software Developer (part-time)',
    summary: 'Contributed to production web applications while gaining hands-on industry experience.',
    highlights: [
      'Built core modules of a donation management system with Spring Boot.',
      'Maintained and extended legacy PHP/CodeIgniter applications, improving stability and features.',
    ],
    start: '2017-09-01',
    end: '2017-11-14',
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    company: 'IsDB-BISEW IT Scholarship Programme',
    shortName: 'IsDB-BISEW',
    position: 'Trainee Software Developer',
    summary: 'Structured professional training in enterprise web application development.',
    highlights: [
      'Built a blended education platform with Spring Boot and AngularJS.',
      'Completed intensive training in Java, the Spring Framework, relational databases and web technologies.',
      'Delivered academic and practice projects aligned with industry standards.',
    ],
    start: '2016-05-01',
    end: '2017-09-01',
    location: 'Dhaka, Bangladesh',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'PostgreSQL', 'MySQL', 'jQuery', 'Bootstrap'],
  },
];

export type Degree = {
  level: string;
  degree: string;
  abbreviation: string;
  institution: string;
  affiliation?: string;
  department: string;
  location: string;
  completed?: string;
};

// Highest degree first; the first entry is featured.
export const education: Degree[] = [
  {
    level: "Master's degree",
    degree: 'Professional Masters in Computer Science',
    abbreviation: 'PMSCS',
    institution: 'Jahangirnagar University',
    department: 'Department of Computer Science and Engineering',
    location: 'Savar, Dhaka',
    completed: '2025',
  },
  {
    level: "Master's degree",
    degree: 'Master of Science in Mathematics',
    abbreviation: 'M.Sc.',
    institution: 'Dhaka College',
    affiliation: 'University of Dhaka',
    department: 'Department of Mathematics',
    location: 'Dhaka',
  },
  {
    level: "Bachelor's degree",
    degree: 'Bachelor of Science (Honours) in Mathematics',
    abbreviation: 'B.Sc. Hons',
    institution: 'Dhaka College',
    affiliation: 'National University',
    department: 'Department of Mathematics',
    location: 'Dhaka',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  credentialUrl?: string;
  image: string;
};

export const certifications: Certification[] = [
  {
    title: 'Oracle Certified Professional, Java SE 6 Programmer',
    issuer: 'Oracle',
    issued: '2018-04-09',
    credentialId: '1Z0-851',
    credentialUrl: 'https://www.youracclaim.com/badges/90c5100b-d459-4875-8240-fa5c1f243bc2',
    image: '/certificates/ORACLE.png',
  },
  {
    title: 'Best Performance in Java Programming',
    issuer: 'IDB-BISEW',
    issued: '2018-04-22',
    credentialId: '#1209231',
    image: '/certificates/IDB1.png',
  },
  {
    title: 'Enterprise Systems Analysis & Design with J2EE',
    issuer: 'IDB-BISEW',
    issued: '2018-04-09',
    credentialId: '#1209231',
    image: '/certificates/IDB2.png',
  },
  {
    title: 'Enterprise Systems Analysis & Design with J2EE',
    issuer: 'Daffodil Institute of IT (DIIT)',
    issued: '2017-10-04',
    credentialId: '1000835',
    image: '/certificates/DIIT.png',
  },
  {
    title: 'Web Application Development with PHP & MySQL',
    issuer: 'BASIS Institute of Technology & Management (BITM)',
    issued: '2016-08-25',
    credentialId: '128052',
    image: '/certificates/BITM.png',
  },
];

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
};

export const gallery: GalleryItem[] = [
  {
    title: 'First day at Know Why',
    description: 'First working day in the new Know Why workspace.',
    image: '/events/1.png',
    date: '2026-02-15',
    category: 'Meetups',
  },
  {
    title: 'Client meetup',
    description: 'Met with our CEO and clients to review project progress and plan what comes next.',
    image: '/events/2.jpg',
    date: '2024-05-15',
    category: 'Meetups',
  },
  {
    title: 'Team day out',
    description: 'A day out with the team to strengthen bonds and collaboration.',
    image: '/events/3.jpg',
    date: '2023-09-20',
    category: 'Team',
  },
  {
    title: 'Team celebration buffet',
    description: 'Celebrating team achievements over a buffet.',
    image: '/events/4.jpg',
    date: '2023-07-10',
    category: 'Milestones',
  },
  {
    title: 'Clean code workshop',
    description: 'An intensive workshop on writing clean, maintainable code.',
    image: '/events/5.jpeg',
    date: '2023-05-25',
    category: 'Workshops',
  },
  {
    title: 'Product launch',
    description: 'Launching a new product focused on a better user experience in web applications.',
    image: '/events/6.jpg',
    date: '2023-03-12',
    category: 'Milestones',
  },
  {
    title: 'Oracle certification',
    description: 'Earned the Oracle Certified Professional, Java SE 6 Programmer certification.',
    image: '/events/7.png',
    date: '2023-02-08',
    category: 'Milestones',
  },
  {
    title: 'Iftar gathering',
    description: 'Celebrating Ramadan with an iftar among colleagues and friends.',
    image: '/events/8.jpeg',
    date: '2022-12-15',
    category: 'Team',
  },
  {
    title: 'Metering system training',
    description: 'Led a hands-on training session on the power distribution board prepaid metering system.',
    image: '/events/9.jpeg',
    date: '2022-10-22',
    category: 'Workshops',
  },
  {
    title: 'Promoted to Programmer Analyst',
    description: 'Promoted to Programmer Analyst at Automation Services Ltd (ASL).',
    image: '/events/10.png',
    date: '2021-05-01',
    category: 'Milestones',
  },
];
