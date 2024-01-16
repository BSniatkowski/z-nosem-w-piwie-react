import styled from 'styled-components'

import { IconWrapper } from '../Icon/Icon.style'

export const SButton = styled.button<{ $size?: 'full' | 'fit'; $isSingleItem: boolean }>`
    width: ${({ $size }) => ($size === 'full' ? '100%' : 'fit-content')};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${({ $isSingleItem }) => ($isSingleItem ? 'center' : 'space-between')};
    column-gap: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.accent};
    font-size: 3.4rem;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.palette.shades.secondary[48]};
    }

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.accent};
    }
`
