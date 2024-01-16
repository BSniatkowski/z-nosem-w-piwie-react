import styled from 'styled-components'

import home_background from '/imgs/home_background.png'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const HeaderSection = styled.section`
    height: 100vh;
    height: 100svh;
    padding: 0 2rem 2rem 2rem;
    background-color: ${({ theme }) => theme.palette.shades.black[38]};
    background-image: url(${home_background});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    background-position: center;
`

export const SHome = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MainTextFrame = styled.div`
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    border-left: ${({ theme }) => theme.border.primary};

    & > h1 {
        color: ${({ theme }) => theme.palette.primary};
    }

    & > p {
        color: ${({ theme }) => theme.palette.white};
    }
`

export const FollowUs = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    column-gap: 2rem;
`

export const FollowUsTextContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
    border-right: ${({ theme }) => theme.border.primary};
    color: ${({ theme }) => theme.palette.primary};
    font-size: 2.8rem;
`

export const FollowUsIconsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    & > ${IconWrapper} {
        fill: ${({ theme }) => theme.palette.primary};
    }
`
