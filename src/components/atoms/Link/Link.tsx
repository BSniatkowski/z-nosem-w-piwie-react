import * as S from './Link.style'
import { ILinkProps } from './Link.types'

const Link: React.FC<ILinkProps> = ({ label, href = '#' }) => {
    return <S.SLink href={href}>{label ?? href}</S.SLink>
}

export default Link
