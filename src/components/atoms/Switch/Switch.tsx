import { forwardRef } from 'react'

import * as S from './Switch.style'
import { ISwitchProps } from './Switch.types'

const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
    ({ checked, disabled, ...props }, ref) => {
        console.log(props)

        return (
            <S.SSwitch $isActive={checked} $isDisabled={disabled}>
                <S.SSwitchButton $isActive={checked} $isDisabled={disabled} />
                <S.HiddenInput ref={ref} {...props} checked={checked} disabled={disabled} />
            </S.SSwitch>
        )
    },
)

export default Switch
