import { TIconVariants } from '../Icon/Icon.types'

export interface IButtonProps {
    size?: 'full' | 'fit'
    label?: string
    iconVariant?: TIconVariants
    onClick: () => void
}
