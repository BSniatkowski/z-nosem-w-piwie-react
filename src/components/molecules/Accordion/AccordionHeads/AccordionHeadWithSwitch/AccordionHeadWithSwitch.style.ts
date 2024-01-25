import styled from 'styled-components'

import { IconWrapper } from '../../../../atoms/Icon/Icon.style'
import { DefaultAccordionHeadContainer } from '../DefaultAccordionHead/DefaultAccordionHead.style'

export const ArrowWithTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 1rem;
`

export const AccordionHeadWithSwitchContainer = styled(DefaultAccordionHeadContainer)`
    justify-content: space-between;

    & > ${ArrowWithTitleContainer} > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.secondary};
        transform: rotate(${({ $isActive }) => ($isActive ? 0 : 180)}deg);
    }
`
