import styled, { css } from 'styled-components'

export const OfferSection = styled.section`
    padding: 2rem;
`

export const OfferSectionInner = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const ItemsCategoryContainer = styled.div<{
    $isMobile: boolean
    $direction?: 'default' | 'reverse'
}>`
    display: flex;
    ${({ $isMobile, $direction }) =>
        $isMobile
            ? css`
                  flex-direction: column;
              `
            : $direction === 'reverse' &&
              css`
                  flex-direction: row-reverse;
              `}
`

export const ItemsCategoryNameContainer = styled.div`
    position: relative;
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
    text-align: center;
`

export const ItemsCategoryName = styled.h1.attrs({
    className: 'decorative',
})`
    position: sticky;
    top: 25%;
    color: ${({ theme }) => theme.palette.primary};
    text-align: center;
`

export const ItemsList = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

export const CategoriesDivider = styled.hr`
    height: 5rem;
    width: 100%;
    margin: 0;
    border: none;
    background-color: ${({ theme }) => theme.palette.secondary};
`
