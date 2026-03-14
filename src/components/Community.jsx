import React from 'react';

export default function Community() {
    const heroImage = 'https://cdn.prod.website-files.com/633fb234881d9e496785fec6/669cf83ad02654086ea4114e_madica-avengers.jpg';

    const community = [
        {
            title: 'Mentorship',
            desc: `We have brought together a world-class group of current and former operators who will work closely with entrepreneurs in the program.These mentors have first-hand experience building companies in Africa and can therefore share personal insights from the field with Madica founders. Upon selection to Madica, founders are paired with a ‘lead mentor’ who will be their primary guide throughout the program.`
        },
        {
            title: 'Experts',
            desc: `We are building a panel of domain experts in fields such as marketing, recruiting, strategy, and technology to help with the specific needs of founders. Entrepreneurs can access these resources as needed to compliment the support they receive from the Madica team and mentors.`
        },
        {
            title: 'Executive Coaching',
            desc: `We believe that a founder’s inner wellbeing is as, if not more, important as her business skills. Consequently, we provide founders access to executive coaches for their wellbeing and personal development.`
        },
        {
            title: 'Community Members',
            desc: `We are partnering with top accelerators and early stage investors on the continent to help support our entrepreneurs. These organisations will work closely with the Madica team to provide resources and on-the-ground support to Madica founders.`
        },
        {
            title: 'Flourish Ventures',
            desc: `The Flourish Ventures team, which has years of experience investing across frontier markets, will be ready to step in as needed by the founders.`
        }
    ];
    return (
        <section className=" md:px-0 px-5">
            <div className="bg-[#dde6f2] py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.95fr] md:gap-14">
                        <h1 className="m-0 max-w-[700px] text-balance text-[clamp(2.25rem,5.1vw,4.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
                            We have the expertise to truly support startup entrepreneurs.
                        </h1>

                        <div className="max-w-[480px]">
                            <p className="m-0 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
                                Madica participants will join a vibrant network of fellow founders, world-class mentors, experts, and investors to share their journey with.
                                <br /><br />
                                We’re an experienced investment team with a deep appreciation for the challenges and opportunities founders face on their journey.
                            </p>

                        </div>
                    </div>

                    <div className="mt-14 md:mt-16">
                        <img src={heroImage} alt="heroImage" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl">
                {community.map((item, index) => (
                    <div key={index} className="mt-14 w-full md:mt-16 flex flex-col gap-10 md:flex-row md:justify-between border-b py-8">
                        <h2 className="m-0 md:w-1/2 text-balance text-[clamp(1.25rem,5.1vw,2.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
                            {item.title}
                        </h2>
                        <p className="m-0 md:w-1/2 text-[1.03rem] leading-[1.85] text-[#102c30]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
