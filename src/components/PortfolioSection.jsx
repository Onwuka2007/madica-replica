import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useHomeContent } from '../context/HomeContext'
import PortfolioCard from './PortfolioCard'
import { portfolioItems } from '../data/portfolioItems'

export default function PortfolioSection() {
  const { portfolio } = useHomeContent()
  const featuredItems = portfolioItems.slice(0, 3)

  return (
    <section className="py-12 md:py-16 md:px-0 px-5">
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-8 md:grid-cols-[1fr_0.92fr] md:gap-12">
          <h2 className="m-0 max-w-[760px] text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#011D21]">
            {portfolio.title}
          </h2>
          <div className="max-w-[620px]">
            <p className="m-0 text-[clamp(1rem,1.55vw,1.95rem)] leading-[1.45] font-normal text-[#2a474d]">
              {portfolio.description}
            </p>
            <NavLink
              to={portfolio.viewAll.href}
              className="mt-8 inline-flex items-center gap-2 text-[clamp(1rem,1.35vw,1.55rem)] font-medium text-[#1d3d43] no-underline"
            >
              <span>{portfolio.viewAll.label}</span>
              <ArrowUpRight size={16} />
            </NavLink>
            <span className="mt-2 block h-px w-[84px] bg-[#5b7178]" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3">
          {featuredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
