module.exports = {
  siteTitle: 'Norman Leung',
  siteDescription:
    'Norman Leung, A seasoned Senior Front-End Engineer with over nine years of hands-on experience in building and scaling web applications.',
  siteKeywords:
    'Norman Leung, Specializing in React.js, Redux, Next.js, React Native, and Node, Norman combines a deep understanding of web technologies with a passion for delivering user-centric solutions in a remote work environment.',
  siteUrl: 'https://tyrianparker-portfolio.web.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Norman Leung',
  email: 'leungnorman2@gmail.com',
  github: 'leungnorman2@gmail.com',
  socialMedia: [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/leungnorman',
    // },
    // {
    //   name: 'Linkedin',
    //   url: '',
    // },
    {
      name: 'email',
      url: 'mailto:leungnorman2@gmail.com',
    },
    {
      name: 'Phone',
      url: 'tel:12097820045',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    // {
    //   name: 'Posts',
    //   url: '/#posts',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
