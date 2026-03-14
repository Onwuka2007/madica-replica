const blogImages = [
  'https://cdn.prod.website-files.com/634264c2e3265c0b693ffd91/68f53b39e85df3d96962c319_Madica%20Announcement.png',
  'https://cdn.prod.website-files.com/634264c2e3265c0b693ffd91/687e76824e91528a67ee3c33_Madica%20founders.png',
  'https://cdn.prod.website-files.com/634264c2e3265c0b693ffd91/687e5108db06f4d844d9f00e_Apply%20Now!.png',
  'https://cdn.prod.website-files.com/634264c2e3265c0b693ffd91/67ab238a899594e2d8ed67bd_Press%20Release%20Banner.png',
  'https://cdn.prod.website-files.com/634264c2e3265c0b693ffd91/67fe3a25082dbf325d1e0f4b_Untitled%20design%20(2).jpg'

]

export const blogPosts = [
  {
    id: 'hypeo-ai-influencer-marketing',
    category: 'Portfolio',
    date: 'Dec 12, 2025',
    title: 'HypeoAI | AI-Powered Influencer Marketing for MENA & Sub-Saharan Africa',
    excerpt:
      'Madica invests in HypeoAI to build AI infrastructure for influencer marketing, turning creator spend into measurable ROI.',
  },
  {
    id: 'lagos-immersion-trip',
    category: 'Immersion Trips',
    date: 'Nov 17, 2025',
    title: "Scaling with Intention | Inside Madica's Lagos Immersion Trip",
    excerpt:
      "Inside Madica's Lagos Immersion: a week of learning, reflection, and connection in Africa's boldest startup arena.",
  },
  {
    id: 'madica-expands-portfolio',
    category: 'News',
    date: 'Oct 20, 2025',
    title: 'Madica Expands Portfolio With Two New AI Startups',
    excerpt:
      'Madica invests in two AI startups and partners with ABAN to expand investment flow and ecosystem networks.',
  },
  {
    id: 'venture-capital-status-quo',
    category: 'Founder Resources',
    date: 'Jun 20, 2025',
    title: "How Madica Is Challenging Africa's Venture Capital Status Quo",
    excerpt:
      "Too many African founders are shut out at the start. Here's how Madica is changing who gets backed, and how.",
  },
  {
    id: 'how-we-invest-founders-guide',
    category: 'Founder Resources',
    date: 'Jun 6, 2025',
    title: "How We Invest at Madica | A Founder's Guide",
    excerpt:
      "Curious how Madica invests? Here's what founders can expect from application to cheque and everything in between.",
  },
  {
    id: 'north-african-footprint',
    category: 'News',
    date: 'Feb 12, 2025',
    title: 'Madica Welcomes New Startups to its Investment Program',
    excerpt:
      'Pan-African VC program Madica invests in four new companies in Egypt, Morocco, Tanzania, and Tunisia.',
  },
  {
    id: 'mission-driven-metrics',
    category: 'Portfolio',
    date: 'Apr 16, 2025',
    title: 'Mission-Driven Metrics | Building with Long-Term Discipline',
    excerpt:
      'How portfolio founders are balancing growth and resilience with clearer KPI frameworks from day one.',
  },
  {
    id: 'operator-playbooks',
    category: 'Portfolio',
    date: 'Mar 26, 2025',
    title: "Operator Playbooks for Africa's Earliest Teams",
    excerpt:
      'Practical systems our founders are using to improve speed, hiring quality, and execution in small teams.',
  },
  {
    id: 'go-to-market-lessons',
    category: 'Portfolio',
    date: 'Mar 14, 2025',
    title: 'Go-to-Market Lessons from Madica Founders',
    excerpt:
      'Field notes from startup teams iterating pricing, distribution, and product in fast-changing markets.',
  },
  {
    id: 'founder-community-update',
    category: 'Portfolio',
    date: 'Mar 7, 2025',
    title: 'Madica Founder Community Update',
    excerpt:
      'Highlights from recent sessions, ecosystem partnerships, and what is coming next for portfolio companies.',
  },
].map((item, index) => ({
  ...item,
  image: blogImages[index % blogImages.length],
}))
