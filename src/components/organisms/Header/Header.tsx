import { useState } from 'react'

import { useOutsideClick } from '../../../hooks/useOutsideClick/useOutsideClick'
import Icon from '../../atoms/Icon/Icon'
import Logo from '../../atoms/Logo/Logo'
import LanguagePicker from '../../molecules/LanguagePicker/LanguagePicker'
import Navigation from '../../molecules/Navigation/Navigation'
import * as S from './Header.style'
import { IHeaderProps } from './Header.types'

const Header: React.FC<IHeaderProps> = ({ actualLocale, setActualIntlLocale, isMobile, links }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const headerRef = useOutsideClick(() => setIsMenuActive(false))

    return (
        <S.SHeader ref={headerRef} $isMenuActive={isMobile && isMenuActive}>
            <S.InnerHeader $isMenuActive={isMobile && isMenuActive}>
                <Logo isDark={isMobile && isMenuActive} />
                {isMobile ? (
                    <S.MobileMenuContainer $isMenuActive={isMenuActive}>
                        <LanguagePicker
                            actualLocale={actualLocale}
                            setActualLocale={setActualIntlLocale}
                            isMenuActive={isMenuActive}
                        />
                        <Icon variant='menu' onClick={() => setIsMenuActive(!isMenuActive)} />
                    </S.MobileMenuContainer>
                ) : (
                    <>
                        <Navigation variant={'header'} links={links} />
                        <LanguagePicker
                            actualLocale={actualLocale}
                            setActualLocale={setActualIntlLocale}
                            isMenuActive={isMobile}
                        />
                    </>
                )}
            </S.InnerHeader>
            {isMobile && isMenuActive && (
                <Navigation
                    variant={'headerMobile'}
                    links={links}
                    onItemClickCallback={() => setIsMenuActive(false)}
                />
            )}
        </S.SHeader>
    )
}

export default Header
