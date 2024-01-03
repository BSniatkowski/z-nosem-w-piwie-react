import styled from 'styled-components'

import { TSizes } from './Icon.types'

export const SIcon = styled.img<{ $size: TSizes }>`
    --size: ${({ $size }) => ({ normal: 32, big: 42 })[$size]};
    height: var(--size);
    width: var(--size);
`
