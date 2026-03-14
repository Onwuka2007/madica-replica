import { useHomeContent } from '../context/HomeContext'
import PortfolioCard from './PortfolioCard'
import { portfolioItems } from '../data/portfolioItems'

export default function PortfolioPage() {
  const { portfolio } = useHomeContent()

  return (
    <section className="bg-[#011D21] px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto w-full max-w-[1000px]">
        <h1 className="m-0 max-w-[700px] text-3xl md:text-5xl leading-[1.08] font-normal tracking-[-0.02em] text-[#e6f0f1]">
          {portfolio.title}
        </h1>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
