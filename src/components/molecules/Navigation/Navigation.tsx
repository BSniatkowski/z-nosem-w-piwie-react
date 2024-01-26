import Link from '../../atoms/Link/Link'
import * as S from './Navigation.style'
import { INavigationProps } from './Navigation.types'

const Navigation: React.FC<INavigationProps> = ({ variant, links, onItemClickCallback }) => {
    return (
        <S.NavigationList $variant={variant}>
            {links.length > 0 &&
                links.map(({ isCurrent, children, href }, index) => (
                    <S.NavigationItem
                        $isCurrent={isCurrent}
                        $variant={variant}
                        onClick={onItemClickCallback}
                        key={index}
                    >
                        <Link href={href}>{children}</Link>
                    </S.NavigationItem>
                ))}
        </S.NavigationList>
    )
}

export default Navigation
