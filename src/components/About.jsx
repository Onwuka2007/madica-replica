import MentorshipSection from "./MentorshipSection";

const values = [
  {
    id: '01',
    title: 'Joining founders on their journey',
    description:
      'Everything we do is in service of founders. We aim to partner authentically every step of the way, from guidance during due diligence to practical support after investment. We stay humble and care about the human element, because founders are entrepreneurs ourselves.',
    art: 'journey',
  },
  {
    id: '02',
    title: 'Grounded in the community',
    description:
      'We are an African team, bridging a global network with local understanding. Our pan-African mission calls for investing beyond the biggest markets and meeting founders where they are. We partner responsibly and build a strong sense of belonging across ecosystems.',
    art: 'community',
  },
  {
    id: '03',
    title: 'Built on trust',
    description:
      'Our mission is to connect underrepresented African entrepreneurs with world-class resources and expertise. We amplify the work of ecosystem partners and operate with clear principles, track record, and long-term accountability.',
    art: 'trust',
  },
  {
    id: '04',
    title: 'Expanding the boundaries',
    description:
      'To empower and scale the startup ecosystem across Africa, we must do things differently. We believe in innovation, resilience, and bold experimentation. This means taking intelligent risks and continuously improving how we support founders.',
    art: 'boundaries',
  },
]

function ValueArt({ kind }) {
  const baseClass = 'mt-8 w-full text-[#011D21]'

  if (kind === 'journey') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <polygon points="0,160 250,60 250,160" fill="currentColor" />
        <rect x="250" y="44" width="70" height="116" fill="currentColor" />
        <circle cx="182" cy="62" r="32" fill="currentColor" />
      </svg>
    )
  }

  if (kind === 'community') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <rect x="0" y="44" width="170" height="62" fill="currentColor" />
        <rect x="96" y="106" width="74" height="54" fill="currentColor" />
        <circle cx="246" cy="104" r="56" fill="currentColor" />
      </svg>
    )
  }

  if (kind === 'trust') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <rect x="0" y="24" width="150" height="70" fill="currentColor" />
        <rect x="150" y="94" width="170" height="66" fill="currentColor" />
        <circle cx="228" cy="60" r="34" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
      <circle cx="66" cy="96" r="62" fill="currentColor" />
      <polygon points="130,160 320,160 320,34" fill="currentColor" />
    </svg>
  )
}

function ValueCard({ value }) {
  return (
    <article className="border border-[#3f565d] p-6 md:p-7">
      <p className="m-0 text-sm text-[#30474d]">{value.id}</p>
      <h3 className="m-0 mt-2 text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.15] font-normal text-[#112f35]">
        {value.title}
      </h3>
      <p className="m-0 mt-4 text-[0.97rem] leading-[1.55] text-[#2c454b]">{value.description}</p>
      <ValueArt kind={value.art} />
    </article>
  )
}

export default function About() {
  const aboutHero =
    'https://cdn.prod.website-files.com/633fb234881d9e496785fec6/63526218322ba717458376e8_Madica-team-p-1600.jpg'

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-0 md:py-20">
        <div className="mb-16">
          <img src={aboutHero} alt="Madica team" className="h-[400px] object-top w-full object-cover" />
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.95fr] md:gap-14">
          <h1 className="m-0 max-w-[700px] text-balance text-[clamp(2.25rem,5.1vw,4.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
            We are African at heart and believe in mission-driven local founders
          </h1>

          <div className="max-w-[480px]">
            <p className="m-0 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
              Early-stage startups face daunting obstacles in Africa. Investors are in short supply, talent is rare,
              mentors are hard to find, and opportunities for structured training are limited. Madica was born to
              democratize access to world-class company building support and empower mission-driven founders.
            </p>
            <p className="m-0 mt-5 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
              We believe a globally-inspired and locally-run company building program can transform the quality of
              ventures emerging across the continent while expanding access for overlooked founders.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e6e7e8] px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-0 lg:grid-cols-3">
            <div className="border border-transparent p-0 lg:min-h-[520px] lg:p-6">
              <h2 className="m-0 text-[clamp(1.8rem,2.7vw,2.9rem)] leading-[1.1] font-normal text-[#112f35]">
                Our values
              </h2>
            </div>

            <ValueCard value={values[0]} />
            <ValueCard value={values[1]} />
            <ValueCard value={values[2]} />
            <ValueCard value={values[3]} />
            <div className="hidden border border-transparent lg:block" />
          </div>
        </div>

      </section>

      <MentorshipSection />
    </>
  )
}
