import * as S from './Switch.style'
import { ISwitchProps } from './Switch.types'

const Link: React.FC<ISwitchProps> = ({ checked, disabled }) => {
    return (
        <S.SSwitch $isActive={checked} $isDisabled={disabled}>
            <S.SSwitchButton $isActive={checked} $isDisabled={disabled} />
            <S.HiddenInput />
        </S.SSwitch>
    )
}

export default Link
