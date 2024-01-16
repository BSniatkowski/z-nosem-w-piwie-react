import styled from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const SFooter = styled.footer`
    width: 100%;
    padding: 2rem;
    color: ${({ theme }) => theme.palette.primary};
`

export const InnerFooter = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const UpperPart = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`

export const FooterSectionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const FooterSectionName = styled.span`
    color: ${({ theme }) => theme.palette.secondary};
    border-bottom: ${({ theme }) => theme.border.secondary};
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
