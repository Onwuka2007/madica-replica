import { createContext, useContext, useState } from 'react'

const HomeContext = createContext(null)

const homeContent = {
  brand: 'madica',
  navItems: [
    { label: 'Program', to: '/program' },
    { label: 'Portfolio', to: '/portfoilio' },
    // { label: 'Perks', to: '/perks' },
    { label: 'Blog', to: '/blog' },
    { label: 'Community', to: '/community' },
    { label: 'About', to: '/about' },
  ],
  headerCta: { label: 'Apply now', to: '/apply' },
  hero: {
    title: 'We back exceptional early-stage ventures that are made in Africa',
    description:
      'Madica is a structured investment program for pre-seed stage companies in Africa. Madica aims to empower mission-driven founders by democratizing access to world-class company building support, which is available today only to a few well-networked entrepreneurs.',
    learnMore: { label: 'Learn more', href: '#' },
    artworkAlt: 'Abstract geometric banner',
  },
  whyMadica: {
    eyebrow: 'WHY MADICA',
    title: 'World-class venture building support for',
    description:
      'Madica will inspire and empower mission-driven founders with access to world-class support, mentorship, resources and networks throughout their startup journey.',
    cta: { label: 'Apply now', href: '/' },
  },
  programBenefits: {
    cards: [
      { title: 'Capital' },
      { title: 'Community' },
      { title: 'Curriculum' },
    ],
    summary: 'Learn more about the program and other benefits',
    cta: { label: 'See program overview', href: '/' },
  },
  mentorship: {
    title: 'Access world-class mentorship throughout your journey',
    learnMore: { label: 'Learn more about us', href: '/' },
    mentorsLabel: 'MENTORS',
    teamLabel: 'TEAM',
  },
  portfolio: {
    title: 'Our Portfolio of mission-driven founders',
    description:
      'Our entrepreneurs are scaling new ideas, technologies, and business models across a number of frontier themes.',
    viewAll: { label: 'View all', href: '/portfoilio' },
  },
  faq: {
    title: 'FAQs',
    explore: { label: 'Explore more FAQs', href: '/' },
    items: [
      {
        question: 'What is Madica',
        answer:
          'Madica is a structured pre-seed investment program for early-stage startups in Africa, pairing capital with long-term venture-building support.',
      },
      {
        question: 'What is the vision behind Madica?',
        answer:
          'The vision is to democratize access to world-class support for mission-driven founders, regardless of geography or existing network access.',
      },
      {
        question: 'What does the Madica program entail?',
        answer:
          'Founders receive financing, tailored curriculum support, mentorship from operators and investors, and strategic guidance from the Madica team.',
      },
      {
        question: 'Do you have a cohort program?',
        answer:
          'Madica supports founders through a structured model, but support is tailored to each company stage and priorities instead of a one-size-fits-all path.',
      },
      {
        question: 'What do you look for in the startups you invest in?',
        answer:
          'We look for exceptional founders building high-potential businesses with strong execution ability, clear customer value, and meaningful impact in African markets.',
      },
    ],
  },
  footer: {
    banner: {
      title: "Let's discuss the future of your start-up",
      cta: { label: 'Apply now', href: '/' },
    },
    brandSubtext: 'by Flourish Ventures',
    copyright: `(c) ${new Date().getFullYear()} Madica`,
    newsletter: {
      title: 'Subscribe to our newsletter',
      placeholder: 'Enter your email',
      buttonLabel: 'Subscribe',
      description:
        'Get access to exclusive insights from our community of world-class founders and operators, delivered monthly to your inbox. We process your personal data in accordance with our privacy policy.',
    },
    columns: [
      {
        title: 'Program',
        links: [
          { label: 'Overview', href: '/' },
          { label: 'Portfolio', href: '/portfoilio' },
          { label: 'Perks', href: '/' },
          { label: 'FAQs', href: '/' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'Why Madica', href: '/' },
          { label: 'Community', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Events', href: '/' },
        ],
      },
    ],
    contactEmail: 'hello@madica.vc',
    legalLinks: [
      { label: 'All rights reserved.', href: '/' },
      { label: 'Terms of use', href: '/' },
      { label: 'Privacy policy', href: '/' },
    ],
    socialLabel: 'Connect with us',
    socialLinks: [
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'Twitter', href: '#', icon: 'twitter' },
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
  },
}

export function HomeProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen((current) => !current)

  return (
    <HomeContext.Provider
      value={{
        ...homeContent,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeContent() {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('useHomeContent must be used within HomeProvider')
  }

  return context
}
