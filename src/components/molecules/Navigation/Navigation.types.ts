export type TNavVariants = 'header' | 'headerMobile' | 'footer'

export interface INavigationProps {
    variant: TNavVariants
}

export interface INavList {
    $variant: TNavVariants
}

export interface INavItem {
    $variant: TNavVariants
}
