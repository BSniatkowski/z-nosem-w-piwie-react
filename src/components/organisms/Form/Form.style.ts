import styled, { css } from 'styled-components'

export const SForm = styled.form<{ $variant?: 'normal' | 'collapsed' }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${({ $variant = 'normal' }) =>
        ({
            normal: css`
                row-gap: 1rem;
            `,
            collapsed: css`
                & > *:last-of-type {
                    margin-top: 2rem;
                }
            `,
        })[$variant]}
`

export const FieldContainer = styled.div<{
    $withoutErrorMessage?: boolean
    $isErrorActive: boolean
}>`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${({ $withoutErrorMessage, $isErrorActive }) =>
        $withoutErrorMessage
            ? ''
            : $isErrorActive
              ? css`
                    row-gap: 0.4rem;
                `
              : css`
                    padding-bottom: 2rem;
                `}
`

export const SLabel = styled.label`
    font-size: 2.4rem;
`

export const SwitchWrapper = styled.div``

export const ErrorMessage = styled.span`
    font-size: 1.6rem;
    line-height: 1em;
    color: ${({ theme }) => theme.palette.error};
`
