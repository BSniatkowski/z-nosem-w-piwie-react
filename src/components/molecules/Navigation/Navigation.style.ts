import styled, { css } from 'styled-components'

import { INavItem, INavList } from './Navigation.types'

export const NavigationList = styled.ul<INavList>`
    display: flex;

    ${({ theme, $variant }) =>
        ({
            header: css`
                flex-direction: row;
                column-gap: 6rem;
                font-size: 3.4rem;
                color: ${theme.palette.primary};
            `,
            headerMobile: css`
                flex-direction: column;
                padding-top: 1rem;
                font-size: 3.4rem;
                color: ${theme.palette.secondary};
            `,
            footer: css`
                flex-direction: column;
                font-size: 1.4rem;
                gap: 1rem;
                color: ${theme.palette.shades.primary[48]};
            `,
        })[$variant]}
`

export const NavigationItem = styled.li<INavItem>`
    ${({ theme, $variant }) =>
        ({
            header: css`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,
            headerMobile: css`
                padding: 1rem;
                text-align: center;
                transition:
                    color 0.1s ease-out,
                    background-color 0.1s ease-out;

                &:hover {
                    color: ${theme.palette.shades.primary[48]};
                    background-color: ${theme.palette.shades.secondary[38]};
                }
            `,
            footer: css`
                transition: color 0.1s ease-out;

                &:hover {
                    color: ${theme.palette.primary};
                }
            `,
        })[$variant]}
`
