import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import SolutionDetailPage from './pages/SolutionDetailPage'
import ResourcesVideosPage from './pages/ResourcesVideosPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'

// Vite injects import.meta.env.BASE_URL from the `base` config (e.g. "/opsmx/" or "/").
// React Router needs the basename without trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="/resources/videos" element={<ResourcesVideosPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
