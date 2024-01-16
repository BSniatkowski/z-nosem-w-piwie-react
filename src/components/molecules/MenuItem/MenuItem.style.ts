import styled, { css } from 'styled-components'

import { directions } from './MenuItem.types'

export const MenuItemContainer = styled.div<{ $direction: directions }>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    ${({ $direction }) =>
        ({
            normal: '',
            reversed: css`
                flex-direction: row-reverse;
            `,
            column: css`
                flex-direction: column-reverse;
                align-items: center;
            `,
        })[$direction]}
`

export const ItemImg = styled.img`
    --size: 30rem;
    height: 100%;
    max-height: var(--size);
    width: 100%;
    max-width: var(--size);
    border-radius: 100%;
    object-fit: contain;
    aspect-ratio: 1;
    border: 1rem solid ${({ theme }) => theme.palette.secondary};
    background: ${({ theme }) => theme.palette.white};
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.palette.secondary};
`

export const NameWithPrice = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`
