import { FormattedMessage, useIntl } from 'react-intl'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Icon from '../../atoms/Icon/Icon'
import Link from '../../atoms/Link/Link'
import Header from '../../organisms/Header/Header'
import messages from './Home.messages'
import * as S from './Home.style'
import { IHomeProps } from './Home.types'

const Home: React.FC<IHomeProps> = ({ actualLocale, setActualIntlLocale }) => {
    const intl = useIntl()

    const links = [
        { children: intl.formatMessage(messages.home), href: '#home' },
        { children: intl.formatMessage(messages.offer), href: '#offer' },
        { children: intl.formatMessage(messages.about), href: '#about' },
        { children: intl.formatMessage(messages.contact), href: '#contact' },
    ]

    const isMobile = useBreakpoint('mobile')

    return (
        <S.HeaderSection id='home'>
            <S.SHome>
                <Header
                    actualLocale={actualLocale}
                    setActualIntlLocale={setActualIntlLocale}
                    links={links}
                    isMobile={isMobile}
                />
                <S.MainTextFrame>
                    <h1 className='decorative'>
                        <FormattedMessage {...messages.pubName} />
                    </h1>
                    <p>
                        <FormattedMessage {...messages.welcome} />
                    </p>
                </S.MainTextFrame>
                <S.FollowUs>
                    <S.FollowUsTextContainer>
                        <FormattedMessage {...messages.follow} />
                    </S.FollowUsTextContainer>
                    <S.FollowUsIconsContainer>
                        <Link
                            href='https://www.facebook.com/'
                            ariaLabel='Show entity facebook page'
                        >
                            <Icon variant='facebook' />
                        </Link>
                        <Link
                            href='https://www.instagram.com/'
                            ariaLabel='Show entity instagram page'
                        >
                            <Icon variant='instagram' />
                        </Link>
                        <Link href='https://www.tiktok.com/' ariaLabel='Show entity tiktok page'>
                            <Icon variant='tiktok' />
                        </Link>
                        <Link href='https://twitter.com/' ariaLabel='Show entity twitter page'>
                            <Icon variant='x' />
                        </Link>
                        <Link href='https://www.youtube.com/' ariaLabel='Show entity youtube page'>
                            <Icon variant='youtube' />
                        </Link>
                    </S.FollowUsIconsContainer>
                </S.FollowUs>
            </S.SHome>
        </S.HeaderSection>
    )
}

export default Home
