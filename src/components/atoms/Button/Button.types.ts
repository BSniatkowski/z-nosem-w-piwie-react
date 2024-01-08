import { TIconVariants } from '../Icon/Icon.types'

export interface IButtonProps {
    label?: string
    iconVariant?: TIconVariants
    onClick: () => void
}
