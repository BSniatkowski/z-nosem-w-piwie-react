import { forwardRef, useMemo, useState } from 'react'

import Icon from '../Icon/Icon'
import * as S from './Textarea.style'
import { ITextareaProps } from './Textarea.types'

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
    ({ label, iconVariant, onIconClick, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false)
        const isLabelSmall = useMemo(() => !!props.value || isFocused, [props.value, isFocused])

        return (
            <S.TextareaContainer $isFocused={isFocused}>
                <S.SLabel $isSmall={isLabelSmall}>{label}</S.SLabel>
                <S.STextarea
                    ref={ref}
                    {...props}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {iconVariant && <Icon variant={iconVariant} onClick={onIconClick} />}
            </S.TextareaContainer>
        )
    },
)

export default Textarea
