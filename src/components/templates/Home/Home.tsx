import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Icon from '../../atoms/Icon/Icon'
import Header from '../../organisms/Header/Header'
import * as S from './Home.style'

const Home = () => {
    const links = [
        { label: 'Home', href: '#home' },
        { label: 'Offer', href: '#offer' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ]

    const isMobile = useBreakpoint('mobile')

    return (
        <S.HeaderSection id='home'>
            <S.SHome>
                <Header links={links} isMobile={isMobile} />
                <S.MainTextFrame>
                    <h1 className='decorative'>Z Nosem W Piwie</h1>
                    <p>
                        Welcome to place where the past and imagination converge for a unique
                        pub/cafe experience! Immerse yourself in the charm of rustic decor, sip on
                        imaginative brews, and let every moment transport you to a place where
                        laughter knows no bounds. Cheers to the magic of "Z Nosem W Piwie" – your
                        escape into an extraordinary world of make-believe!
                    </p>
                </S.MainTextFrame>
                <S.FollowUs>
                    <S.FollowUsTextContainer>Follow Us</S.FollowUsTextContainer>
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
