import Navbar from './Navbar'
import Footer from './Footer'
import './VisitorLayout.css'

const VisitorLayout = ({ children }) => {
    return (
        <div className="visitor-layout">
            <Navbar />
            <main className="visitor-layout-content">
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default VisitorLayout
