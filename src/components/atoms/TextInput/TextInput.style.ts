import styled, { css } from 'styled-components'

import { IconWrapper } from '../Icon/Icon.style'

export const TextInputContainer = styled.div<{ $isFocused: boolean }>`
    position: relative;
    height: 7.4rem;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.shades.secondary[18]};
    color: ${({ theme }) => theme.palette.secondary};
    border-bottom: ${({ theme }) => theme.border.secondary};
    border-color: ${({ theme }) => theme.palette.shades.secondary[48]};
    transition: background-color 0.1s ease-out;

    ${({ theme, $isFocused }) =>
        $isFocused
            ? css`
                  background-color: ${theme.palette.shades.secondary[48]};
                  border-color: ${({ theme }) => theme.palette.secondary};
              `
            : css`
                  &:hover {
                      background-color: ${theme.palette.shades.secondary[38]};
                  }
              `}

    & > ${IconWrapper} {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        fill: ${({ theme }) => theme.palette.secondary};
    }
`

export const SLabel = styled.label<{ $isSmall: boolean }>`
    position: absolute;
    pointer-events: none;
    transition:
        top 0.1s ease-out,
        font-size 0.1s ease-out;

    ${({ $isSmall }) =>
        $isSmall
            ? css`
                  left: 2rem;
                  top: 1.2rem;
                  font-size: 1.6rem;
              `
            : css`
                  left: 2rem;
                  top: 2.5rem;
                  font-size: 2.4rem;
              `}
`

export const SInput = styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 3.8rem 2rem 1.3rem 2rem;
    outline: none;
    background: none;
    border: none;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.palette.secondary};
`
