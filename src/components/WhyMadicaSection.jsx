import { ArrowUpRight } from 'lucide-react'
import { useHomeContent } from '../context/HomeContext'

export default function WhyMadicaSection() {
  const { whyMadica } = useHomeContent()

  return (
    <section className="py-10 md:py-12 md:px-0 px-5">
      <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
        <div>
          <p className="m-0 text-xs font-semibold tracking-[0.08em] text-[#011D21] uppercase">
            {whyMadica.eyebrow}
          </p>
          <h2 className="mt-3 mb-0 max-w-[640px] text-[clamp(2rem,4.8vw,4rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#011D21]">
            {whyMadica.title}
          </h2>
        </div>

        <div className="max-w-[600px]">
          <p className="m-0 text-2x leading-[1.75] font-medium text-[#102c30]">
            {whyMadica.description}
          </p>
          <a
            href={whyMadica.cta.href}
            className="mt-7 inline-flex min-h-11 min-w-[160px] items-center justify-center gap-2 bg-[#63a75f] px-4 text-base font-medium text-white no-underline transition duration-200 hover:brightness-95"
          >
            <span>{whyMadica.cta.label}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
