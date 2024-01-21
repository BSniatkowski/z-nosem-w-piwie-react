import About from '../../templates/About/About'
import Home from '../../templates/Home/Home'
import Offer from '../../templates/Offer/Offer'
import { IMainProps } from './Main.types'

const Main: React.FC<IMainProps> = ({ actualLocale, setActualIntlLocale }) => {
    return (
        <>
            <Home actualLocale={actualLocale} setActualIntlLocale={setActualIntlLocale} />
            <Offer />
            <About />
        </>
    )
}

export default Main
