import Icon from '../../../../atoms/Icon/Icon'
import Switch from '../../../../atoms/Switch/Switch'
import * as S from './AccordionHeadWithSwitch.style'
import { IAccordionHeadWithSwitchProps } from './AccordionHeadWithSwitch.types'

const AccordionHeadWithSwitch: React.FC<IAccordionHeadWithSwitchProps> = ({
    title,
    isActive,
    toggleIsActive,
    ...props
}) => {
    return (
        <S.AccordionHeadWithSwitchContainer $isActive={isActive}>
            <S.ArrowWithTitleContainer>
                <Icon variant='expand' onClick={toggleIsActive} />
                {title}
            </S.ArrowWithTitleContainer>
            <Switch {...props} />
        </S.AccordionHeadWithSwitchContainer>
    )
}

export default AccordionHeadWithSwitch
