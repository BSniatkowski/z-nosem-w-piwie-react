import styled, { css } from 'styled-components'

import { IconWrapper } from '../../atoms/Icon/Icon.style'

export const LanguagePickerContainer = styled.div<{ $isActive: boolean; $isMenuActive: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: ${({ theme, $isActive, $isMenuActive }) =>
        $isActive || $isMenuActive ? theme.palette.secondary : theme.palette.primary};
    font-size: 2.8rem;
    text-transform: uppercase;
    border-bottom: ${({ theme }) => theme.border.secondary};
    border-color: transparent;

    ${({ theme, $isActive }) =>
        $isActive &&
        css`
            background-color: ${theme.palette.shades.primary[87]};
            border-color: ${theme.palette.shades.secondary[18]};
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
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.shades.primary[87]};
`

export const LanguageOption = styled.li`
    padding: 1rem;
    text-align: center;
    transition: background-color 0.1s ease-out;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.palette.shades.secondary[38]};
    }
`
