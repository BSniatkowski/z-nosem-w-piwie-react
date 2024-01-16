import Footer from '../../organisms/Footer/Footer'
import About from '../About/About'
import Home from '../Home/Home'
import Offer from '../Offer/Offer'
import { SLayout } from './Layout.style'

const Layout = () => {
    const siteLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Offer', href: '#offer' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ]
    const altLinks = [
        { label: 'React (current)', href: '#', isCurrent: true },
        { label: 'Vue', href: '#' },
        { label: 'Angular', href: '#' },
    ]
    const myLinks = [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bartlomiej-sniatkowski/' },
        { label: 'Github', href: 'https://github.com/BSniatkowski' },
    ]

    return (
        <SLayout>
            <Home />
            <Offer />
            <About />
            <Footer siteLinks={siteLinks} altLinks={altLinks} myLinks={myLinks} />
        </SLayout>
    )
}

export default Layout
