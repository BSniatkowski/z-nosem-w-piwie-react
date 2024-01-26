import { TIconVariants } from '../Icon/Icon.types'

export interface IButtonProps {
    variant?: 'normal' | 'outlined'
    size?: 'full' | 'fit'
    label?: string
    iconVariant?: TIconVariants
    onClick: () => void
}
