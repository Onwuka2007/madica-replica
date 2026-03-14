import { useHomeContent } from '../context/HomeContext'
import heroImage from '../assets/heroImage.svg'
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { hero } = useHomeContent()

  return (
    <section className="py-12 md:py-16 md:px-0 px-5" id="start">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.95fr] md:gap-14">
          <h1 className="m-0 max-w-[700px] text-balance text-[clamp(2.25rem,5.1vw,4.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
            {hero.title}
          </h1>

          <div className="max-w-[480px]">
            <p className="m-0 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
              {hero.description}
            </p>
            <a
              className="mt-8 inline-flex group items-center gap-2 text-base font-semibold text-[#1c3a42] no-underline"
              href={hero.learnMore.href}
            >
              <span>{hero.learnMore.label}</span>
              <span aria-hidden="true">
                <ArrowUpRight size={16} className='group-hover:rotate-45 transition-transform duration-200'/>
              </span>
            </a>
            <span className="mt-2 block h-px w-[72px] bg-[#5b7178]" />
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <img src={heroImage} alt={hero.artworkAlt} className="w-full h-auto" />
        </div>

        <div className="mt-11 flex justify-center">
          <button
            type="button"
            aria-label="Scroll down"
            className="flex h-[56px] w-[40px] items-center justify-center rounded-full border border-[#748589] text-xl font-light text-[#123037]"
          >
            <ArrowDown strokeWidth={1.5} className='animate-bounce' />
          </button>
        </div>
      </div>
    </section>
  )
}
