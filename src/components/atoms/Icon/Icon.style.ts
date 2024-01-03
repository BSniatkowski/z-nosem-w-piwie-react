import styled from 'styled-components'

import { TSizes } from './Icon.types'

export const IconImg = styled.img<{ $size: TSizes }>`
    --size: ${({ $size }) => ({ normal: 3.2, big: 4.2 })[$size]}rem;
    height: var(--size);
    width: var(--size);
`
