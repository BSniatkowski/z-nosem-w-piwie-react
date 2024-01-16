import styled, { css } from 'styled-components'

import { SLink } from '../../atoms/Link/Link.style'
import { INavItem, INavList } from './Navigation.types'

export const NavigationList = styled.ul<INavList>`
    display: flex;
    font-size: 2.8rem;

    ${({ theme, $variant }) =>
        ({
            header: css`
                flex-direction: row;
                column-gap: 6rem;
                color: ${theme.palette.primary};
            `,
            headerMobile: css`
                position: absolute;
                top: 100%;
                left: -2rem;
                width: calc(100% + 4rem);
                padding: 0 3rem 1rem 3rem;
                flex-direction: column;
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

    ${({ theme, $variant, $isCurrent }) =>
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
                    transition: background-color 0.1s ease-out;

                    &:hover {
                        background-color: ${theme.palette.shades.secondary[38]};
                    }
                }
            `,
            footer: css`
                font-size: 1.4rem;
                color: ${theme.palette.shades.secondary[48]};
                transition: color 0.1s ease-out;

                &:hover {
                    color: ${theme.palette.secondary};
                }

                ${$isCurrent &&
                css`
                    color: ${theme.palette.secondary};
                    pointer-events: none;
                `}
            `,
        })[$variant]}
`
