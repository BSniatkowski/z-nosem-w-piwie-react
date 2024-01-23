import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const SSnackbar = styled.div<{
    $isMobile: boolean
    $variant?: 'info' | 'warning' | 'error'
    $isActive: boolean
}>`
    position: fixed;
    bottom: ${({ $isActive }) => ($isActive ? '1rem' : '-100%')};
    width: fit-content;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    transition: bottom 0.3s ease-out;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};

    ${({ $isMobile }) =>
        $isMobile
            ? css`
                  margin: 0 auto;
                  max-width: calc(100% - 4rem);
                  left: 0;
                  right: 0;
              `
            : css`
                  left: 50%;
                  transform: translateX(-50%);
              `}

    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ $variant = 'info', theme }) =>
        ({
            info: theme.palette.secondary,
            warning: theme.palette.warning,
            error: theme.palette.error,
        })[$variant]};

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.white};
    }
`

export const SnackbarMessage = styled.span`
    font-size: 2.4rem;
    line-height: 1.4em;
    text-align: start;
    align-self: center;
`
