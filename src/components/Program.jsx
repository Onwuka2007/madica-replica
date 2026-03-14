import React from 'react';

const values = [
  {
    id: '01',
    title: 'Capital',
    description:
      'We will invest up to $200,000 in exchange for equity ownership in participating companies',
    art: 'capital',
  },
  {
    id: '02',
    title: 'Community',
    description:
      `Madica founders will join a thriving community founded on the principles of mutual trust, unconditional support and results-oriented collaboration. Successful Madica founders will rely on fellow founders, the Madica team, and the broader Flourish Ventures community to help overcome personal and professional obstacles. Additionally, founders will have access to a world-class panel of mentors, executive coaches, and subject-matter experts to get hands-on support`,
    art: 'community',
  },
  {
    id: '03',
    title: 'Curriculum',
    description:
      `Madica participants will receive exclusive invites to attend highly personalized workshops designed to impart foundational skills for scaling their ventures. Founders can also engage in up to four, week-long immersion trips throughout their time in the program. Each trip provides an opportunity to spend quality time with mentors, peers, global investors, and key ecosystem stakeholders.`,
    art: 'curriculum',
  },
  {
    id: '04',
    title: 'Continuity',
    description:
      `After completing the program, Madica companies will be introduced to specially selected investors and accelerator programs that can help them take the next leap forward`,
    art: 'continuity',
  },
  {
    id: '05',
    title: 'Perks',
    description:
      `Madica offers curated tools, training and credits such as AWS, Carta and Salesforce to make starting-up a little easier.`,
    art: 'perks',
  },
];

const whoIsMadicaFor = [
  {
    id: '01',
    title: 'Team',
    description: 'We seek local founders with diverse teams from across the continent',
    image:
      'https://cdn.prod.website-files.com/633fb234881d9e496785fec6/635352e94f90fd0d2f98a67d_team.svg',
  },
  {
    id: '02',
    title: 'Traction',
    description:
      'We seek ventures with at least a minimum viable product, ideally with the first few paying customers and those that haven’t yet raised significant institutional capital',
    image:
      'https://cdn.prod.website-files.com/633fb234881d9e496785fec6/635352e84f90fd7e4c98a667_traction.svg',
  },
  {
    id: '03',
    title: 'Sector',
    description: 'We invite founders from all sectors including frontier sectors (e.g. Web3, AI)',
    image:
      'https://cdn.prod.website-files.com/633fb234881d9e496785fec6/635352e8256a8d27fd52292c_sector.svg',
  },
];

function ValueArt({ kind }) {
  const baseClass = 'mt-8 w-full text-[#011D21]';

  if (kind === 'journey') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <polygon points="0,160 250,60 250,160" fill="currentColor" />
        <rect x="250" y="44" width="70" height="116" fill="currentColor" />
        <circle cx="182" cy="62" r="32" fill="currentColor" />
      </svg>
    );
  }

  if (kind === 'community') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <rect x="0" y="44" width="170" height="62" fill="currentColor" />
        <rect x="96" y="106" width="74" height="54" fill="currentColor" />
        <circle cx="246" cy="104" r="56" fill="currentColor" />
      </svg>
    );
  }

  if (kind === 'trust') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <rect x="0" y="24" width="150" height="70" fill="currentColor" />
        <rect x="150" y="94" width="170" height="66" fill="currentColor" />
        <circle cx="228" cy="60" r="34" fill="currentColor" />
      </svg>
    );
  }

  if (kind === 'perks') {
    return (
      <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
        <rect x="0" y="24" width="150" height="70" fill="currentColor" />
        <rect x="150" y="94" width="170" height="66" fill="currentColor" />
        <circle cx="228" cy="60" r="34" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 160" className={baseClass} aria-hidden="true">
      <circle cx="66" cy="96" r="62" fill="currentColor" />
      <polygon points="130,160 320,160 320,34" fill="currentColor" />
    </svg>
  );
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
  );
}

export default function Program() {
  return (
    <>
      <section className="py-12 md:py-16 md:px-0 px-5">
        <div className="mx-auto max-w-6xl border-b pb-16">
          <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.95fr] md:gap-14">
            <h1 className="m-0 max-w-[700px] text-balance text-[clamp(2.25rem,5.1vw,4.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
              Access world-class venture building support
            </h1>

            <div className="max-w-[480px]">
              <p className="m-0 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
                Madica is a 12-18 month structured investment program for African startups - especially those that receive a disproportionately small share of venture funding, such as those led by women or by local founders or those that operate outside well-established tech hubs.
                <br /><br />
                We will invest up to $200,000 in participating companies at the beginning of their journey so they can hire the right team and focus on building the business. We will complement this with programmatic support including access to hands-on mentorship by exceptional founders and operators, training and coaching on company building by industry specialists, and targeted interactions with prospective investors to ensure that the continuum of later-stage capital is available as companies grow.
                <br /><br />
                Applications to the program are open all year round and startups can apply to join whenever they are ready.
              </p>
            </div>
          </div>

        </div>
      </section>


      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-0 lg:grid-cols-3">
            <div className="border border-transparent p-0 lg:min-h-[520px] lg:p-6">
              <h2 className="md:mb-0 m-0 mb-10 text-[clamp(1.8rem,2.7vw,2.9rem)] leading-[1.1] font-normal text-[#112f35]">
                Benefits
              </h2>
            </div>

            <ValueCard value={values[0]} />
            <ValueCard value={values[1]} />
            <ValueCard value={values[2]} />
            <ValueCard value={values[3]} />
            <ValueCard value={values[4]} />
            <div className="hidden border border-transparent lg:block" />
          </div>
        </div>

      </section>

      <section className="bg-[#50393f] px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <h2 className="m-0 text-[clamp(2rem,4.2vw,4rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#f3efef]">
            Who is Madica For?
          </h2>

          <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
            {whoIsMadicaFor.map((item) => (
              <article key={item.id} className="grid gap-6 md:grid-cols-[320px_1fr] md:gap-10 lg:items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full max-w-[320px]"
                  loading="lazy"
                />

                <div>
                  <h3 className="m-0 text-[clamp(2rem,3.2vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.02em] text-[#f3efef]">
                    <span className="mr-3 text-[0.42em] align-top">{item.id}</span>
                    {item.title}
                  </h3>
                  <p className="m-0 mt-3 max-w-5xl text-[1.02rem] leading-[1.65] text-[#f3efef]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
