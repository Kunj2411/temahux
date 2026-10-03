export type Level = "Beginner" | "Intermediate" | "Advanced";

export type ClassItem = {
  slug: string;
  title: string;
  category: string;
  level: Level;
  duration: string;
  description: string;
  outcomes: string[];
  modules: { title: string; summary: string }[];
  skills: string[];
  audience: string[];
};

export type ProgramItem = {
  slug: string;
  title: string;
  tagline: string;
  focus: string[];
  level: Level;
  description: string;
  outcomes: string[];
  category: string;
  shortDescription: string;
  imageUrl?: string;
  price: number;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  duration?: string;
  skills: string[];
  projectSlugs: string[];
  tools: string[];
  roadmapSlug?: string;
  modules?: { title: string; description: string }[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  difficulty: Level;
  description: string;
  skills: string[];
};

export type RoadmapItem = {
  slug: string;
  title: string;
  steps: string[];
  stepDescriptions?: string[];
  description: string;
  category: string;
  level: Level;
  imageUrl?: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  programSlugs: string[];
  classSlugs: string[];
  projectSlugs: string[];
  skills: string[];
  tools: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
};

export const classes: ClassItem[] = [
  {
    slug: "stem",
    title: "STEM Foundations",
    category: "Early STEM",
    level: "Beginner",
    duration: "8 weeks",
    description: "Hands-on exploration across science, math, engineering, and creative problem solving.",
    outcomes: ["Build experimental thinking", "Visualize systems", "Solve practical challenges"],
    modules: [
      { title: "Observation and measurement", summary: "Learning how to test ideas with evidence." },
      { title: "Simple machines and motion", summary: "Exploring force, motion, and mechanics." },
      { title: "Design challenge", summary: "Building a working solution from a problem prompt." }
    ],
    skills: ["Critical thinking", "Experiment design", "Data interpretation"],
    audience: ["Age 8-12", "Beginners", "Young explorers"]
  },
  {
    slug: "python",
    title: "Python",
    category: "Coding",
    level: "Beginner",
    duration: "10 weeks",
    description: "Learn the fundamentals of programming through project-based logic, automation, and data work.",
    outcomes: ["Write clean Python programs", "Use functions and loops", "Solve logic-based problems"],
    modules: [
      { title: "Syntax and flow", summary: "Variables, conditions, and repetition." },
      { title: "Functions and logic", summary: "Reusable code that solves real tasks." },
      { title: "Mini projects", summary: "Building small apps and tools from scratch." }
    ],
    skills: ["Python", "Problem solving", "Automation"],
    audience: ["New coders", "School learners", "Aspiring developers"]
  },
  {
    slug: "robotics",
    title: "Robotics Foundations",
    category: "Robotics",
    level: "Intermediate",
    duration: "12 weeks",
    description: "Combine hardware, coding, sensors, and iterative design to build smart machines.",
    outcomes: ["Build robots with sensors", "Program movement and control", "Test and refine prototypes"],
    modules: [
      { title: "Inputs and outputs", summary: "Understanding sensors, motors, and logic." },
      { title: "Movement systems", summary: "Designing locomotion and robotic behaviors." },
      { title: "Challenge build", summary: "Developing a complete robot prototype." }
    ],
    skills: ["Electronics", "Robotics", "Systems thinking"],
    audience: ["STEM learners", "Builders", "Intermediate coders"]
  },
  {
    slug: "artificial-intelligence",
    title: "AI Foundations",
    category: "AI",
    level: "Intermediate",
    duration: "12 weeks",
    description: "Understand how modern AI systems work and build ethical, practical AI experiences.",
    outcomes: ["Understand AI pipelines", "Train and evaluate models", "Use AI responsibly"],
    modules: [
      { title: "AI concepts", summary: "Models, data, predictions, and reasoning." },
      { title: "Hands-on ML", summary: "Classifying and learning from real datasets." },
      { title: "Human-centered AI", summary: "Fairness, transparency, and limitations." }
    ],
    skills: ["AI literacy", "Prompting", "Model evaluation"],
    audience: ["Curious learners", "Builders", "Future AI creators"]
  },
  {
    slug: "ar-vr",
    title: "AR / VR Creator",
    category: "AR / VR",
    level: "Intermediate",
    duration: "10 weeks",
    description: "Create immersive experiences using spatial design, 3D thinking, and interactive worlds.",
    outcomes: ["Design immersive scenes", "Build basic 3D experiences", "Prototype interactive environments"],
    modules: [
      { title: "Spatial thinking", summary: "Designing digital space and interaction." },
      { title: "3D concepts", summary: "Movement, scale, and object composition." },
      { title: "Interactive world", summary: "Creating an AR or VR experience." }
    ],
    skills: ["3D design", "Interactive systems", "Immersive storytelling"],
    audience: ["Creative technologists", "Game and UX learners", "Makers"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Technology",
    level: "Intermediate",
    duration: "14 weeks",
    description: "Design, build, and launch responsive products using modern front-end and full-stack tools.",
    outcomes: ["Build responsive interfaces", "Form product thinking", "Ship a project end-to-end"],
    modules: [
      { title: "Front-end foundations", summary: "HTML, CSS, layout, and interactions." },
      { title: "JavaScript systems", summary: "Logic, data flow, and browser APIs." },
      { title: "Product build", summary: "Designing and shipping a polished experience." }
    ],
    skills: ["HTML/CSS", "JavaScript", "Frontend architecture"],
    audience: ["Designers", "Developers", "Career switchers"]
  }
];

export const programs: ProgramItem[] = [
  {
    slug: "stem-explorer",
    title: "STEM Explorer",
    tagline: "Science + mathematics + engineering + creativity",
    focus: ["Science", "Math", "Engineering", "Creativity"],
    level: "Beginner",
    description: "A broad STEM journey for curious students who enjoy experiments, reasoning, and building.",
    outcomes: ["Develop scientific thinking", "Solve open-ended challenges", "Apply math in real life"],
    category: "STEM",
    shortDescription: "Science, mathematics, engineering, and creativity in one exploratory path.",
    price: 49,
    featured: false,
    published: true,
    displayOrder: 1,
    skills: ["Scientific thinking", "Problem solving", "Engineering"],
    projectSlugs: ["science-lab"],
    tools: [],
    roadmapSlug: "stem-explorer",
  },
  {
    slug: "young-coder",
    title: "Young Coder",
    tagline: "Programming foundations for building confidence",
    focus: ["Python", "Logic", "Problem solving", "Projects"],
    level: "Beginner",
    description: "A structured intro to coding that moves from fundamentals to small real-world builds.",
    outcomes: ["Understand logic and loops", "Write small programs", "Create simple apps"],
    category: "Coding",
    shortDescription: "Programming foundations for building confidence through projects.",
    price: 49,
    featured: false,
    published: true,
    displayOrder: 2,
    skills: ["Python", "Logic", "Problem solving", "Projects"],
    projectSlugs: ["mini-web-crawler"],
    tools: [],
    roadmapSlug: "python-developer",
  },
  {
    slug: "robotics-builder",
    title: "Robotics Builder",
    tagline: "Electronics + robotics + automation",
    focus: ["Arduino", "Sensors", "Movement", "Automation"],
    level: "Intermediate",
    description: "Design, build, and iterate on robots that sense and respond to the world.",
    outcomes: ["Build robotics systems", "Program control loops", "Prototype automation"],
    category: "Robotics",
    shortDescription: "Electronics, robotics, and automation through iterative builds.",
    price: 49,
    featured: false,
    published: true,
    displayOrder: 3,
    skills: ["Arduino", "Sensors", "Movement", "Automation"],
    projectSlugs: ["robot-arm"],
    tools: [],
    roadmapSlug: "robotics-engineer",
  },
  {
    slug: "ai-explorer",
    title: "AI Explorer",
    tagline: "AI + ML + generative AI + responsible use",
    focus: ["Machine Learning", "GenAI", "Model thinking", "Ethics"],
    level: "Intermediate",
    description: "A future-ready path into AI systems, reasoning, and practical idea generation.",
    outcomes: ["Recognize AI patterns", "Use AI for projects", "Evaluate outcomes critically"],
    category: "AI",
    shortDescription: "AI, machine learning, generative AI, and responsible use.",
    price: 49,
    featured: false,
    published: true,
    displayOrder: 4,
    skills: ["Machine Learning", "Generative AI", "Model thinking", "Ethics"],
    projectSlugs: ["ai-chatbot"],
    tools: [],
    roadmapSlug: "ai-engineer",
  },
  {
    slug: "future-engineer",
    title: "Future Engineer",
    tagline: "Coding + AI + robotics + projects",
    focus: ["Engineering", "AI", "Robotics", "Product design"],
    level: "Intermediate",
    description: "Create a systems mindset through engineering, coding, and applied technology projects.",
    outcomes: ["Think like an engineer", "Build integrated systems", "Move from ideas to prototypes"],
    category: "Technology",
    shortDescription: "Connect coding, AI, robotics, and product design in applied builds.",
    price: 49,
    featured: true,
    published: true,
    displayOrder: 0,
    skills: ["Engineering", "AI", "Robotics", "Product design"],
    projectSlugs: ["robot-arm", "ai-chatbot"],
    tools: [],
    roadmapSlug: "ai-engineer",
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    tagline: "Frontend + backend + database + deployment",
    focus: ["Web", "APIs", "Databases", "Deployment"],
    level: "Advanced",
    description: "Prepare for modern product development with end-to-end engineering skills.",
    outcomes: ["Ship full applications", "Work across layers", "Build product-ready software"],
    category: "Technology",
    shortDescription: "Frontend, backend, databases, and deployment in one product pathway.",
    price: 49,
    featured: false,
    published: true,
    displayOrder: 6,
    skills: ["Frontend", "APIs", "Databases", "Deployment"],
    projectSlugs: ["mini-web-crawler"],
    tools: [],
    roadmapSlug: "full-stack-developer",
  }
];

export const projects: ProjectItem[] = [
  {
    slug: "mini-web-crawler",
    title: "Mini Web Crawler",
    category: "Web",
    difficulty: "Intermediate",
    description: "Build a small crawler that fetches pages and summarizes structure, links, and patterns.",
    skills: ["HTTP", "Parsing", "JavaScript"]
  },
  {
    slug: "ai-chatbot",
    title: "AI Idea Assistant",
    category: "AI",
    difficulty: "Intermediate",
    description: "Design a smart assistant that turns rough prompts into structured project plans.",
    skills: ["Prompting", "Model use", "UX design"]
  },
  {
    slug: "robot-arm",
    title: "Robot Arm Challenge",
    category: "Robotics",
    difficulty: "Advanced",
    description: "Create a programmable movement system using sensors, logic, and iterative prototyping.",
    skills: ["Electronics", "Automation", "Testing"]
  },
  {
    slug: "science-lab",
    title: "STEM Lab Builder",
    category: "STEM",
    difficulty: "Beginner",
    description: "Model and test a small experiment that measures a real-world physical behavior.",
    skills: ["Experiment design", "Data graphs", "Observation"]
  },
  {
    slug: "immersive-scene",
    title: "Immersive Scene",
    category: "AR/VR",
    difficulty: "Intermediate",
    description: "Prototype a digital environment with layered interaction, motion, and storytelling.",
    skills: ["3D thinking", "Interaction design", "Spatial UI"]
  }
];

export const roadmaps: RoadmapItem[] = [
  {
    slug: "python-developer",
    title: "Python Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Move from programming fundamentals toward confident Python projects and deeper development skills.",
    category: "Coding",
    level: "Beginner",
    featured: true,
    published: true,
    displayOrder: 1,
    programSlugs: ["young-coder"],
    classSlugs: ["python"],
    projectSlugs: ["mini-web-crawler"],
    skills: ["Python", "Logic", "Functions", "Problem solving"],
    tools: [],
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Build from web fundamentals toward responsive interfaces and complete product projects.",
    category: "Technology",
    level: "Intermediate",
    featured: true,
    published: true,
    displayOrder: 2,
    programSlugs: ["full-stack-developer"],
    classSlugs: ["web-development"],
    projectSlugs: ["mini-web-crawler"],
    skills: ["HTML/CSS", "JavaScript", "Frontend architecture"],
    tools: [],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Develop a foundation in AI systems, practice evaluating outcomes, and apply your skills in projects.",
    category: "AI",
    level: "Intermediate",
    featured: true,
    published: true,
    displayOrder: 3,
    programSlugs: ["ai-explorer", "future-engineer"],
    classSlugs: ["artificial-intelligence", "python"],
    projectSlugs: ["ai-chatbot"],
    skills: ["AI literacy", "Machine learning", "Model evaluation", "Python"],
    tools: [],
  },
  {
    slug: "robotics-engineer",
    title: "Robotics Engineer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Connect STEM foundations with robotics, sensors, control, and iterative engineering projects.",
    category: "Robotics",
    level: "Intermediate",
    featured: true,
    published: true,
    displayOrder: 4,
    programSlugs: ["robotics-builder", "stem-explorer"],
    classSlugs: ["robotics", "stem"],
    projectSlugs: ["robot-arm", "science-lab"],
    skills: ["Electronics", "Robotics", "Systems thinking", "Experiment design"],
    tools: [],
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Trace a path from responsive web foundations through application structure and end-to-end product thinking.",
    category: "Technology",
    level: "Advanced",
    featured: false,
    published: true,
    displayOrder: 5,
    programSlugs: ["full-stack-developer"],
    classSlugs: ["web-development"],
    projectSlugs: ["mini-web-crawler"],
    skills: ["Frontend", "APIs", "Databases", "Deployment"],
    tools: [],
  },
  {
    slug: "machine-learning-engineer",
    title: "ML Engineer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Explore data, model behavior, evaluation, and responsible machine learning projects.",
    category: "AI",
    level: "Intermediate",
    featured: false,
    published: true,
    displayOrder: 6,
    programSlugs: ["ai-explorer"],
    classSlugs: ["artificial-intelligence", "python"],
    projectSlugs: ["ai-chatbot"],
    skills: ["Python", "Data", "Model evaluation", "Responsible AI"],
    tools: [],
  },
  {
    slug: "ar-vr-developer",
    title: "AR / VR Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Move from spatial design and 3D concepts toward interactive immersive experiences.",
    category: "AR / VR",
    level: "Intermediate",
    featured: false,
    published: true,
    displayOrder: 7,
    programSlugs: [],
    classSlugs: ["ar-vr"],
    projectSlugs: ["immersive-scene"],
    skills: ["3D design", "Spatial interaction", "Immersive storytelling"],
    tools: [],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Build from observation and measurement toward data interpretation and evidence-based projects.",
    category: "Data",
    level: "Intermediate",
    featured: false,
    published: true,
    displayOrder: 8,
    programSlugs: ["stem-explorer", "young-coder"],
    classSlugs: ["stem", "python"],
    projectSlugs: ["science-lab"],
    skills: ["Data interpretation", "Experiment design", "Python"],
    tools: [],
  },
  {
    slug: "game-developer",
    title: "Game Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Explore interactive systems, spatial thinking, and creative technology through small game-like builds.",
    category: "Creative Technology",
    level: "Intermediate",
    featured: false,
    published: true,
    displayOrder: 9,
    programSlugs: [],
    classSlugs: ["ar-vr", "web-development"],
    projectSlugs: ["immersive-scene"],
    skills: ["Interactive systems", "3D thinking", "Creative problem solving"],
    tools: [],
  },
  {
    slug: "iot-developer",
    title: "IoT Developer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Connect physical inputs, control logic, and automation through sensor-led engineering projects.",
    category: "Robotics",
    level: "Intermediate",
    featured: false,
    published: true,
    displayOrder: 10,
    programSlugs: ["robotics-builder"],
    classSlugs: ["robotics", "python"],
    projectSlugs: ["robot-arm"],
    skills: ["Sensors", "Automation", "Systems thinking"],
    tools: [],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Develop a foundation in secure thinking, digital systems, and responsible technology practice.",
    category: "Technology",
    level: "Beginner",
    featured: false,
    published: true,
    displayOrder: 11,
    programSlugs: ["full-stack-developer"],
    classSlugs: ["web-development", "python"],
    projectSlugs: [],
    skills: ["Systems thinking", "Web fundamentals", "Responsible practice"],
    tools: [],
  },
  {
    slug: "stem-explorer",
    title: "STEM Explorer",
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    description: "Explore science, mathematics, and engineering through observation, experiments, and creative problem solving.",
    category: "STEM",
    level: "Beginner",
    featured: false,
    published: true,
    displayOrder: 12,
    programSlugs: ["stem-explorer"],
    classSlugs: ["stem"],
    projectSlugs: ["science-lab"],
    skills: ["Critical thinking", "Experiment design", "Data interpretation"],
    tools: [],
  }
];

export const blogPosts: BlogPost[] = [
  { slug: "learning-by-building", title: "Learning by Building", category: "Learning", excerpt: "A practical look at how projects accelerate understanding and confidence.", readTime: "4 min read" },
  { slug: "ai-literacy-for-students", title: "AI Literacy for Students", category: "AI", excerpt: "Why foundational AI thinking matters before students reach advanced tools.", readTime: "6 min read" },
  { slug: "designing-robotics-projects", title: "Designing Robotics Projects", category: "Robotics", excerpt: "How to structure robot builds that encourage iteration and creativity.", readTime: "5 min read" },
  { slug: "building-immersive-experiences", title: "Building Immersive Experiences", category: "AR/VR", excerpt: "The creative systems behind memorable digital spaces and interactions.", readTime: "7 min read" }
];

export const faqItems = [
  { question: "What age groups does TEMAHUX support?", answer: "TEMAHUX offers pathways for young learners, school-age students, and adults seeking skill-building and career-focused learning." },
  { question: "Do I need prior experience?", answer: "Many programs start from the fundamentals and are designed to be accessible to beginners while scaling for more advanced learners." },
  { question: "Are projects included?", answer: "Yes. Most learning tracks emphasize hands-on projects that connect concepts to applications, portfolios, and problem solving." },
  { question: "Do I need to use a specific tech stack?", answer: "The learning journeys are intentionally flexible, focusing on fundamentals and practical project thinking before tool-specific depth." }
];

export const resources = [
  "Tutorials",
  "Notes",
  "Cheat Sheets",
  "Roadmaps",
  "Project Ideas",
  "Interview Questions",
  "Coding Resources",
  "STEM Activities",
  "AI Resources",
  "Robotics Resources",
  "AR/VR Resources"
];

export const navItems = [
  { label: "Classes", href: "/academy/classes" },
  { label: "Programs", href: "/academy/programs" },
  { label: "Learning", href: "/academy/learning" },
  { label: "Practice", href: "/academy/practice" },
  { label: "Projects", href: "/academy/projects" },
  { label: "STEM", href: "/academy/stem" },
  { label: "AI", href: "/academy/ai" },
  { label: "Resources", href: "/academy/resources" },
  { label: "Career", href: "/academy/career" },
  { label: "About", href: "/academy/about" },
  { label: "Start Free", href: "/academy/signup" }
];
