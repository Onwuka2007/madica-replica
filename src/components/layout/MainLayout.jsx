import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import PageTransitionLoader from './PageTransitionLoader'

export default function MainLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[#f2f2f2] font-[Manrope,sans-serif] text-[#0e1f42]">
      <PageTransitionLoader />
      <Header />
      <Sidebar />
      <main className="grid items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
