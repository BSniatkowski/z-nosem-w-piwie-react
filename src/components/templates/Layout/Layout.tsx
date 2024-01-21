import { useIntl } from 'react-intl'

import Footer from '../../organisms/Footer/Footer'
import messages from './Layout.messages'
import { SLayout } from './Layout.style'
import { ILayout } from './Layout.types'

const Layout: React.FC<ILayout> = ({ children }) => {
    const intl = useIntl()

    const siteLinks = [
        { label: intl.formatMessage(messages.home), href: '#home' },
        { label: intl.formatMessage(messages.offer), href: '#offer' },
        { label: intl.formatMessage(messages.about), href: '#about' },
        { label: intl.formatMessage(messages.contact), href: '#contact' },
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
            {children}
            <Footer siteLinks={siteLinks} altLinks={altLinks} myLinks={myLinks} />
        </SLayout>
    )
}

export default Layout
