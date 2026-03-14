import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BlogPage from './components/BlogPage';
import HomePage from './components/HomePage';
import PortfolioDetailPage from './components/PortfolioDetailPage';
import PortfolioPage from './components/PortfolioPage';
import MainLayout from './components/layout/MainLayout';
import Community from './components/Community';
import Perks from './components/Perks';
import Program from './components/Program';
import Apply from './components/Apply';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="portfoilio" element={<PortfolioPage />} />
        <Route path="portfoilio/:portfolioId" element={<PortfolioDetailPage />} />
        <Route path="portfolio" element={<Navigate to="/portfoilio" replace />} />
        <Route path="portfolio/:portfolioId" element={<PortfolioDetailPage />} />
        <Route path="about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path='/perks' element={<Perks />} />
        <Route path='/program' element={<Program />} />
        <Route path='/apply' element={<Apply />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
