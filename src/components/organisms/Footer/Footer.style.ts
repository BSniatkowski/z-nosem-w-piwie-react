import styled from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const SFooter = styled.footer`
    padding: 2rem 0;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    color: ${({ theme }) => theme.palette.primary};
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const FooterSectionName = styled.span`
    color: ${({ theme }) => theme.palette.secondary};
    border-bottom: ${({ theme }) => theme.border};
    border-color: ${({ theme }) => theme.palette.shades.secondary[38]};
`

export const Copyrights = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: ${({ theme }) => theme.palette.shades.secondary[48]};
    font-size: 1.6rem;

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.shades.secondary[48]};
    }
`
