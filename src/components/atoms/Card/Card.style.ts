import styled, { css } from 'styled-components'

export const SCard = styled.div<{ $size: 'full' | 'fit' | number }>`
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.primary};
    box-shadow: ${({ theme }) => theme.boxShadow.secondary};

    height: fit-content;
    ${({ $size }) =>
        typeof $size === 'number'
            ? css`
                  width: 100%;
                  max-width: ${$size}rem;
              `
            : {
                  full: css`
                      width: 100%;
                  `,
                  fit: css`
                      width: fit-content;
                  `,
              }[$size]};
`
