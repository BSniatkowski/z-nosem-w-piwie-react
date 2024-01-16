import Icon from '../../atoms/Icon/Icon'
import Logo from '../../atoms/Logo/Logo'
import Navigation from '../../molecules/Navigation/Navigation'
import * as S from './Footer.style'
import { IFooterProps } from './Footer.types'

const Footer: React.FC<IFooterProps> = ({ siteLinks, altLinks, myLinks }) => {
    return (
        <S.SFooter>
            <S.InnerFooter>
                <S.UpperPart>
                    <Logo withFrame />
                    <S.FooterSectionsContainer>
                        <S.FooterSection>
                            <S.FooterSectionName>Site Links</S.FooterSectionName>
                            <Navigation links={siteLinks} variant='footer' />
                        </S.FooterSection>
                        <S.FooterSection>
                            <S.FooterSectionName>
                                Alternative versions of this site
                            </S.FooterSectionName>
                            <Navigation links={altLinks} variant='footer' />
                        </S.FooterSection>
                        <S.FooterSection>
                            <S.FooterSectionName>My links</S.FooterSectionName>
                            <Navigation links={myLinks} variant='footer' />
                        </S.FooterSection>
                    </S.FooterSectionsContainer>
                </S.UpperPart>
                <S.Copyrights>
                    <Icon variant='copyright' />
                    Copyright 2024
                </S.Copyrights>
            </S.InnerFooter>
        </S.SFooter>
    )
}

export default Footer
