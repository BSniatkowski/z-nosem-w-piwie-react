import styled, { css } from 'styled-components'

import { IconWrapper } from '../Icon/Icon.style'

export const TextareaContainer = styled.div<{ $isFocused: boolean }>`
    position: relative;
    height: fit-content;
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
        top: calc(var(--size) / 2 + 2rem);
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

export const STextarea = styled.textarea.attrs({ rows: 4 })`
    position: relative;
    height: 100%;
    width: 100%;
    margin-top: 3.8rem;
    padding: 0 2rem 1.3rem 2rem;
    outline: none;
    background: none;
    border: none;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.palette.secondary};
    resize: none;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.palette.shades.secondary[18]};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.secondary};
    }
`
