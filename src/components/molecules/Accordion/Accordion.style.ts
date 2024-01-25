import styled, { css } from 'styled-components'

export const SAccordion = styled.div<{ $isActive: boolean }>`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    border: ${({ theme }) => theme.border.secondary};

    ${({ $isActive }) =>
        $isActive &&
        css`
            row-gap: 1rem;
        `}
`

export const AccordionHead = styled.div``

export const AccordionContent = styled.div<{
    $isActive: boolean
}>`
    ${({ $isActive }) =>
        $isActive
            ? css`
                  height: auto;
              `
            : css`
                  height: 0;

                  & * {
                      opacity: 0;
                  }
              `};
`
