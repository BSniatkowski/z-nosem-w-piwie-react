import { forwardRef } from 'react'

import Icon from '../../../../atoms/Icon/Icon'
import Switch from '../../../../atoms/Switch/Switch'
import * as S from './AccordionHeadWithSwitch.style'
import { IAccordionHeadWithSwitchProps } from './AccordionHeadWithSwitch.types'

const AccordionHeadWithSwitch = forwardRef<HTMLInputElement, IAccordionHeadWithSwitchProps>(
    ({ title, isActive, toggleIsActive, ...props }, ref) => {
        return (
            <S.AccordionHeadWithSwitchContainer $isActive={isActive}>
                <S.ArrowWithTitleContainer>
                    <Icon variant='expand' onClick={toggleIsActive} />
                    {title}
                </S.ArrowWithTitleContainer>
                <Switch {...props} ref={ref} />
            </S.AccordionHeadWithSwitchContainer>
        )
    },
)

export default AccordionHeadWithSwitch
