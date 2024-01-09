import Link from '../../atoms/Link/Link'
import * as S from './Navigation.style'
import { INavigationProps } from './Navigation.types'

const Navigation: React.FC<INavigationProps> = ({ variant, links, onItemClickCallback }) => {
    return (
        <S.NavigationList $variant={variant}>
            {links.length > 0 &&
                links.map(({ isCurrent, label, href }, index) => (
                    <S.NavigationItem
                        $isCurrent={isCurrent}
                        $variant={variant}
                        onClick={onItemClickCallback}
                        key={index}
                    >
                        <Link label={label} href={href} />
                    </S.NavigationItem>
                ))}
        </S.NavigationList>
    )
}

export default Navigation
