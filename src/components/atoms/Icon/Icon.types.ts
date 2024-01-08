export type TSizes = 'normal' | 'big'
export type TIconVariants =
    | 'close'
    | 'copyright'
    | 'facebook'
    | 'instagram'
    | 'menu'
    | 'merch'
    | 'send'
    | 'share'
    | 'tiktok'
    | 'x'
    | 'youtube'
    | 'expand'
export interface IIconProps {
    size?: TSizes
    variant?: TIconVariants
    onClick?: () => void
}
