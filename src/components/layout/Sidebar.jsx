import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useHomeContent } from '../../context/HomeContext'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar, navItems, headerCta } = useHomeContent()

  useEffect(() => {
    if (!isSidebarOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeSidebar()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isSidebarOpen, closeSidebar])

  return (
    <div
      className={`fixed inset-x-0 top-[76px] bottom-0 z-50 md:hidden ${
        isSidebarOpen ? '' : 'pointer-events-none'
      }`}
      aria-hidden={!isSidebarOpen}
    >
      <button
        type="button"
        onClick={closeSidebar}
        className={`fixed inset-x-0 top-[76px] bottom-0 bg-black/20 transition-opacity duration-200 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Close menu overlay"
      />

      <aside
        id="mobile-menu-dropdown"
        className={`relative h-full w-full origin-top overflow-y-auto border border-[#d4d4d4] border-t-0 bg-[#f2f2f2] p-6 shadow-xl transition-all duration-200 ${
          isSidebarOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="m-0 list-none space-y-10 p-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-1 text-lg font-semibold leading-relaxed text-[#18241d] no-underline'
                      : 'block py-1 text-lg font-medium leading-relaxed text-[#2d4b51] no-underline'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink
          to={headerCta.to}
          onClick={closeSidebar}
          className="mt-18 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#63a75f] px-4 text-base font-medium text-white no-underline"
        >
          <span>{headerCta.label}</span>
          <ArrowUpRight size={16} />
        </NavLink>
      </aside>
    </div>
  )
}
