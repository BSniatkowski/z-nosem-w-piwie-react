import { forwardRef } from 'react'

import * as S from './Switch.style'
import { ISwitchProps } from './Switch.types'

const Switch = forwardRef<HTMLInputElement, ISwitchProps>(({ value, disabled, ...props }, ref) => {
    return (
        <S.SSwitch $isActive={!!value} $isDisabled={disabled}>
            <S.SSwitchButton $isActive={!!value} $isDisabled={disabled} />
            <S.HiddenInput {...props} checked={!!value} disabled={disabled} ref={ref} />
        </S.SSwitch>
    )
})

export default Switch
