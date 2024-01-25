import styled, { css } from 'styled-components'

export const CookiesModalInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

export const DisclaimerContainer = styled.p`
    padding: 1rem;
    color: ${({ theme }) => theme.palette.error};
    border: 1px solid ${({ theme }) => theme.palette.error};
`

export const OpenStaticModalText = styled.span`
    color: ${({ theme }) => theme.palette.info};
    cursor: pointer;
`

export const ButtonsContainer = styled.div<{ $isMobile: boolean }>`
    width: 100%;
    display: flex;
    gap: 2rem;

    ${({ $isMobile }) =>
        $isMobile
            ? css`
                  flex-direction: column;
                  justify-content: flex-start;
              `
            : css`
                  flex-direction: row;
                  justify-content: space-between;
              `}
`
