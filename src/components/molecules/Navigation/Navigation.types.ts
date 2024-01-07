export type TNavVariants = 'header' | 'headerMobile' | 'footer'

export interface INavigationProps {
    variant: TNavVariants
    onItemClickCallback?: () => void
}

export interface INavList {
    $variant: TNavVariants
}

export interface INavItem {
    $variant: TNavVariants
}
