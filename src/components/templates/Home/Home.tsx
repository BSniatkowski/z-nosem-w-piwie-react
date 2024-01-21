import { FormattedMessage, useIntl } from 'react-intl'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Icon from '../../atoms/Icon/Icon'
import Header from '../../organisms/Header/Header'
import messages from './Home.messages'
import * as S from './Home.style'
import { IHomeProps } from './Home.types'

const Home: React.FC<IHomeProps> = ({ actualLocale, setActualIntlLocale }) => {
    const intl = useIntl()

    const links = [
        { label: intl.formatMessage(messages.home), href: '#home' },
        { label: intl.formatMessage(messages.offer), href: '#offer' },
        { label: intl.formatMessage(messages.about), href: '#about' },
        { label: intl.formatMessage(messages.contact), href: '#contact' },
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
                        <Icon variant='facebook' />
                        <Icon variant='instagram' />
                        <Icon variant='tiktok' />
                        <Icon variant='x' />
                        <Icon variant='youtube' />
                    </S.FollowUsIconsContainer>
                </S.FollowUs>
            </S.SHome>
        </S.HeaderSection>
    )
}

export default Home
