import { forwardRef } from 'react'

import * as S from './Switch.style'
import { ISwitchProps } from './Switch.types'

// "readOnly" and "disabled" params have inconsistent behaviour. https://github.com/orgs/react-hook-form/discussions/4413?fbclid=IwAR1JyK4VGeFyp--WcHYLwZmCETkr8V3gHLm3t1dX6xYN6tyYBS7Lv5kc2Po
// Temporary is more readable to just use readOnly defined as param at field object but styled-component custom param "$disabled" (this way param doesnt interfere with "disabled" behaviour and doesnt lead to more problems with useFormHook as undefined value )

const Switch = forwardRef<HTMLInputElement, ISwitchProps>(({ value, readOnly, ...props }, ref) => {
    return (
        <S.SSwitch $isActive={!!value} $isDisabled={readOnly}>
            <S.SSwitchButton $isActive={!!value} $isDisabled={readOnly} />
            <S.HiddenInput {...props} checked={!!value} $disabled={readOnly} ref={ref} />
        </S.SSwitch>
    )
})

export default Switch
