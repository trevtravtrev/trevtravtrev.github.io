// gitprofile.config.js

const config = {
  github: {
    username: 'trevtravtrev', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 50, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'trevorallenwhite',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://trevorallenwhite.com',
    phone: '',
    email: 'me@trevorallenwhite.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1QcPa_kBTjH4gnKk5Os0Li1BWzY3d63UX/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C++',
    'C#',
    'Javascript',
    'HTML',
    'CSS',
    'Shell',
    'Bash',
    'SQLite',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Ford Motor Company',
      position: 'Software Engineer',
      from: 'May 2019',
      to: 'Present',
      companyLink: 'https://www.ford.com',
    },
    {
      company: 'Viral Social, LLC',
      position: 'Founder',
      from: 'October 2015',
      to: 'May 2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Autonomous Vehicle to Vehicle Communication (Pending US84517399)',
      body: 'Live audio and visual communication system between passengers in separate autonomous rideshare vehicles.',
      year: '',
      link: ''
    },
  ],
  education: [
    {
      institution: 'Wayne State University',
      degree: 'BSc Computer Science',
      from: '2015',
      to: '2018',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Ford Autonomous Delivery Vehicle',
      description:
        'Lead software engineer for ML pedestrian detection system.',
      imageUrl: 'https://www.freep.com/gcdn/presto/2021/12/13/PDTF/9b00d469-ed1f-480d-90e8-9371375d7f71-Ford_12132021_kd413.jpg?width=660&height=378&fit=crop&format=pjpg&auto=webp',
      link: 'https://www.detroitnews.com/story/business/autos/ford/2021/12/14/ford-autonomous-shuttle-deliver-food-detroit-senior-citizens/6498168001/',
    },
    {
      title: 'Ford Self-Driving Vehicle (3rd Gen)',
      description:
        'Lead software engineer for smart audio communication system.',
      imageUrl: 'https://www.cnet.com/a/img/resize/616a371712d3884e15b1cf6bb1d796eff695aedf/hub/2019/06/13/5e3f4432-62a8-416d-9cc9-d088a051f8ac/argo-ai-detroit-promo.jpg?auto=webp&width=1920',
      link: 'https://www.cnet.com/roadshow/news/argo-ai-third-generation-self-driving-development-car-detroit/',
    },
    {
      title: 'Auto Affiliate Bot',
      description:
        'Revenue generating automated Amazon Affiliate bot.',
      imageUrl: 'https://uploads-ssl.webflow.com/64642bf3ebc6b4e23c25fcd1/648809f3c87747c2969cd81b_auto%20affiliate.gif',
      link: 'https://twitter.com/cheapprr',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
