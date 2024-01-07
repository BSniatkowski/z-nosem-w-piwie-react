import { useCallback, useMemo, useState } from 'react'

import { useOutsideClick } from '../../../hooks/useOutsideClick/useOutsideClick'
import Icon from '../../atoms/Icon/Icon'
import * as S from './LanguagePicker.style'
import { ILanguagePickerProps } from './LanguagePicker.types'

const langauges = ['pl', 'en']

const LanguagePicker: React.FC<ILanguagePickerProps> = ({ isMenuActive }) => {
    const [isActive, setIsActive] = useState(false)
    const [actualLanguage, setActualLanguage] = useState('pl')

    const langaugesOptions = useMemo(
        () => langauges.filter((lang) => lang !== actualLanguage),
        [actualLanguage],
    )

    const onLangItemClick = useCallback((lang: string) => {
        setActualLanguage(lang)
        setIsActive(false)
    }, [])

    const elementRef = useOutsideClick<HTMLDivElement>(() => setIsActive(false))

    return (
        <S.LanguagePickerContainer
            $isActive={isActive}
            $isMenuActive={isMenuActive}
            ref={elementRef}
        >
            <S.ActualLanguageWithArrow
                $isActive={isActive}
                $isMenuActive={isMenuActive}
                onClick={() => setIsActive(!isActive)}
            >
                {actualLanguage}
                <Icon variant='expand' />
            </S.ActualLanguageWithArrow>
            {isActive && (
                <S.LanguagesOptions>
                    {langaugesOptions.length > 0 &&
                        langaugesOptions.map((lang) => (
                            <S.LanguageOption key={lang} onClick={() => onLangItemClick(lang)}>
                                {lang}
                            </S.LanguageOption>
                        ))}
                </S.LanguagesOptions>
            )}
        </S.LanguagePickerContainer>
    )
}

export default LanguagePicker
