import { ArrowUpRight } from 'lucide-react'
import { useHomeContent } from '../context/HomeContext'
import background1 from '../assets/background1.svg'
import background2 from '../assets/background2.png'
import background3 from '../assets/background3.svg'

const cardBackgrounds = [background1, background2, background3]

export default function ProgramBenefitsSection() {
  const { programBenefits } = useHomeContent()

  return (
    <section className="py-10 md:py-20 md:px-0 px-5">
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-3 md:grid-cols-3">
          {cardBackgrounds.map((image, index) => (
            <article key={index} className="overflow-hidden">
              <img
                src={image}
                alt=""
                className="block w-full object-cover"
              />
            </article>
          ))}
        </div>

        <div className="mt-3 flex flex-col gap-8 bg-[#e8e6e6] px-8 py-8 md:mt-4 md:flex-row md:items-center md:justify-between md:px-14 md:py-14">
          <p className="m-0 max-w-[780px] text-xl md:text-2xl leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
            {programBenefits.summary}
          </p>
          <a
            href={programBenefits.cta.href}
            className="inline-flex min-h-[70px] w-full items-center justify-center gap-2 bg-[#4f3b40] px-6 font-medium text-white no-underline transition duration-200 hover:brightness-95 md:w-auto md:min-w-[350px]"
          >
            <span>{programBenefits.cta.label}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
