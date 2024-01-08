import { useMemo, useState } from 'react'

import Icon from '../Icon/Icon'
import * as S from './TextInput.style'
import { ITextInputProps } from './TextInput.types'

const TextInput: React.FC<ITextInputProps> = ({
    label,
    iconVariant,
    onIconClick,
    ...inputProps
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const isLabelSmall = useMemo(
        () => !!inputProps.value || isFocused,
        [inputProps.value, isFocused],
    )

    return (
        <S.TextInputContainer $isFocused={isFocused}>
            <S.SLabel $isSmall={isLabelSmall}>{label}</S.SLabel>
            <S.SInput
                {...inputProps}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {iconVariant && <Icon variant={iconVariant} onClick={onIconClick} />}
        </S.TextInputContainer>
    )
}

export default TextInput
