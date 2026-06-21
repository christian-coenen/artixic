import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

{/* Visitor pages imports */}
import HomePage from './pages/visitor-pages/HomePage'
import ArtworksPage from './pages/visitor-pages/ArtworksPage'
import ArtworkDetailPage from './pages/visitor-pages/ArtworkDetailPage'
import CollectionsPage from './pages/visitor-pages/CollectionsPage'
import AboutPage from './pages/visitor-pages/AboutPage'

{/* Admin pages imports */}
import AdminLoginPage from './pages/admin-pages/AdminLoginPage'
import AdminArtPage from './pages/admin-pages/AdminArtPage'
import AdminCollectionsPage from './pages/admin-pages/AdminCollectionsPage'
import AdminMediaPage from './pages/admin-pages/AdminMediaPage'
import AdminUsersPage from './pages/admin-pages/AdminUsersPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Visitor pages routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/artworks" element={<ArtworksPage />} />
                <Route path="/artworks/:artworkId" element={<ArtworkDetailPage />} />
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
