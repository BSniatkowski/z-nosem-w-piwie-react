import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'

export interface IMainProps {
    actualLocale: TLocales
    setActualIntlLocale: (lang: TLocales) => void
}
