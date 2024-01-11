import About from '../About/About'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Offer from '../Offer/Offer'
import { SLayout } from './Layout.style'

const Layout = () => {
    return (
        <SLayout>
            <Home />
            <Offer />
            <About />
            <Footer />
        </SLayout>
    )
}

export default Layout
