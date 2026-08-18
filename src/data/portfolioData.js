export const PERSONAL_INFO = {
  name: 'Jether Paul Quintana',
  firstName: 'Jether Paul',
  roles: [
    'Virtual Assistant',
    'Front End Web Developer',
    'Content Moderator & CX Specialist'
  ],
  title: 'Virtual Assistant & Front End Web Developer',
  email: 'jetherquintana@gmail.com',
  secondaryEmail: '5a2quint@gmail.com',
  location: 'Consuelo, Cantilan, Surigao del Sur, Philippines',
  timezone: 'GMT+8 (PHT)',
  status: 'Available for Virtual Assistant & Front End Roles',
  bio: "I'm a dedicated Virtual Assistant and Front End Web Developer ready to help you streamline workflows and bring your digital vision to life. I specialize in comprehensive administrative support, task & workflow automation, graphic design, and responsive, interactive frontend web development.",
  avatarUrl: '/profilepic.PNG',
  logoUrl: '/logo.svg',
  resumeUrl: 'https://drive.google.com/file/d/1ePkZheWOq0V-Q9iUp82wScjbYICtZWt5/view?usp=sharing',
  resumeEmbedUrl: 'https://drive.google.com/file/d/1ePkZheWOq0V-Q9iUp82wScjbYICtZWt5/preview',
  telegramBotToken: '8761488279:AAEFMI11n5PqVCgN9o5BO2Mza9_x70-ZfxE',
  telegramChatId: '6251843484',
  socials: {
    github: 'https://github.com/jetherpaul17',
    linkedin: 'https://www.linkedin.com/in/jethplane17/',
    instagram: 'https://www.instagram.com/jethplane17/',
    facebook: 'https://www.facebook.com/jetherpaul.quintana',
  },
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Items Moderated/Shift', value: '400+' },
    { label: 'Daily UK Tickets Resolved', value: '100+' },
    { label: 'Core Specialty', value: 'VA & Front End' },
  ]
};

export const PROJECTS = [
  {
    id: 'cinecast',
    title: 'Cinecast',
    category: 'Frontend',
    description: 'A sleek movie discovery platform built with React featuring modern UI/UX, real-time browsing, responsive design, and fluid transitions.',
    longDescription: 'Cinecast is a modern movie explorer client built to demonstrate cutting-edge frontend architecture, responsive layouts, intuitive search & filter interfaces, and fluid user interactions.',
    videoSrc: 'https://jetherquintana.vercel.app/assets/cinecast-DXkqttaO.mp4',
    imageSrc: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://movie-app-client-ebon-eta.vercel.app/',
    githubUrl: 'https://github.com/jetherpaul17',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'REST API', 'UI/UX Design'],
    featured: true,
    metrics: 'Fast 60fps animations & mobile-first UI'
  },
  {
    id: 'philbound',
    title: 'Philbound.ph',
    category: 'Frontend',
    description: 'A comprehensive Philippine real estate platform for browsing properties, searching listings, exploring details, and connecting directly with agents.',
    longDescription: 'Contributed to the frontend development, responsive design systems, property search mechanics, and agent contact workflows for a production Philippine real estate platform.',
    videoSrc: 'https://jetherquintana.vercel.app/assets/philbound-mobile2-CIT23nVr.mp4',
    imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://philbound.ph',
    githubUrl: 'https://github.com/jetherpaul17',
    tags: ['React.js', 'Tailwind CSS', 'Real Estate Tech', 'Mobile Responsive', 'Lead Gen'],
    featured: true,
    metrics: 'Multi-device responsive property directory'
  },
  {
    id: 'portfolio-static',
    title: 'Old Static Portfolio',
    category: 'Web Design',
    description: 'A clean and elegant portfolio website showcasing foundational web projects, layout mastery, and early frontend work.',
    longDescription: 'A custom portfolio demonstrating solid semantic HTML, CSS architecture, responsive typography, and design evolution.',
    videoSrc: 'https://jetherquintana.vercel.app/assets/portfolio-YJNi0CO2.mp4',
    imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    liveUrl: 'https://jetherpaul17.github.io/webportfolio/',
    githubUrl: 'https://github.com/jetherpaul17/webportfolio',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Minimalist'],
    featured: false,
    metrics: 'Lightweight static deployment'
  }
];

export const EXPERIENCES = [
  {
    id: 'exp-1',
    period: 'Oct 2020 – Dec 2025',
    role: 'Content Moderator',
    company: 'Trust & Safety Operations',
    type: 'Full-time / Shift Operations',
    description: 'Reviewed and evaluated user-generated content to ensure alignment with platform policy guidelines, consistently maintaining a safe and compliant online environment.',
    highlights: [
      'Flagged and processed an average of 400+ high-volume items per shift for further review or removal with exceptional precision.',
      'Demonstrated rigorous attention to policy nuances, safety guidelines, and turnaround times under strict SLA targets.',
      'Collaborated closely with team leads and quality assurance to enhance moderation accuracy and optimize workflow queues.'
    ],
    skills: ['Policy Enforcement', 'Content Moderation', 'Risk Mitigation', 'Quality Assurance', 'High Turnaround']
  },
  {
    id: 'exp-2',
    period: 'Sep 2025 – Nov 2025',
    role: 'Virtual Assistant',
    company: 'Client Operations (Executive Support)',
    type: 'Contract / Remote',
    description: 'Delivered comprehensive administrative support and digital collateral creation to streamline executive workflows and boost brand communication.',
    highlights: [
      'Created engaging digital graphics and social media materials to improve client brand communication.',
      'Conducted in-depth market and business research to support executive decision-making and content planning.',
      'Executed scheduling, file management, and documentation with 100% on-time delivery.'
    ],
    skills: ['Virtual Assistance', 'Executive Support', 'Social Media Graphics', 'Web Research', 'Workflow Automation']
  },
  {
    id: 'exp-3',
    period: 'Jun 2019 – Aug 2020',
    role: 'Customer Service Associate',
    company: 'International Support Services',
    type: 'Full-time / UK Operations',
    description: 'Handled 100+ daily inquiries from UK-based customers, addressing complex concerns related to billing, sales, and technical support with clarity and professionalism.',
    highlights: [
      'Maintained top-tier customer satisfaction ratings while resolving over 100 tickets/calls per day.',
      'Leveraged advanced CRM systems for precise documentation, ticket tracking, and multi-department escalation.',
      'Improved team resolution efficiency by creating standardized response templates.'
    ],
    skills: ['Customer Experience (CX)', 'CRM Software', 'Technical Troubleshooting', 'Billing Support', 'Ticket Resolution']
  },
  {
    id: 'exp-4',
    period: 'Dec 2018 – Feb 2019',
    role: 'Internship: Office Staff & IT Shadowing',
    company: 'Administrative & Technical Support',
    type: 'Internship',
    description: 'Managed office supplies and maintained official documentation to support daily operations, while shadowing senior IT staff to learn hardware and network troubleshooting.',
    highlights: [
      'Structured and digitized office documentation archives for rapid staff access.',
      'Shadowed systems and network IT staff to master hardware diagnostics, workstation setup, and OS configuration.'
    ],
    skills: ['IT Diagnostics', 'Office Administration', 'Systems Troubleshooting', 'Documentation Management']
  }
];

export const SERVICES_DATA = [
  {
    id: 'va',
    label: 'Virtual Assistance',
    tagline: 'Reliable Executive, Operational & Creative Support',
    description: 'I provide dedicated virtual assistant services to empower businesses and executives. From in-depth research, email and calendar management, and CRM maintenance to creative digital graphics, video editing, and automated workflows, I ensure seamless daily operations.',
    bulletPoints: [
      'Executive calendar, email inbox management, and daily operational support',
      'Comprehensive web research, competitor analysis, and market data synthesis',
      'Digital collateral creation: social media graphics, slide presentations, and video edits',
      'Project management, task tracking, and workflow automation in ClickUp & Trello'
    ],
    tools: [
      { name: 'ClickUp', category: 'Management', iconName: 'CheckSquare', color: '#7B68EE', level: '95%', description: 'Task hierarchy, docs & custom automation' },
      { name: 'Canva', category: 'Design & Media', iconName: 'Palette', color: '#00C4CC', level: '96%', description: 'Social media graphics, decks & brand assets' },
      { name: 'Adobe Photoshop', category: 'Design & Media', iconName: 'Image', color: '#31A8FF', level: '90%', description: 'Visual retouching, banners & graphics' },
      { name: 'CapCut', category: 'Video Editing', iconName: 'Film', color: '#00E5FF', level: '92%', description: 'Short-form video editing, reels & captions' },
      { name: 'Gemini', category: 'AI Support', iconName: 'Sparkles', color: '#4E87F8', level: '96%', description: 'Advanced AI reasoning & multimodal prompting' },
      { name: 'Google AI Studio', category: 'AI Support', iconName: 'Cpu', color: '#1A73E8', level: '94%', description: 'Prototyping & prompt engineering' },
      { name: 'ChatGPT', category: 'AI Support', iconName: 'Bot', color: '#10A37F', level: '95%', description: 'Prompting, research, drafting & copywriting' },
      { name: 'Slack', category: 'Communication', iconName: 'MessageSquare', color: '#ECB22E', level: '95%', description: 'Team messaging & channel organization' },
      { name: 'HubSpot', category: 'CRM & Marketing', iconName: 'Users', color: '#FF7A59', level: '90%', description: 'CRM pipelines & contact management' },
      { name: 'Trello', category: 'Management', iconName: 'Kanban', color: '#0052CC', level: '92%', description: 'Agile task boards & project sprints' },
      { name: 'Figma', category: 'Design & Media', iconName: 'Figma', color: '#F24E1E', level: '88%', description: 'UI mockups & wireframe collaboration' },
      { name: 'Google Workspace', category: 'Office', iconName: 'Folder', color: '#4285F4', level: '95%', description: 'Docs, Sheets, Drive, Gmail & Calendar' },
      { name: 'Microsoft Word', category: 'Office', iconName: 'FileText', color: '#2B579A', level: '96%', description: 'Professional document formatting' },
      { name: 'Microsoft Excel', category: 'Office', iconName: 'Table', color: '#217346', level: '88%', description: 'Data entry, formulas & spreadsheets' },
      { name: 'MS PowerPoint', category: 'Office', iconName: 'Presentation', color: '#D24726', level: '92%', description: 'Pitch decks & slide presentations' },
      { name: 'Upwork', category: 'Platform', iconName: 'Briefcase', color: '#14A800', level: '95%', description: 'Client communication & delivery' }
    ]
  },
  {
    id: 'frontend',
    label: 'Front End Development',
    tagline: 'Interactive, Responsive & Modern Web UIs',
    description: 'I design and build fast, responsive, and aesthetically refined frontend interfaces using modern React, Tailwind CSS, JavaScript (ES6+), and clean component architecture.',
    bulletPoints: [
      'Responsive, mobile-first layouts with tailored animations and fluid transitions',
      'Modern React component systems, hooks, and clean state management',
      'Seamless RESTful API integration, dynamic data rendering, and search filters',
      'Clean semantic code, cross-browser compatibility, and fast loading performance'
    ],
    tools: [
      { name: 'React.js', category: 'Frontend', iconName: 'Atom', color: '#61DAFB', level: '94%', description: 'Modern components, hooks & state' },
      { name: 'Tailwind CSS', category: 'Styling', iconName: 'Sparkles', color: '#06B6D4', level: '96%', description: 'Utility-first rapid UI styling' },
      { name: 'JavaScript', category: 'Languages', iconName: 'Cpu', color: '#F7DF1E', level: '92%', description: 'ES6+, async/await, DOM APIs' },
      { name: 'HTML5', category: 'Frontend', iconName: 'Code', color: '#E34F26', level: '95%', description: 'Semantic, accessible web markup' },
      { name: 'CSS3', category: 'Frontend', iconName: 'Palette', color: '#1572B6', level: '90%', description: 'Modern layouts, flexbox & grid' },
      { name: 'Vite', category: 'Build Tools', iconName: 'Zap', color: '#646CFF', level: '94%', description: 'Fast build & bundler ecosystem' },
      { name: 'Git', category: 'DevOps', iconName: 'GitBranch', color: '#F05032', level: '90%', description: 'Version control & repository management' },
      { name: 'GitHub', category: 'DevOps', iconName: 'Github', color: '#FFFFFF', level: '92%', description: 'Source code hosting & deployments' },
      { name: 'Vercel', category: 'Cloud', iconName: 'Cloud', color: '#FFFFFF', level: '90%', description: 'Production deployment & hosting' },
      { name: 'Figma', category: 'Design', iconName: 'Figma', color: '#F24E1E', level: '85%', description: 'UI mockups, design tokens & assets' },
      { name: 'Postman', category: 'DevTools', iconName: 'Send', color: '#FF6C37', level: '88%', description: 'API testing & client integration' },
      { name: 'VS Code', category: 'DevTools', iconName: 'Terminal', color: '#007ACC', level: '98%', description: 'Primary frontend coding environment' }
    ]
  },
  {
    id: 'moderation',
    label: 'Content Moderation',
    tagline: 'Trust, Safety & Policy Compliance',
    description: 'Experienced in high-volume moderation, policy enforcement, quality checks, risk identification, and maintaining safe, compliant online communities across global social platforms.',
    bulletPoints: [
      'High-volume throughput (400+ processed items per shift with minimal error rate)',
      'Deep familiarity with community guidelines, copyright, hate speech, and safety protocols',
      'Real-time incident escalation and cross-team quality calibration',
      'Resilient, focused evaluation of nuanced user-generated text, image, and video content'
    ],
    tools: [
      { name: 'Facebook Moderation', category: 'Platform', iconName: 'Facebook', color: '#1877F2', level: '98%', description: 'Meta policy enforcement' },
      { name: 'Instagram', category: 'Platform', iconName: 'Instagram', color: '#E4405F', level: '95%', description: 'Visual & story moderation' },
      { name: 'Threads', category: 'Platform', iconName: 'AtSign', color: '#FFFFFF', level: '92%', description: 'Real-time discussion filtering' },
      { name: 'Quality Auditing Tools', category: 'Internal', iconName: 'ShieldCheck', color: '#FF6B18', level: '94%', description: 'Accuracy review & metrics' }
    ]
  },
  {
    id: 'customer',
    label: 'Customer Service',
    tagline: 'Empathetic, Rapid Resolution Support',
    description: 'I deliver empathetic, efficient customer support through chat, email, and ticketing systems — ensuring clarity, high customer satisfaction (CSAT), and rapid problem resolution.',
    bulletPoints: [
      'Handled 100+ daily UK-based inquiries across technical, billing, and sales domains',
      'Mastery of CRM ticketing workflows, conversation documentation, and SLA compliance',
      'De-escalation tactics and clear, courteous, solution-oriented communication',
      'Collaborative troubleshooting with technical and billing specialist teams'
    ],
    tools: [
      { name: 'CRM & Ticketing Systems', category: 'Support', iconName: 'Headphones', color: '#FF6B18', level: '96%', description: 'Zendesk / Salesforce / Freshdesk' },
      { name: 'Live Chat Support', category: 'Support', iconName: 'MessageSquare', color: '#06B6D4', level: '95%', description: 'Instant resolution & multi-chat' },
      { name: 'Email & SLA Management', category: 'Support', iconName: 'Mail', color: '#10B981', level: '94%', description: 'Fast response & organized queues' },
      { name: 'De-escalation & CX', category: 'Communication', iconName: 'HeartHandshake', color: '#EC4899', level: '98%', description: 'Empathetic resolution methods' }
    ]
  }
];

export const RESUME_DATA = {
  driveUrl: 'https://drive.google.com/file/d/1ePkZheWOq0V-Q9iUp82wScjbYICtZWt5/view?usp=sharing',
  embedUrl: 'https://drive.google.com/file/d/1ePkZheWOq0V-Q9iUp82wScjbYICtZWt5/preview',
  fileName: 'Jether_Paul_Quintana_Resume.pdf',
  summary: 'Dedicated Virtual Assistant and Front End Web Developer with proven expertise in remote operational support, digital asset creation, high-throughput content moderation, international customer support, and modern React web development. Adept at boosting executive efficiency, managing complex workflows, and crafting responsive user interfaces.',
  education: [
    {
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      institution: 'Surigao del Sur State University (SDSSU)',
      period: 'Graduated',
      location: 'Cantilan, Surigao del Sur',
      details: 'Focused on software development, web engineering, database architecture, and network administration.'
    }
  ],
  coreCompetencies: [
    { 
      title: 'Virtual Assistance & Operations', 
      items: ['Executive Workflow & Task Management', 'AI & Prompt Engineering (Gemini, Google AI Studio, ChatGPT)', 'Project Management (ClickUp, Trello, Slack)', 'Creative Design (Canva, Photoshop, Figma)', 'Video Editing (CapCut)', 'CRM & Lead Management (HubSpot)', 'Google Workspace & MS Office Suite'] 
    },
    { 
      title: 'Front End Web Development', 
      items: ['React.js & Vite', 'JavaScript (ES6+) & DOM APIs', 'Tailwind CSS & Modern UI/UX', 'HTML5 & Responsive Layouts', 'REST API Client Integration', 'Version Control (Git & GitHub)'] 
    },
    { 
      title: 'Operations & Customer Experience', 
      items: ['High-Volume Moderation (400+/shift)', 'Policy Compliance & Risk Mitigation', 'Ticketing & CRM Systems', 'UK Customer Support (100+ daily)', 'Quality Assurance (QA)'] 
    },
  ],
  certificationsAndTraining: [
    'Virtual Assistant & Workflow Automation Excellence',
    'Meta Trust & Safety & Policy Compliance Certification',
    'Front End Web Development & React UI Engineering',
    'Advanced Customer Experience & Escalation Resolution'
  ]
};
