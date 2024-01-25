import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const ModalOverlay = styled.div<{
    $isOverlayVisible: boolean
    $position: 'bottom' | 'center'
}>`
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100svh;
    width: 100vw;

    ${({ theme, $isOverlayVisible }) =>
        $isOverlayVisible
            ? css`
                  background-color: ${theme.palette.shades.black[38]};
              `
            : css`
                  pointer-events: none;
              `};
`

export const SModal = styled.div<{ $position: 'bottom' | 'center' }>`
    position: absolute;
    z-index: 9999;
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.primary};
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.palette.shades.secondary[18]};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.shades.secondary[48]};
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.secondary};
    }

    ${({ $position = 'center' }) =>
        ({
            center: css`
                --maxSize: calc(100% - 4rem);

                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: fit-content;
                max-height: var(--maxSize);
                width: 80rem;
                max-width: var(--maxSize);
            `,
            bottom: css`
                bottom: 0;
                left: 0;
                height: fit-content;
                max-height: 100%;
                width: 100%;
                max-width: 100%;
            `,
        })[$position]}

    & > ${IconWrapper} {
        position: absolute;
        top: 0;
        right: 0;
        --size: 2.4rem;
        overflow: hidden;
        fill: ${({ theme }) => theme.palette.secondary};
    }
`
