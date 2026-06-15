// ══════════════════════════════════════════════════════════════════
//  CONTENT.JS  —  Edit this file to update any text on the website
//
//  HOW TO EDIT on GitHub:
//  1. Go to your GitHub repo → open lib/content.js → click the pencil (✏) icon
//  2. Make your changes, then click "Commit changes" (green button)
//  3. Vercel auto-deploys in ~60 seconds — done!
//
//  RULES:
//  • Keep text inside the quote marks  "like this"
//  • Don't delete commas or brackets
//  • Each list item ends with a comma:  'Item one',
// ══════════════════════════════════════════════════════════════════

export const content = {

  // ── HERO ─────────────────────────────────────────────────────────
  hero: {
    // Small label above the headline
    eyebrow: 'Marketing Portfolio · 2026',

    // Main headline — each line is one word or phrase
    // italic: true = slanted  |  gold: true = gold color
    headline: [
      { text: 'Marketing',   italic: false, gold: false, delay: 0.2 },
      { text: '& Content',   italic: true,  gold: false, delay: 0.36 },
      { text: 'Specialist.', italic: false, gold: true,  delay: 0.52 },
    ],

    // Short description under the headline
    tagline: 'Building brands through\nstrategy, content, and\nmeaningful audience connections.',

    // Longer line shown under the tagline (desktop only)
    subtext: "From agency campaigns and brand activations to social media management and content production, I help businesses turn ideas into impactful marketing experiences.",

    // Scrolling ticker at the bottom of the hero
    marquee: 'MARKETING STRATEGY · CONTENT CREATION · SOCIAL MEDIA MANAGEMENT · BRAND ACTIVATIONS · ACCOUNT MANAGEMENT · EVENT MARKETING · PAID ADVERTISING · CREATIVE CAMPAIGNS · ',
  },

  // ── ABOUT ────────────────────────────────────────────────────────
  about: {
    // Big heading — "emphasis" is the part shown in gold italic.
    // It must be an exact substring of "heading" (matching text/case).
    heading: 'Creating marketing experiences that drive engagement, growth, and brand impact.',
    headingEmphasis: 'drive engagement, growth, and brand impact',

    // Bio paragraphs
    bio: [
      "I'm Tuleen Rezek, a Marketing & Content Specialist with experience across agency, startup, freelance, and corporate environments. My work spans marketing strategy, content creation, social media management, account management, and brand activations, giving me a well-rounded understanding of how successful brands grow and connect with audiences.",
      "Throughout my career, I've contributed to regional and international projects through internships at Wunderman (MENACOM Group), Digital Direction, and the Queen Rania Center for Entrepreneurship. My experience includes supporting major accounts such as AlUla Royal Commission, participating in large-scale brand activations for Ploom and Camel, and collaborating with multidisciplinary teams on strategy, content, and event execution.",
      "Alongside agency experience, I have managed marketing and social media activities for restaurants, beauty salons, hospitality businesses, and startups. From developing content strategies and planning campaigns to producing creative content and analyzing performance, I enjoy transforming ideas into marketing experiences that create measurable impact.",
    ],

    // Four stat boxes
    stats: [
      { value: '10+',  label: 'Brands Managed' },
      { value: '6',    label: 'Industries Served' },
      { value: '4+',   label: 'Years Experience' },
      { value: '75%',  label: 'Engagement Growth' },
    ],

    // Skill pills (focus areas)
    expertise: [
      'Marketing Strategy',
      'Content Marketing',
      'Social Media Management',
      'Campaign Planning',
      'Brand Activations',
      'Account Management',
      'Market Research',
      'Creative Direction',
    ],

    // Education card
    education: {
      university: 'Princess Sumaya University for Technology',
      degree:     'Bachelor of E-Marketing & Social Media',
      status:     'Graduated · 2026',
      location:   'Amman, Jordan',
    },

    // Short blurb about modeling / creative work
    creativeExperience: [
      "Alongside my marketing career, I've worked as a model for brands and creative projects in Jordan, collaborating with photographers, designers, and brands on shoots and campaigns.",
      "This experience gave me a strong understanding of visual storytelling, brand presentation, and how creative content comes together — perspective that informs my approach to content creation and campaign development today.",
    ],

    // Featured achievements list (checkmark items)
    achievements: [
      'Graduated with a Bachelor of E-Marketing & Social Media',
      'Developed a complete marketing strategy for a graduation project app (Badelha)',
      'Supported regional campaigns for AlUla Royal Commission at Wunderman',
      'Contributed to brand activations for Ploom and Camel in Jordan',
      'Gained agency-side digital marketing experience at Digital Direction',
      'Managed client accounts and operations at Tourstify',
      'Supported entrepreneurship initiatives at Queen Rania Center for Entrepreneurship',
      'Managed marketing and social media for 10+ brands across multiple industries',
    ],
  },

  // ── EXPERIENCE ───────────────────────────────────────────────────
  experience: {
    items: [
      {
        period: '2025 — Present',
        title: 'Social Media & Marketing Freelancer',
        company: '',
        description: 'Managing marketing and content activities for brands across beauty, food, hospitality, and service industries. Responsible for strategy, content planning, social media management, campaign execution, and performance monitoring.',
      },
      {
        period: '2025',
        title: 'Marketing Strategy & Content Intern',
        company: 'Wunderman (MENACOM Group)',
        description: 'Supported strategy, content, and event marketing initiatives for regional and international brands including AlUla Royal Commission, Ploom, and Camel.',
      },
      {
        period: '2025',
        title: 'Marketing Intern',
        company: 'Digital Direction',
        description: 'Contributed to digital marketing campaigns through content creation, competitor research, campaign ideation, and social media support.',
      },
      {
        period: '2025',
        title: 'Account Manager',
        company: 'Tourstify',
        description: 'Managed client relationships and coordinated between sales and operations teams to ensure smooth project delivery and client satisfaction.',
      },
      {
        period: '2024',
        title: 'Marketing & Account Management Intern',
        company: 'Queen Rania Center for Entrepreneurship',
        description: 'Supported project coordination, communication activities, and marketing initiatives within a dynamic entrepreneurial environment.',
      },
    ],
  },

  // ── SKILLS ───────────────────────────────────────────────────────
  skills: {
    // Six skill category cards
    // (Don't change icon or color — those control the visual style)
    categories: [
      {
        title: 'Marketing Strategy',
        icon: '◈', color: '#C9A96E',
        skills: ['Marketing Planning', 'Brand Positioning', 'Campaign Development', 'Consumer Insights', 'Market Research'],
      },
      {
        title: 'Content Marketing',
        icon: '◎', color: '#86C99A',
        skills: ['Content Strategy', 'Reels & Short-Form Video', 'Copywriting', 'Storytelling', 'Content Calendars'],
      },
      {
        title: 'Social Media Management',
        icon: '◉', color: '#7DA5C9',
        skills: ['Community Management', 'Audience Growth', 'Platform Management', 'Social Media Analytics', 'Trend Monitoring'],
      },
      {
        title: 'Account Management',
        icon: '⬡', color: '#D4A853',
        skills: ['Client Communication', 'Relationship Building', 'Project Coordination', 'Brief Development', 'Stakeholder Management'],
      },
      {
        title: 'Brand Activations & Events',
        icon: '◇', color: '#C9A9C9',
        skills: ['Experiential Marketing', 'Event Planning', 'Brand Activations', 'Influencer Coordination', 'Campaign Execution'],
      },
      {
        title: 'Performance Marketing',
        icon: '△', color: '#A9C9C9',
        skills: ['Meta Ads', 'Paid Campaigns', 'Performance Tracking', 'Reach Optimization', 'Budget Management'],
      },
    ],

    // Tools & Platforms pill row
    tools: [
      'Meta Business Suite',
      'Google Analytics',
      'Canva',
      'Microsoft Office',
      'CapCut',
    ],
  },

  // ── PROCESS (the 5-step section) ─────────────────────────────────
  process: {
    steps: [
      {
        number: '01', title: 'Discover', color: '#C9A96E',
        description: 'Researching the brand, audience, competitors, and market landscape to identify opportunities and challenges.',
      },
      {
        number: '02', title: 'Strategize', color: '#7DA5C9',
        description: 'Developing marketing objectives, content pillars, campaign concepts, and communication approaches aligned with business goals.',
      },
      {
        number: '03', title: 'Create', color: '#86C99A',
        description: 'Producing content, campaign assets, creative concepts, and social media materials designed to engage the target audience.',
      },
      {
        number: '04', title: 'Execute', color: '#D4A853',
        description: 'Launching campaigns, managing platforms, coordinating stakeholders, and ensuring smooth implementation across channels.',
      },
      {
        number: '05', title: 'Optimize', color: '#C9A9C9',
        description: 'Analyzing performance data, measuring results, and continuously refining strategies to maximize impact and growth.',
      },
    ],
  },

  // ── CONTACT ──────────────────────────────────────────────────────
  contact: {
    // Big reveal headline — each item is one animated line.
    // The last line is shown in gold italic.
    headline: ["Let's build", 'something', 'meaningful', 'together.'],

    // Short paragraph under the headline
    intro: "Whether you're looking to grow your brand, launch a campaign, strengthen your social media presence, or create content that connects with your audience, I'd love to hear about your project.",

    // Email shown and used for the copy button
    email: 'tuleen.rezek23@gmail.com',

    // Green availability badge — change value to update the text
    availabilityStatus: 'Available for New Opportunities',

    // Four info boxes in the availability section
    availability: [
      { label: 'Based in',     value: 'Amman, Jordan' },
      { label: 'Response',     value: 'Within 24h' },
      { label: 'Open to',      value: 'Remote Projects' },
      { label: 'Availability', value: 'Freelance & Part-time' },
    ],

    // Services list (the bullet points)
    services: [
      'Marketing Strategy',
      'Content Creation & Content Planning',
      'Social Media Management',
      'Campaign Development & Execution',
      'Brand Activations & Event Marketing',
      'Account Management',
      'Brand Storytelling',
      'Creative Direction',
    ],

    // Social links — update href to change the URL
    socials: [
      { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/tuleen-rezek-86b1b5297' },
    ],

    // Footer copyright line
    footer: '© 2026 Tuleen Rezek — All rights reserved.',
  },
};
