import styled from 'styled-components'

export const SCard = styled.div<{ $size: 'full' | 'fit' | number }>`
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.primary};
    box-shadow: ${({ theme }) => theme.boxShadow};

    width: ${({ $size }) =>
        typeof $size === 'number' ? `${$size}rem` : { full: '100%', fit: 'fit-content' }[$size]};
`
