import styled, { css } from 'styled-components'

export const SSwitch = styled.div<{ $isActive?: boolean; $isDisabled?: boolean }>`
    position: relative;
    height: 3rem;
    width: 6rem;
    border-radius: 2rem;
    border: ${({ theme }) => theme.border.secondary};
    transition: background-color 0.15s ease-out;

    background-color: ${({ $isActive, theme }) =>
        $isActive ? theme.palette.shades.secondary[48] : theme.palette.shades.secondary[18]};

    ${({ $isDisabled, theme }) =>
        $isDisabled
            ? css`
                  pointer-events: none;
                  border-color: ${theme.palette.shades.secondary[48]};
                  background-color: ${theme.palette.shades.secondary[48]};
              `
            : css`
                  border-color: ${theme.palette.secondary};
              `}
`

export const SSwitchButton = styled.div<{ $isActive?: boolean; $isDisabled?: boolean }>`
    position: absolute;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    transition:
        left 0.15s ease-out,
        background-color 0.15s ease-out;

    ${({ $isActive, theme }) =>
        $isActive
            ? css`
                  top: calc(0.5rem - 2px);
                  left: calc(100% - 2rem - 2px);
                  background-color: ${theme.palette.secondary};
              `
            : css`
                  top: calc(0.5rem - 2px);
                  left: calc(0.5rem - 2px);
                  background-color: ${theme.palette.shades.secondary[48]};
              `};

    ${({ $isDisabled, theme }) =>
        $isDisabled
            ? css`
                  background-color: ${theme.palette.shades.secondary[48]};
              `
            : css`
                  border-color: ${theme.palette.secondary};
              `};
`

export const HiddenInput = styled.input.attrs({ type: 'checkbox' })<{ $disabled?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;

    ${({ $disabled }) =>
        $disabled &&
        css`
            pointer-events: none;
        `}
`
