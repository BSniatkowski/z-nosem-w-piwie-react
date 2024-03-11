import { useIntl } from 'react-intl'

import Footer from '../../organisms/Footer/Footer'
import messages from './Layout.messages'
import { SLayout } from './Layout.style'
import { ILayout } from './Layout.types'

const Layout: React.FC<ILayout> = ({ children }) => {
    const intl = useIntl()

    const siteLinks = [
        { children: intl.formatMessage(messages.home), href: '#home' },
        { children: intl.formatMessage(messages.offer), href: '#offer' },
        { children: intl.formatMessage(messages.about), href: '#about' },
        { children: intl.formatMessage(messages.contact), href: '#contact' },
    ]
    const altLinks = [{ children: intl.formatMessage(messages.react), href: '#', isCurrent: true }]
    const myLinks = [
        {
            children: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bartlomiej-sniatkowski/',
            ariaLabel: 'Show author LinkedIn profile',
        },
        {
            children: 'Github',
            href: 'https://github.com/BSniatkowski',
            ariaLabel: 'Show author Github profile',
        },
        {
            children: intl.formatMessage(messages.repository),
            href: 'https://github.com/BSniatkowski/z-nosem-w-piwie-react',
            ariaLabel: "Show project's repository",
        },
        {
            children: intl.formatMessage(messages.figma),
            href: 'https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0',
            ariaLabel: "Show project's figma",
        },
    ]

    return (
        <SLayout>
            {children}
            <Footer siteLinks={siteLinks} altLinks={altLinks} myLinks={myLinks} />
        </SLayout>
    )
}

export default Layout
