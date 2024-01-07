import Link from '../../atoms/Link/Link'
import { ILinkProps } from '../../atoms/Link/Link.types'
import * as S from './Navigation.style'
import { INavigationProps } from './Navigation.types'

const Navigation: React.FC<INavigationProps> = ({ variant, onItemClickCallback }) => {
    const links = [
        { label: 'Home', href: '#home' },
        { label: 'Menu', href: '#menu' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ] satisfies Array<ILinkProps>

    return (
        <S.NavigationList $variant={variant}>
            {links.length > 0 &&
                links.map(({ label, href }, index) => (
                    <S.NavigationItem $variant={variant} onClick={onItemClickCallback} key={index}>
                        <Link label={label} href={href} />
                    </S.NavigationItem>
                ))}
        </S.NavigationList>
    )
}

export default Navigation
