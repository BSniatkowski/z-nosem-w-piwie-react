import { ILinkProps } from '../../atoms/Link/Link.types'

export type TNavVariants = 'header' | 'headerMobile' | 'footer'

export type TLinks = Array<ILinkProps & { isCurrent?: boolean }>

export interface INavigationProps {
    links: TLinks
    variant: TNavVariants
    onItemClickCallback?: () => void
}

export interface INavList {
    $variant: TNavVariants
}

export interface INavItem {
    $isCurrent?: boolean
    $variant: TNavVariants
}
