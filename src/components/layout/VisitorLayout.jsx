import Navbar from './Navbar'
import Footer from './Footer'

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