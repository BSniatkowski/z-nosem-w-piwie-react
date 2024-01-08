import styled, { css } from 'styled-components'

import { TSizes } from './Icon.types'

export const IconWrapper = styled.div<{ $size: TSizes; $isClickable: boolean }>`
    --size: ${({ $size }) => ({ normal: 3.2, big: 4.2 })[$size]}rem;
    height: var(--size);
    width: var(--size);
    pointer-events: none;

    ${({ theme, $isClickable }) =>
        $isClickable &&
        css`
            position: relative;
            pointer-events: unset;
            cursor: pointer;
            &::after {
                position: absolute;
                top: -0.5rem;
                left: -0.5rem;
                content: '';
                display: block;
                height: calc(100% + 1rem);
                width: calc(100% + 1rem);
                transition: background-color 0.1s ease-out;
                border-radius: 100%;
            }

            &:hover::after {
                content: '';
                background-color: ${theme.palette.shades.secondary[18]};
            }
        `}

    & > svg {
        height: inherit;
        width: inherit;
    }
`
