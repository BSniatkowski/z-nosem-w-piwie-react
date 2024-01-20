import { InputHTMLAttributes } from 'react'

import { TIconVariants } from '../Icon/Icon.types'

export interface ITextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string
    iconVariant?: TIconVariants
    onIconClick?: () => void
}
