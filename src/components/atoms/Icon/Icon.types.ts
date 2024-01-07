export type TSizes = 'normal' | 'big'

export interface IIconProps {
    size?: TSizes
    variant?:
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
    onClick?: () => void
}
