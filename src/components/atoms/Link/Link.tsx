import * as S from './Link.style'
import { ILinkProps } from './Link.types'

const Link: React.FC<ILinkProps> = ({ children, href = '#', ariaLabel }) => {
    return (
        <S.SLink
            href={href}
            aria-label={ariaLabel}
            target={typeof href === 'string' && href.startsWith('#') ? '_self' : '_blank'}
            rel='noopener'
        >
            {children ?? href}
        </S.SLink>
    )
}

export default Link
