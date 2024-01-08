import styled from 'styled-components'

import { IconWrapper } from '../Icon/Icon.style'

export const SButton = styled.button`
    padding: 1rem;
    display: flex;
    align-items: center;
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
