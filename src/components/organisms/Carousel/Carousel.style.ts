import styled from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
`

export const CarouselItemsContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
`

export const CarouselItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    width: 100%;

    & > img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        object-fit: fill;
        mix-blend-mode: multiply;
    }
`

export const CarouselItemsDots = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 1rem;

    & > ${IconWrapper} {
        height: 1rem;
        width: 1rem;
    }
`
