import { MessageFormatElement } from 'react-intl'

export type TLocales = 'pl-PL' | 'en-GB'

export type TLocaleMessages = Record<string, string> | Record<string, MessageFormatElement[]>

export type TAllLocalesMessages = Record<TLocales, TLocaleMessages>
export interface ILanguagePickerProps {
    actualLocale: TLocales
    setActualLocale: (lang: TLocales) => void
    isMenuActive: boolean
}
