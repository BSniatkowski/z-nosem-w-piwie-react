import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const SHeader = styled.header<{ $isMenuActive: boolean }>`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;

    ${({ theme, $isMenuActive }) =>
        $isMenuActive &&
        css`
            &::before {
                position: absolute;
                top: 0;
                content: '';
                display: block;
                width: 100vw;
                height: 100%;
                background-color: ${theme.palette.shades.primary[87]};
            }
        `}
`

export const InnerHeader = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding-bottom: 1rem;
`

export const MobileMenuContainer = styled.div<{ $isMenuActive: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 2rem;

    & > ${IconWrapper} {
        cursor: pointer;
        fill: ${({ theme, $isMenuActive }) =>
            $isMenuActive ? theme.palette.secondary : theme.palette.primary};
    }
`
