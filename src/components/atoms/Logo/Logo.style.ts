import styled, { css } from 'styled-components'

export const LogoWrapper = styled.div<{ $isDark?: boolean; $withFrame?: boolean }>`
    height: 10rem;
    width: fit-content;

    & > svg {
        height: inherit;
        width: inherit;
    }

    ${({ theme, $isDark }) =>
        $isDark &&
        css`
            & > svg > #Glasses {
                & > path {
                    stroke: ${theme.palette.secondary};
                }

                & > #nose,
                rect {
                    fill: ${theme.palette.secondary};
                }
            }
        `}

    ${({ theme, $withFrame }) =>
        $withFrame &&
        css`
            height: 5rem;
            padding: 1rem;
            border-radius: 2rem;
            background-color: ${theme.palette.shades.secondary[48]};
        `}
`
