import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import { getPortfolioById } from '../data/portfolioItems'

function MetaPill({ value }) {
  return (
    <span className="inline-flex min-h-9 min-w-[140px] items-center rounded-full border border-[#b9c8cb] px-4 text-sm text-[#e6f0f1]">
      {value}
    </span>
  )
}

export default function PortfolioDetailPage() {
  const { portfolioId } = useParams()
  const portfolio = getPortfolioById(portfolioId)

  if (!portfolio) {
    return <Navigate to="/portfoilio" replace />
  }

  return (
    <section className="bg-[#011D21] px-5 py-10 md:px-10 md:py-14">
      <div className="mx-auto w-full max-w-[1000px] text-[#e6f0f1]">
        <NavLink
          to="/portfoilio"
          className="inline-flex items-center gap-2 text-base text-[#e6f0f1] no-underline"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </NavLink>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <h1 className="m-0 text-5xl leading-[1.06] font-normal tracking-[-0.02em] md:text-6xl">
            {portfolio.company}
          </h1>

          <div>
            <div className="flex flex-wrap gap-3">
              <MetaPill value={portfolio.country} />
              <MetaPill value={portfolio.category} />
              <MetaPill value={portfolio.year} />
            </div>

            <a
              href={portfolio.website}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-lg text-[#e6f0f1] no-underline"
            >
              <span>Visit website</span>
              <ArrowUpRight size={16} />
            </a>
            <span className="mt-3 block h-px w-[110px] bg-[#b9c8cb]" />
          </div>
        </div>

        <div className="mt-9 border-t border-[#b9c8cb] pt-6">
          <div className="overflow-hidden">
            <img
              src={portfolio.image}
              alt={portfolio.company}
              className="h-[260px] w-full object-cover md:h-[460px]"
            />
          </div>
        </div>

        <div className="mt-7 max-w-4xl">
          {portfolio.companyUrl ? (
            <img src={portfolio.companyUrl} alt={portfolio.company} className="h-10 w-auto max-w-[220px]" />
          ) : (
            <h2 className="m-0 text-3xl tracking-[0.02em]">{portfolio.company}</h2>
          )}

          <p className="m-0 mt-6 text-lg leading-[1.6] text-[#e6f0f1]/95">{portfolio.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {portfolio.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#99b2b8] px-3 py-1 text-xs tracking-[0.08em] text-[#d8e6e8] uppercase"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
