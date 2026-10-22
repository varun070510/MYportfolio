export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Data Science' | 'Web & AI';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  isPlaceholder: boolean;
  imageTheme: 'cyan' | 'violet' | 'blue';
}

export interface SkillItem {
  name: string;
  level: 'Fundamentals' | 'Intermediate' | 'Hands-on Practice';
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  institution: string;
  universityAffiliation?: string;
  degree: string;
  fieldOfStudy: string;
  timeline: string;
  academicYear?: string;
  location: string;
  status: string;
  coursework: string[];
  note: string;
}

export interface LearningTopic {
  title: string;
  category: string;
  description: string;
  progress: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface AchievementEntry {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  isPlaceholder?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Varun Jogi',
    headline: 'Exploring the Future of AI & Machine Learning',
    professionalTitle: 'AI & Machine Learning Student | Aspiring AI Engineer',
    educationShort: 'AJ Institute of Engineering and Technology, Mangaluru',
    location: 'Mangaluru, Karnataka, India',
    email: 'varun20051005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/varun-jogi-29722b43a/',
    github: 'https://github.com/varunjogi', // Editable link
    statusBadge: 'Open to Internship Opportunities',
    isOpenToWork: true,
    bio: [
      'I am an Artificial Intelligence and Machine Learning student at AJ Institute of Engineering and Technology, Mangaluru, driven by a deep fascination with how computational systems learn from data and solve complex real-world challenges.',
      'My academic focus centers on foundational machine learning concepts, algorithmic problem solving, exploratory data analysis, and software development. I enjoy writing clean, structured code and exploring how mathematical models translate into practical intelligent applications.',
      'As an aspiring AI Engineer, I am continuously broadening my understanding of modern data pipelines, predictive models, and collaborative software engineering practices, seeking opportunities to contribute meaningfully to forward-thinking technical teams.'
    ],
    pillars: [
      {
        title: 'Analytical Foundations',
        description: 'Building grounded knowledge in linear algebra, statistics, and discrete mathematics underpinning machine learning algorithms.'
      },
      {
        title: 'Data-Centric Engineering',
        description: 'Focusing on clean data preprocessing, exploratory analysis, and rigorous evaluation methodologies to extract actionable insights.'
      },
      {
        title: 'Continuous Innovation',
        description: 'Eagerly exploring modern AI advancements, emerging frameworks, and intelligent application architectures.'
      }
    ]
  },

  skillsNote: 'Note: These technical competencies represent current academic coursework, hands-on laboratory practice, and active learning areas. Easily customizable in portfolioData.ts.',

  skillCategories: [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Foundational concepts, data preprocessing, and model development pipelines',
      icon: 'Brain',
      skills: [
        { name: 'Machine Learning Fundamentals', level: 'Intermediate', featured: true },
        { name: 'Artificial Intelligence Fundamentals', level: 'Intermediate', featured: true },
        { name: 'Data Preprocessing', level: 'Hands-on Practice', featured: true },
        { name: 'Exploratory Data Analysis', level: 'Hands-on Practice', featured: true },
        { name: 'Model Evaluation & Metrics', level: 'Hands-on Practice', featured: true }
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      description: 'Core languages for algorithmic logic, computational analysis, and databases',
      icon: 'Code2',
      skills: [
        { name: 'Python', level: 'Hands-on Practice', featured: true },
        { name: 'Java', level: 'Intermediate' },
        { name: 'C', level: 'Intermediate' },
        { name: 'SQL', level: 'Hands-on Practice', featured: true }
      ]
    },
    {
      id: 'data-viz',
      title: 'Data & Visualization',
      description: 'Libraries for matrix manipulation, statistical analysis, and visual storytelling',
      icon: 'BarChart3',
      skills: [
        { name: 'NumPy', level: 'Hands-on Practice', featured: true },
        { name: 'Pandas', level: 'Hands-on Practice', featured: true },
        { name: 'Matplotlib', level: 'Hands-on Practice' },
        { name: 'Seaborn', level: 'Hands-on Practice' }
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Building accessible, responsive user interfaces and client-side interactions',
      icon: 'Globe',
      skills: [
        { name: 'HTML5', level: 'Intermediate' },
        { name: 'CSS3', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Responsive Web Design', level: 'Hands-on Practice', featured: true }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      description: 'Version control workflows, development environments, and notebooks',
      icon: 'Terminal',
      skills: [
        { name: 'Git', level: 'Hands-on Practice', featured: true },
        { name: 'GitHub', level: 'Hands-on Practice', featured: true },
        { name: 'Jupyter Notebook', level: 'Hands-on Practice', featured: true },
        { name: 'Visual Studio Code', level: 'Hands-on Practice', featured: true }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'ml-prediction-system',
      title: 'Machine Learning Prediction System',
      category: 'Machine Learning',
      description: 'A structured predictive machine learning pipeline incorporating end-to-end data ingestion, missing value imputation, feature scaling, and comparative regression/classification modeling.',
      highlights: [
        'Exploratory data analysis with statistical correlation checks',
        'Feature transformation and robust train-test evaluation splits',
        'Model performance benchmarking using precision, recall, and F1-score'
      ],
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
      githubUrl: 'https://github.com/varunjogi',
      demoUrl: '#',
      isPlaceholder: true,
      imageTheme: 'cyan'
    },
    {
      id: 'eda-dashboard',
      title: 'Exploratory Data Analysis Dashboard',
      category: 'Data Science',
      description: 'An interactive data exploration toolkit designed to analyze multi-dimensional datasets, reveal hidden patterns, visualize distribution skews, and generate actionable summary reports.',
      highlights: [
        'Automated outlier detection and univariate/multivariate distributions',
        'Dynamic heatmaps and relational scatter plots using Seaborn & Matplotlib',
        'Clean tabular exports and structured statistical summaries'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/varunjogi',
      demoUrl: '#',
      isPlaceholder: true,
      imageTheme: 'violet'
    },
    {
      id: 'ai-web-app',
      title: 'AI-Powered Web Application',
      category: 'Web & AI',
      description: 'A modern web application bridging machine learning models with a responsive, intuitive user interface. Allows users to submit custom inputs and view real-time inferenced outputs.',
      highlights: [
        'Asynchronous client-side state handling and input validation',
        'Clean responsive layout optimized for mobile and desktop screens',
        'Modular architecture facilitating seamless API model integration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'REST APIs'],
      githubUrl: 'https://github.com/varunjogi',
      demoUrl: '#',
      isPlaceholder: true,
      imageTheme: 'blue'
    }
  ] as Project[],

  education: {
    institution: 'AJ Institute of Engineering and Technology',
    universityAffiliation: 'Affiliated with Visvesvaraya Technological University (VTU)',
    degree: 'Bachelor of Engineering (B.E.)',
    fieldOfStudy: 'Artificial Intelligence and Machine Learning',
    timeline: '2024 – Present (Expected Graduation 2028)',
    academicYear: 'Undergraduate Program (Admitted 2024)',
    location: 'Mangaluru, Karnataka, India',
    status: 'Currently Enrolled / Active Student',
    coursework: [
      'Problem Solving through Programming',
      'Discrete Mathematical Structures & Linear Algebra',
      'Data Structures & Algorithms',
      'Artificial Intelligence Principles',
      'Object-Oriented Programming (Java/C++)',
      'Database Management Systems & SQL'
    ],
    note: 'Note: Timeline, graduation year, and GPA/marks can be updated in portfolioData.ts as your academic journey progresses.'
  } as EducationEntry,

  learningRoadmap: [
    {
      title: 'Deep Learning Architectures',
      category: 'Neural Networks',
      description: 'Studying multilayer perceptrons, convolutional layers for computer vision, and backpropagation optimization dynamics.',
      progress: 'In Progress'
    },
    {
      title: 'PyTorch & Modern Frameworks',
      category: 'Frameworks',
      description: 'Hands-on tensor computation, custom dataset loaders, and building end-to-end neural network models.',
      progress: 'In Progress'
    },
    {
      title: 'Natural Language Processing & LLMs',
      category: 'Generative AI',
      description: 'Exploring tokenization, attention mechanisms, vector embeddings, and API-driven generative workflows.',
      progress: 'Exploring'
    },
    {
      title: 'Scalable Software & Cloud AI',
      category: 'Engineering',
      description: 'Learning model containerization with Docker, Git collaborative workflows, and RESTful microservices.',
      progress: 'Upcoming'
    }
  ] as LearningTopic[],

  certifications: [
    {
      id: 'cert-1',
      title: 'Machine Learning / AI Foundational Course (Example)',
      issuer: 'Online Learning Platform / Academic Coursework',
      issueDate: '2024 (Placeholder)',
      credentialUrl: '#',
      isPlaceholder: true
    }
  ] as CertificationEntry[],

  achievements: [
    {
      id: 'achieve-1',
      title: 'Academic Milestone / Technical Project Participation',
      organization: 'AJ Institute of Engineering and Technology',
      date: '2024 - Present (Placeholder)',
      description: 'Ready for your hackathons, coding competition rankings, academic honors, or student club activities.',
      isPlaceholder: true
    }
  ] as AchievementEntry[],

  contactInfo: {
    email: 'varun20051005@gmail.com',
    location: 'Mangaluru, Karnataka, India',
    linkedin: 'https://www.linkedin.com/in/varun-jogi-29722b43a/',
    github: 'https://github.com/varunjogi',
    responseCommitment: 'Usually responds within 24–48 hours for academic or professional inquiries'
  }
};
