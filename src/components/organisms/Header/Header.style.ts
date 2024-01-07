import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const SHeader = styled.header<{ $isMenuActive: boolean }>`
    position: relative;
    width: calc(100vw - 4rem);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;

    ${({ theme, $isMenuActive }) =>
        $isMenuActive &&
        css`
            background-color: ${theme.palette.shades.primary[87]};
        `}
`

export const InnerHeader = styled.div<{ $isMenuActive: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    width: 100%;
    padding-bottom: 1rem;
    ${({ theme, $isMenuActive }) =>
        $isMenuActive &&
        css`
            border-bottom: ${theme.border};
        `};
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
