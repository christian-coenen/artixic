import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

{/* Visitor pages imports */}
import HomePage from './pages/visitor_pages/HomePage'
import ArtPage from './pages/visitor_pages/ArtPage'
import CollectionsPage from './pages/visitor_pages/CollectionsPage'
import AboutPage from './pages/visitor_pages/AboutPage'

{/* Admin pages imports */}
import AdminLoginPage from './pages/admin_pages/AdminLoginPage'
import AdminArtPage from './pages/admin_pages/AdminArtPage'
import AdminCollectionsPage from './pages/admin_pages/AdminCollectionsPage'
import AdminMediaPage from './pages/admin_pages/AdminMediaPage'
import AdminUsersPage from './pages/admin_pages/AdminUsersPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Visitor pages routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/art" element={<ArtPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* Admin pages routes */}
                {/* Temporary /admin routes: update afterwards for security */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/art" element={<AdminArtPage />} />
                <Route path="/admin/collections" element={<AdminCollectionsPage />} />
                <Route path="/admin/media" element={<AdminMediaPage />} />
                <Route path="/admin/users" element={<AdminUsersPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
