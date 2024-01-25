import * as S from './Switch.style'
import { ISwitchProps } from './Switch.types'

const Switch: React.FC<ISwitchProps> = ({ checked, disabled, ...props }) => {
    return (
        <S.SSwitch $isActive={checked} $isDisabled={disabled}>
            <S.SSwitchButton $isActive={checked} $isDisabled={disabled} />
            <S.HiddenInput checked={checked} disabled={disabled} {...props} />
        </S.SSwitch>
    )
}

export default Switch
