import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Louis Jhonny Alcius',
  title: "Hi! my name is Jhonny",
  description:
    "I'm a passionate Software Architect having 5+ years modeling and building monolithique, microservices and cloud applications. With strong knowledge on some popular web development technologies such as AWS serverless application and MVC framework application, I had the opportunity to work with the most popular programming languages such as: python, javascript, typescript, php and java. I also have experience with Static Site Generation (SSG), Incremental Site Regeneration (ISR) and Server Side Rendering (SSR) with Nextjs to quote only those.",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'alcjho',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/louis-jhonny-alcius-20807a75/',
  github: 'https://github.com/alcjho',
  // facebook: 'https://www.facebook.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'I have skills with :',
  subTitle: '',
  data: [
    {
      title: 'Cloud/Microservices Architecture',
      lottieAnimationFile: '/lottie/skills/cloud.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Experience with application development project with agile methodology'
        ),
        emoji(
          '⚡ Experience with COSMIC software estimation'
        ),
        emoji(
          '⚡ Building CI/CD pipelines'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Digital Ocean',
          iconifyTag: 'logos:digital-ocean',
        },
        {
          skillName: 'Google Cloud Platform',
          iconifyTag: 'logos:google-cloud',
        }
      ],
    },
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/data.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Knowledge on NoSQL, Oracle, MySQL/MariaDB database administration'),
        emoji('⚡ Knowledge on ETL pipelines and data storage'),
        emoji('⚡ Experience with OpenAI Large Language Modeling (LLM): generate amazon product description and find trending niche'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'OpenAi',
          iconifyTag: 'logos:openai',
        },
      ],
    },
    {
      title: 'IT infrastructure',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience with installing, configuring and managing Unix/Linux servers'),
        emoji(
          '⚡ Experience with shell/bash scripting'
        ),
        emoji(
          '⚡ Knowledge on mailservers like sendmail and postfix'
        ),
        emoji(
          '⚡ Knowledge on Cloud Networks (AWS VPC, AWS Route 53), LAN/WAN'
        ),
        emoji(
          '⚡ Experience with Windows VmWare Workstation, VirtualBox, WSL(Windows Subsystem for Linux)'
        ),
       
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Digital Ocean',
          iconifyTag: 'logos:digital-ocean',
        },
        {
          skillName: 'Linux',
          iconifyTag: 'devicon:linux',
        },
        {
          skillName: 'Bash Scripting',
          iconifyTag: 'logos:bash',
        },
        {
          skillName: 'Vmware',
          iconifyTag: 'file-icons:vmware',
        },
        {
          skillName: 'Vmware',
          iconifyTag: 'simple-icons:virtualbox',
        },
        {
          skillName: 'Apache',
          iconifyTag: 'devicon:apache-wordmark',
        },
      ]
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Software Architecture',
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '60',
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Université de Sherbrooke',
    subHeader: 'Master of Science in software engineering',
    duration: 'September 2017 - November 2020',
    desc: 'Working on my first publication in the research on early sizing of microservices with COSMIC methods.',
    descBullets: [
      'Equal sized band mechod of COSMIC for early estimation ',
      'Microservice patterns',
      'FSM patterns method to simplify mesurement'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Technical lead',
    company: 'Soumissionrenovation',
    companyLogo: '/img/icons/common/renoquotes.webp',
    date: 'July 2020 – Jun 2023',
    desc: 'Leading a team of 5 developer: 2 Backend developer, 2 Frontend developer and 1 UX/UI designer. First project was to Migrate existing legacy application to enhanced technology (NextJS) with a continuous delivery approach. I proposed new architecture, new collaboration tools and processe and I managed the entire software project to the end',
  },
  {
    role: 'Senior Backend Developer',
    company: 'Soumissionrenovation',
    companyLogo: '/img/icons/common/renoquotes.webp',
    date: 'May 2017 – Jun 2023',
    desc: 'I worked as a senior web developer to design web based admin dashboards for mulitple user roles using NextJS SSG/SSR/ISR, custom NodeJS server, react, and more.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Proactive service coordinator',
    company: 'Ericsson',
    companyLogo: '/img/icons/common/Ericsson_logo.svg.png',
    date: 'Jan 2013 - December 2015',
    desc: 'Technical lead for proactive service. Create weekly proactive report on core network by sending email alerts and realtime notification to customer. Prioritize issues and coordinate resolution with support team and project team',
  },
  {
    role: 'Telecom service engineer ',
    company: 'Ericsson',
    companyLogo: '/img/icons/common/Ericsson_logo.svg.png',
    date: 'May 2009 - Jan 2013',
    desc: 'Multimediation, multi activation : consist of writing business logic to collect data from various telecom networks and network element like mobile phones and distribute them to other systems like Billing, Data analysis and Monitoring systens',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Soumissionrenovation.ca',
    desc: 'Software development project with Nextjs 13, Javascript/Typescript, Nodejs 18, MySQL, using CI/CD tools like Jenkins and Docker for instant delivery',
    github: 'https://github.com/alcjho/portfolio',
    link: 'https://renoquotes.com'
  },
  {
    name: 'Personal portfolio',
    desc: 'Design my own portfolio with nextjs',
    github: 'https://github.com/alcjho/portfolio',
    link: 'https://jahinys.com'
  },
  {
    name: 'Web scrapping for Kijiji.ca ads',
    desc: 'Collect potential renovation leads from kijiji for callcenter agents',
    github: 'https://github.com/alcjho/kijiji_scrapper.git',
  },
  {
    name: 'Web scrapping for RBQ licence',
    desc: 'Autoqualify new contractors by Scrapping their rbq license information on government website',
    github: 'https://github.com/alcjho/rbq_scraper.git',
  },
  {
    name: 'Pacifiktransfert.com (suspended)',
    desc: 'Money transfert application build with Strapi backend and Nextjs',
    github: 'https://github.com/alcjho/pacifiktransfert.git',
  },
  {
    name: 'Rosenaturelle.com (expired)',
    desc: 'Full ecommerce website build with nodejs, express and ejs template with third party shipping and stripe payment integration',
    github: 'https://github.com/alcjho/rose_nature_elle.git',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Jhonny Alcius',
  description:
    'A Passionate Software Architect and a Full Stack Web Developer',
  author: 'Louis Jhonny Alcius',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://jahinys.conm',
  keywords: [
    'Johnny',
    'Jhonny',
    'jahinys',
    'jahiny',
    'Portfolio',
    'Software Architect portfolio ',
    'Solution Architect portfolio ',
    'Technical lead portfolio',
    'developer portfolio',
    'Louis Jhonny Alcius Portfolio',
    'Louis Johnny Portfolio',
    'Alcius Portfolio'
  ],
};
