import styled, { css } from 'styled-components'

import { SLink } from '../../atoms/Link/Link.style'
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
                position: absolute;
                top: 100%;
                width: calc(100vw - 4rem);
                padding: 0 2rem 1rem 2rem;
                flex-direction: column;
                font-size: 3.4rem;
                color: ${theme.palette.secondary};
                background-color: ${theme.palette.shades.primary[87]};
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
    cursor: pointer;

    ${({ theme, $variant }) =>
        ({
            header: css`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,
            headerMobile: css`
                & > ${SLink} {
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    transition:
                        color 0.1s ease-out,
                        background-color 0.1s ease-out;

                    &:hover {
                        color: ${theme.palette.shades.primary[87]};
                        background-color: ${theme.palette.shades.secondary[38]};
                    }
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
