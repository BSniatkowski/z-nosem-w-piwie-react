import logo from '/logo.svg?raw'

import * as S from './Logo.style'
import { ILogoProps } from './Logo.types'

const Logo: React.FC<ILogoProps> = ({ isDark, withFrame }) => {
    return (
        <S.LogoWrapper
            $isDark={isDark}
            $withFrame={withFrame}
            dangerouslySetInnerHTML={{ __html: logo }}
        />
    )
}

export default Logo
