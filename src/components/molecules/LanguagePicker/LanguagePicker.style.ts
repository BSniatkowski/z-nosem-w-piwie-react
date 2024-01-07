import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const LanguagePickerContainer = styled.div<{ $isActive: boolean; $isMenuActive: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    color: ${({ theme, $isActive, $isMenuActive }) =>
        $isActive || $isMenuActive ? theme.palette.secondary : theme.palette.primary};
    font-size: 3.4rem;
    text-transform: uppercase;

    ${({ theme, $isActive }) =>
        $isActive &&
        css`
            background-color: ${theme.palette.primary};
        `};
`

export const ActualLanguageWithArrow = styled.div<{ $isActive: boolean; $isMenuActive: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    cursor: pointer;

    & > ${IconWrapper} {
        fill: ${({ theme, $isActive, $isMenuActive }) =>
            $isActive || $isMenuActive ? theme.palette.secondary : theme.palette.primary};
        transform: rotate(${({ $isActive }) => ($isActive ? '180deg' : '0deg')});
    }
`

export const LanguagesOptions = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.primary};
`

export const LanguageOption = styled.li`
    padding: 0.5rem 0;
    text-align: center;
    transition:
        color 0.1s ease-out,
        background-color 0.1s ease-out;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.palette.primary};
        background-color: ${({ theme }) => theme.palette.shades.secondary[38]};
    }
`
