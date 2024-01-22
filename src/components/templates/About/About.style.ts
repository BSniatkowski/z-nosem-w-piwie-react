import styled, { css } from 'styled-components'

import { SCard } from '../../atoms/Card/Card.style'

export const AboutSection = styled.section`
    width: 100%;
    padding: 4rem 2rem;
    background-color: ${({ theme }) => theme.palette.secondary};
`

export const AboutSectionInner = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & ${SCard} {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: ${({ theme }) => theme.palette.secondary};
    }
`

export const MapContainer = styled.div`
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;

    & > * {
        width: 100%;
    }
`

export const CardsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`

export const ContactAndMerchContainer = styled.section<{ $isTablet: boolean }>`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ $isTablet }) => ($isTablet ? 'auto' : 'auto max-content')};
    gap: 4rem;
`

export const ContactCardTitle = styled.h4.attrs({ className: 'decorative' })`
    text-align: center;
    margin-bottom: 2rem;
`

export const ContentRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    & > span {
        width: max-content;
    }
`

export const EventContainer = styled.div<{ $isMobile: boolean }>`
    display: flex;
    gap: 2rem;

    ${({ $isMobile }) =>
        $isMobile &&
        css`
            align-items: center;
            flex-direction: column;
        `}
`

export const EventImg = styled.img`
    border-radius: 1rem;
    border: ${({ theme }) => theme.border.secondary};
    border-color: ${({ theme }) => theme.palette.secondary};
    max-height: 50rem;
    max-width: 50rem;
    height: auto;
    width: 100%;
`

export const EventDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const MerchTitle = styled.h4.attrs({ className: 'decorative' })`
    display: flex;
    column-gap: 1rem;
    align-items: center;
    fill: ${({ theme }) => theme.palette.secondary};
`

export const MerchImg = styled.img`
    max-width: 25rem !important;
`
