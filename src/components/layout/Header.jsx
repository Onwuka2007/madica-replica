import { NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useHomeContent } from '../../context/HomeContext'
import icon from '../../assets/icon.svg'

export default function Header() {
  const { brand, navItems, headerCta, toggleSidebar, isSidebarOpen } = useHomeContent()

  return (
    <header className="border-b border-[#dfdfdf] bg-[#f2f2f2]">
      <div className="mx-auto flex min-h-[76px] w-[min(1185px,92vw)] items-center justify-between gap-4">
        <NavLink to="/" className="inline-flex items-center text-[#011D21] no-underline">
          <img src={icon} alt={brand} className="h-6 w-auto md:h-7" />
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-8 p-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive && item.label === 'Program'
                      ? 'leading-none font-medium text-[#18241d] no-underline transition-colors duration-200'
                      : 'leading-none font-medium text-[#343434] no-underline transition-colors duration-200 hover:text-[#18241d]'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to={headerCta.to}
            className="hidden min-h-11 min-w-[160px] items-center justify-center gap-2 bg-[#63a75f] px-4 text-base font-medium text-white no-underline transition duration-200 hover:brightness-95 md:inline-flex"
          >
            <span>{headerCta.label}</span>
            <span aria-hidden="true" className="text-base leading-none">
              <ArrowUpRight size={16} />
            </span>
          </NavLink>

          <button
            type="button"
            onClick={toggleSidebar}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#d4d4d4] text-[#1a353a] md:hidden"
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-menu-dropdown"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
