import styled, { css } from 'styled-components'

import { IconWrapper } from '../Icon/Icon.style'

export const SButton = styled.button<{
    $variant: 'normal' | 'outlined'
    $size?: 'full' | 'fit'
    $isSingleItem: boolean
}>`
    width: ${({ $size }) => ($size === 'full' ? '100%' : 'fit-content')};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${({ $isSingleItem }) => ($isSingleItem ? 'center' : 'space-between')};
    column-gap: 1rem;
    font-size: 3.4rem;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    ${({ $variant = 'normal', theme }) =>
        ({
            normal: css`
                border: none;
                background-color: ${theme.palette.secondary};
                color: ${theme.palette.accent};
            `,
            outlined: css`
                border: ${theme.border.secondary};
                border-color: ${theme.palette.secondary};
                background: none;
                color: ${theme.palette.secondary};
            `,
        })[$variant]}

    &:hover {
        background-color: ${({ theme }) => theme.palette.shades.secondary[48]};
    }

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.accent};
    }
`
