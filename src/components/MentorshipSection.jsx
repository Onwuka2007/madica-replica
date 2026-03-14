import { ArrowUpRight } from 'lucide-react';
import { useHomeContent } from '../context/HomeContext';
import List from '../assets/Listitem.png';
import team from '../assets/team.png';

const mentorImages = [List, List, List, List];
const teamImages = [team, team, team, team, team];

export default function MentorshipSection() {
  const { mentorship } = useHomeContent();
  const mobileScrollerClass =
    'mt-3 flex gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible';

  return (
    <section className="overflow-x-hidden bg-[#011D21] py-10 md:py-24 md:px-36 px-5">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 md:gap-12">
          <div>
            <h2 className="m-0 text-5xl leading-[1.08] font-normal tracking-[-0.02em] text-[#e6f0f1]">
              {mentorship.title}
            </h2>
            <a
              href={mentorship.learnMore.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6f0f1] no-underline"
            >
              <span>{mentorship.learnMore.label}</span>
              <ArrowUpRight size={14} />
            </a>
            <span className="mt-2 block h-px w-[82px] bg-[#a8c9cc]" />
          </div>
        </div>

        <div className="mt-9 border-t border-[#a5c9cc] pt-3">
          <p className="m-0 text-xs font-semibold tracking-[0.08em] text-[#d1e5e7] uppercase">
            {mentorship.mentorsLabel}
          </p>
          <div className={mobileScrollerClass}>
            {mentorImages.map((image, index) => (
              <article key={index} className="w-[200px] shrink-0 overflow-hidden md:w-auto">
                <img
                  src={image}
                  alt=""
                  className="block h-auto w-full transform-gpu transition-transform duration-300 ease-out md:hover:-rotate-1"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-9 border-t border-[#a5c9cc] pt-3">
          <p className="m-0 text-xs font-semibold tracking-[0.08em] text-[#d1e5e7] uppercase">
            {mentorship.teamLabel}
          </p>
          <div className={mobileScrollerClass}>
            {teamImages.map((image, index) => (
              <article key={index} className="w-[200px] shrink-0 overflow-hidden md:w-auto md:overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="block h-auto w-full transform-gpu transition-transform duration-300 ease-out md:hover:-rotate-1"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
