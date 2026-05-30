export const projects = [
  {
    id: '01',
    slug: 'cafe-beverage-brand',
    name: 'Café & Beverage Brand',
    category: 'Social Media · F&B',
    year: '2024',
    role: 'Social Media Strategy, Content Creation',
    description:
      'Built a trendy social media presence for a Jordanian café targeting Gen Z audiences. Delivered trend-based reels, seasonal product campaigns, and a consistent visual identity that drove organic reach and audience interaction.',
    fullDescription: [
      'The brand needed a fresh, youthful voice that could compete in a crowded café market. Starting from scratch, I developed a full social media strategy that positioned the café as a lifestyle destination rather than just a coffee spot.',
      'Content pillars included behind-the-scenes brewing content, seasonal menu launches, matcha and specialty drink spotlights, and culturally relevant trend adoption. Each piece was crafted to feel native to the platform while staying true to the brand identity.',
      'Reels were the primary growth driver — short, engaging videos that showcased the craft and aesthetic of the café. The consistent visual language across posts, stories, and highlights created a cohesive brand world that audiences connected with.',
    ],
    deliverables: [
      'Social Media Strategy & Content Calendar',
      'Reels Production & Editing',
      'Brand Visual Identity Guidelines',
      'Seasonal Campaign Planning',
      'Community Management',
      'Monthly Analytics Reporting',
    ],
    result: 'Higher Reach & Engagement',
    bg: 'linear-gradient(145deg, #2D1E0F 0%, #1A1108 50%, #0A0A0A 100%)',
    image: '/work-cafe.jpeg',
    accentColor: '#C9A96E',
  },
  {
    id: '02',
    slug: 'beauty-salon',
    name: 'Beauty Salon',
    category: 'Brand Identity · Beauty',
    year: '2024',
    role: 'Content Strategy, Creative Direction',
    description:
      'Strengthened the salon\'s online identity through aesthetic storytelling, beauty trend content, and reels. Elevated visual consistency across platforms and drove a measurable increase in customer inquiries.',
    fullDescription: [
      'The salon had a loyal client base but lacked a cohesive online presence that reflected the quality of their services. The goal was to translate the in-salon experience into content that attracted new customers and retained existing ones.',
      'I developed a content strategy rooted in aesthetic storytelling — soft lighting, before-and-after transformations, and trending beauty formats. Each post was designed to feel aspirational yet approachable, positioning the salon as a trusted expert in the local beauty space.',
      'The creative direction established a consistent color palette, typography, and shooting style that made every post instantly recognizable. This visual consistency built brand trust and drove a steady increase in DMs and booking inquiries.',
    ],
    deliverables: [
      'Content Strategy & Brand Voice',
      'Creative Direction & Visual Identity',
      'Reels & Short-Form Video Content',
      'Before & After Content Series',
      'Instagram & TikTok Management',
      'Influencer Collaboration Briefs',
    ],
    result: 'Increased Customer Inquiries',
    bg: 'linear-gradient(145deg, #2A1520 0%, #1A0D14 50%, #0A0A0A 100%)',
    accentColor: '#C9A9C9',
  },
  {
    id: '03',
    slug: 'restaurant-brand',
    name: 'Restaurant Brand',
    category: '360° Campaign · Food',
    year: '2023',
    role: 'Campaign Strategy, Content Creation',
    description:
      'Boosted brand awareness through creative food content, culturally relevant storytelling, and community-driven campaigns — including Ramadan promotions and seasonal food festival activations.',
    fullDescription: [
      'The restaurant needed more than just food photography — it needed campaigns that felt culturally relevant and community-driven. I approached this by anchoring content around key cultural moments: Ramadan, Eid, and local food festivals.',
      'Each campaign was built around a central creative idea that extended across stories, reels, and feed posts. The Ramadan campaign in particular drove significant engagement, combining emotional storytelling with promotional offers that felt authentic rather than salesy.',
      'User-generated content and community interaction were core to the strategy — encouraging customers to share their experiences created a feedback loop of authentic content that extended the brand\'s reach organically.',
    ],
    deliverables: [
      '360° Campaign Strategy',
      'Ramadan & Eid Campaign Execution',
      'Food Festival Activation Content',
      'Reels & Story Production',
      'UGC Strategy & Community Engagement',
      'Paid Promotion Support',
    ],
    result: 'Higher Story & Reel Interaction',
    bg: 'linear-gradient(145deg, #2A1010 0%, #1A0808 50%, #0A0A0A 100%)',
    image: '/work-restaurant.jpeg',
    video: '/work-restaurant.mp4',
    accentColor: '#C97A6E',
  },
  {
    id: '04',
    slug: 'wunderman-thompson',
    name: 'Wunderman Thompson',
    category: 'Agency · Strategy & Content',
    year: '2024',
    role: 'Strategy & Content Intern',
    description:
      'Supported regional and international accounts at MENACOM Group. Contributed to AlUla Royal Commission projects and the Sensoria Ploom launch event in Amman — working across strategy, content, and events.',
    fullDescription: [
      'As a Strategy & Content Intern at Wunderman Thompson (MENACOM Group), I was embedded in the agency\'s day-to-day workflow — contributing to live client accounts, attending briefings, and supporting the strategy and creative teams across multiple projects.',
      'One of the highlights was contributing to the AlUla Royal Commission account — working on content that promoted Saudi Arabia\'s ancient heritage destination to regional audiences. This required balancing cultural sensitivity with compelling storytelling.',
      'I also supported the Sensoria Ploom launch event in Amman — a high-profile brand activation that brought together influencers, media, and consumers. My role covered event content planning, social coverage, and post-event reporting.',
    ],
    deliverables: [
      'AlUla Royal Commission Content Support',
      'Sensoria Ploom Launch Event — Amman',
      'Social Media Content Planning',
      'Client Presentation Decks',
      'Competitive Research & Analysis',
      'Post-Campaign Reporting',
    ],
    result: 'AlUla & Ploom Campaigns',
    bg: 'linear-gradient(145deg, #0D1A2A 0%, #091219 50%, #0A0A0A 100%)',
    accentColor: '#7DA5C9',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
