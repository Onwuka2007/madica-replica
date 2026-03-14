import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useHomeContent } from '../../context/HomeContext';
import icon from '../../assets/icon.svg';

const socialIconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer() {
  const { footer } = useHomeContent();

  return (
    <footer className="bg-[#f2f2f2] pb-8 pt-8 md:pb-10 md:pt-25">
      <div className="mx-auto w-full max-w-6xl px-5  md:px-0">
        <section className="flex flex-col gap-6 bg-[#60a35d] px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-12 md:py-10">
          <h2 className="m-0 max-w-[760px] text-2xl leading-[1.08] font-normal tracking-[-0.02em] text-white md:text-3xl">
            {footer.banner.title}
          </h2>
          <NavLink
            to={footer.banner.cta.href}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#e5df76] px-5 font-medium text-[#011D21] no-underline transition duration-200 hover:brightness-95 sm:min-w-[190px] sm:w-auto"
          >
            <span>{footer.banner.cta.label}</span>
            <ArrowUpRight size={18} />
          </NavLink>
        </section>

        <section className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1.05fr_3fr]">
          <div className="min-w-0">
            <img src={icon} alt="madica" className="h-8 w-auto" />
            <p className="mt-1 text-sm text-[#28484f]">{footer.brandSubtext}</p>
            <p className="m-0 mt-8 text-sm leading-[1.12] font-normal text-[#011D21]">
              {footer.copyright}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.7fr]">
            <div className="min-w-0 md:col-span-2 lg:col-span-1">
              <h3 className="m-0 text-base md:text-lg leading-[1.08] font-normal tracking-[-0.02em] text-[#011D21]">
                {footer.newsletter.title}
              </h3>

              <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-0">
                <input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="h-[58px] w-full min-w-0 flex-1 border border-[#39545b] bg-transparent px-4 md:py-0 py-3 text-sm font-normal text-[#011D21] placeholder:text-[#8a9699] focus:outline-none"
                />
                <button
                  type="button"
                  className="h-[58px] w-full bg-[#011D21] px-5 text-sm font-medium text-white sm:min-w-[170px] sm:w-auto"
                >
                  {footer.newsletter.buttonLabel}
                </button>
              </form>

              <p className="m-0 mt-6 max-w-[660px] text-sm leading-normal font-normal text-[#1a373f] md:text-base">
                {footer.newsletter.description}
              </p>
            </div>

            {footer.columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h4 className="m-0 text-lg leading-none font-semibold text-[#011D21]">
                  {column.title}
                </h4>
                <ul className="m-0 mt-6 list-none space-y-4 p-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        to={link.href}
                        className="text-sm leading-none font-normal text-[#0f2d35] no-underline md:text-base"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                {column.title === 'About' ? (
                  <a
                    href={`mailto:${footer.contactEmail}`}
                    className="mt-8 inline-flex max-w-full items-center gap-3 break-all text-sm leading-none font-normal text-[#0f2d35] no-underline md:text-base"
                  >
                    <Send size={22} />
                    <span>{footer.contactEmail}</span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-[#5f7479]/70 pt-8 md:mt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-3 p-0">
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="leading-none font-normal text-[#0f2d35] no-underline"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <span className="leading-none font-normal text-[#0f2d35]">
                {footer.socialLabel}
              </span>
              <ul className="m-0 flex list-none items-center gap-4 p-0">
                {footer.socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        className="flex gap-6 items-center justify-center text-[#0f2d35]"
                      >
                        <Icon size={16} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
