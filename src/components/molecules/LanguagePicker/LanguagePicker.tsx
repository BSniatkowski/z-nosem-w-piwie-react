import { useCallback, useMemo, useState } from 'react'

import { useOutsideClick } from '../../../hooks/useOutsideClick/useOutsideClick'
import Icon from '../../atoms/Icon/Icon'
import { EN, locales, PL } from './LanguagePicker.consts'
import * as S from './LanguagePicker.style'
import { ILanguagePickerProps, TLocales } from './LanguagePicker.types'

const LanguagePicker: React.FC<ILanguagePickerProps> = ({
    actualLocale,
    setActualLocale: setActualIntlLocale,
    isMenuActive,
}) => {
    const [isActive, setIsActive] = useState(false)

    const langaugesOptions = useMemo(
        () => locales.filter((lang) => lang !== actualLocale),
        [actualLocale],
    )

    const languageLabels = { [EN]: 'en', [PL]: 'pl' } satisfies Record<TLocales, string>

    const onLangItemClick = useCallback(
        (lang: TLocales) => {
            setActualIntlLocale(lang)
            setIsActive(false)
        },
        [setActualIntlLocale],
    )

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
                {languageLabels[actualLocale]}
                <Icon variant='expand' />
            </S.ActualLanguageWithArrow>
            {isActive && (
                <S.LanguagesOptions>
                    {langaugesOptions.length > 0 &&
                        langaugesOptions.map((lang) => (
                            <S.LanguageOption key={lang} onClick={() => onLangItemClick(lang)}>
                                {languageLabels[lang]}
                            </S.LanguageOption>
                        ))}
                </S.LanguagesOptions>
            )}
        </S.LanguagePickerContainer>
    )
}

export default LanguagePicker
