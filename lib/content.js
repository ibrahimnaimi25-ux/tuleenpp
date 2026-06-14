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
    eyebrow: 'Marketing Portfolio · 2025',

    // Main headline — each line is one word or phrase
    // italic: true = slanted  |  gold: true = gold color
    headline: [
      { text: 'Marketing',   italic: false, gold: false, delay: 0.2 },
      { text: '& Content',   italic: true,  gold: false, delay: 0.36 },
      { text: 'Specialist.', italic: false, gold: true,  delay: 0.52 },
    ],

    // Short description under the headline
    tagline: 'Helping brands create\nengaging digital experiences\nthrough strategy-driven content.',

    // Scrolling ticker at the bottom of the hero
    marquee: 'SOCIAL MEDIA STRATEGY · CONTENT CREATION · CAMPAIGN PLANNING · PAID ADVERTISING · BRAND STORYTELLING · CREATIVE MARKETING · ',
  },

  // ── ABOUT ────────────────────────────────────────────────────────
  about: {
    // Three bio paragraphs
    bio: [
      "I'm Tuleen — a digital marketing and social media strategist with hands-on experience working with Jordanian brands across food, hospitality, beauty, lifestyle, and service industries.",
      "My work combines creative storytelling with strategic marketing to help brands build stronger online identities, engage audiences, and create content people actually connect with.",
      "Through agency internships and freelance projects, I've worked on social media management, campaign planning, content creation, paid advertising, brand activations, and audience engagement strategies.",
    ],

    // Four stat boxes
    stats: [
      { value: '10+',  label: 'Brands Elevated' },
      { value: '5',    label: 'Industries Covered' },
      { value: '2+',   label: 'Years of Craft' },
      { value: '100%', label: 'Strategy-Driven' },
    ],

    // Skill pills (focus areas)
    expertise: [
      'Social Media Strategy',
      'Content Creation',
      'Campaign Planning',
      'Paid Advertising',
      'Brand Storytelling',
      'Creative Marketing',
    ],

    // Education card
    education: {
      university: 'Princess Sumaya University for Technology',
      degree:     'Bachelor of E-Marketing & Social Media',
      status:     'Graduated · 2025',
      location:   'Princess Sumaya University · Amman, Jordan',
    },
  },

  // ── SKILLS ───────────────────────────────────────────────────────
  skills: {
    // Six skill category cards
    // (Don't change icon or color — those control the visual style)
    categories: [
      {
        title: 'Social Media Strategy',
        icon: '◈', color: '#C9A96E',
        skills: ['Social Media Management', 'Platform Strategy', 'Audience Engagement', 'Content Calendars', 'Community Building'],
      },
      {
        title: 'Content Creation',
        icon: '◎', color: '#86C99A',
        skills: ['Reels Concepts', 'Caption Writing', 'Visual Storytelling', 'Trend-Based Content', 'Creative Direction'],
      },
      {
        title: 'Digital Marketing',
        icon: '◉', color: '#7DA5C9',
        skills: ['Marketing Strategy', 'Campaign Planning', 'Brand Positioning', 'Market Research', 'Audience Targeting'],
      },
      {
        title: 'Paid Advertising',
        icon: '⬡', color: '#D4A853',
        skills: ['Meta Ads', 'Sponsored Campaigns', 'Performance Monitoring', 'Reach Optimization', 'Budget Allocation'],
      },
      {
        title: 'Branding Support',
        icon: '◇', color: '#C9A9C9',
        skills: ['Tone of Voice', 'Visual Consistency', 'Launch Campaigns', 'Brand Storytelling', 'Brand Identity'],
      },
      {
        title: 'Event Marketing',
        icon: '△', color: '#A9C9C9',
        skills: ['Brand Activations', 'Experiential Marketing', 'Event Execution', 'Campaign Concepts', 'Team Collaboration'],
      },
    ],

    // Tools & Platforms pill row
    tools: [
      'Canva',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Meta Business Suite',
      'Google Analytics',
      'HubSpot',
      'Mailchimp',
    ],
  },

  // ── PROCESS (the 5-step section) ─────────────────────────────────
  process: {
    steps: [
      {
        number: '01', title: 'Research', color: '#C9A96E',
        description: 'Understanding the audience, competitors, trends, and brand positioning to build a solid strategic foundation.',
      },
      {
        number: '02', title: 'Strategy', color: '#7DA5C9',
        description: 'Building content directions and campaign ideas aligned with business goals and audience behaviour.',
      },
      {
        number: '03', title: 'Content Creation', color: '#86C99A',
        description: 'Designing visuals, creating reels concepts, writing captions, and planning the full execution timeline.',
      },
      {
        number: '04', title: 'Launch & Management', color: '#D4A853',
        description: 'Publishing content, managing campaigns, and monitoring engagement across all active platforms.',
      },
      {
        number: '05', title: 'Optimization', color: '#C9A9C9',
        description: 'Reviewing performance and refining future content based on real audience behaviour and data insights.',
      },
    ],
  },

  // ── CONTACT ──────────────────────────────────────────────────────
  contact: {
    // Email shown and used for the copy button
    email: 'tuleen.rezek23@gmail.com',

    // Green availability badge — change value to update the text
    availabilityStatus: 'Available for Work',

    // Four info boxes in the availability section
    availability: [
      { label: 'Based in',     value: 'Amman, Jordan' },
      { label: 'Response',     value: 'Within 24h' },
      { label: 'Open to',      value: 'Remote Projects' },
      { label: 'Availability', value: 'Freelance & Full-time' },
    ],

    // Services list (the bullet points)
    services: [
      'Social Media Strategy & Management',
      'Content Creation & Reels',
      'Campaign Planning & Execution',
      'Paid Advertising (Meta Ads)',
      'Brand Storytelling',
      'Creative Direction',
    ],

    // Social links — update href to change the URL
    socials: [
      { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/tuleen-rezek-86b1b5297' },
      { label: 'Instagram', href: 'https://www.instagram.com/yourusername' },
    ],

    // Footer copyright line
    footer: '© 2025 Tuleen Rezek — All rights reserved.',
  },
};
