import styled, { css } from 'styled-components'

export const SNewsletterInsideContainer = styled.div<{ $isFormActive: boolean }>`
    display: flex;
    flex-direction: column;
    row-gap: ${({ $isFormActive }) => ($isFormActive ? '2rem' : '4rem')};
    ${({ $isFormActive }) =>
        !$isFormActive &&
        css`
            padding-bottom: 1.2rem;
        `};
`
