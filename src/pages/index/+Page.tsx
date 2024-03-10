import About from '../../components/templates/About/About'
import Home from '../../components/templates/Home/Home'
import Offer from '../../components/templates/Offer/Offer'
import { IMainPageProps } from './+Page.types'

const Page: React.FC<IMainPageProps> = ({ actualLocale, setActualIntlLocale }) => {
    return (
        <>
            <Home actualLocale={actualLocale} setActualIntlLocale={setActualIntlLocale} />
            <Offer />
            <About />
        </>
    )
}

export default Page
