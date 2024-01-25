import styled, { css } from 'styled-components'

import { IconWrapper } from '../../../../atoms/Icon/Icon.style'

export const DefaultAccordionHeadContainer = styled.div<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    ${({ $isActive, theme }) =>
        $isActive &&
        css`
            padding-bottom: 1rem;
            border-bottom: ${theme.border.secondary};
            border-color: ${theme.palette.shades.secondary[38]};
            border-width: 1px;
        `}

    font-size: 1.6rem;

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.secondary};
        transform: rotate(${({ $isActive }) => ($isActive ? 0 : 180)}deg);
    }
`
