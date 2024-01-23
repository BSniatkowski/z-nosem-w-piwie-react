import styled from 'styled-components'

export const LoaderContainer = styled.div`
    position: relative;
`

export const LoaderContent = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary};

    --color: ${({ theme }) => theme.palette.secondary};
`

export const LoaderMessage = styled.span.attrs({ className: 'decorative' })`
    font-size: 3.2rem;
    line-height: 1em;
    color: var(--color);
    text-align: center;
`

export const SLoader = styled.span`
    --size: 1.5rem;

    @keyframes shadowRolling {
        0% {
            box-shadow:
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        12% {
            box-shadow:
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        25% {
            box-shadow:
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        36% {
            box-shadow:
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0);
        }
        50% {
            box-shadow:
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color);
        }
        62% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color);
        }
        75% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color);
        }
        87% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color);
        }
        100% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0);
        }
    }

    position: relative;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    display: block;
    margin: var(--size) auto;
    position: relative;
    color: var(--color);
    left: calc(var(--size) * -12);
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;
`
