import { NavLink } from 'react-router-dom'

export default function PortfolioCard({ item }) {
  return (
    <NavLink to={`/portfoilio/${item.id}`} className="block h-full no-underline">
      <article className="group flex h-full flex-col border border-[#95aaaf] bg-[#011D21] p-6 text-[#e6f0f1] transform-gpu transition-transform duration-300 ease-out hover:-rotate-1 md:p-7">
        {item.companyUrl ? (
          <img src={item.companyUrl} alt={item.company} className="w-30" />
        ) : (
          <h3 className="m-0 text-[1.5rem] leading-none tracking-[0.02em]">{item.company}</h3>
        )}

        <div className="mt-5 aspect-4/3 overflow-hidden">
          <img
            src={item.image}
            alt={item.company}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <p className="m-0 mt-7 text-[1rem] leading-[1.45] text-[#f2f7f8]">{item.summary}</p>
      </article>
    </NavLink>
  )
}
