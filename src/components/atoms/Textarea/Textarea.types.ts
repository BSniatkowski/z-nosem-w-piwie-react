import { InputHTMLAttributes } from 'react'

import { TIconVariants } from '../Icon/Icon.types'

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string
    iconVariant?: TIconVariants
    onIconClick?: () => void
}
