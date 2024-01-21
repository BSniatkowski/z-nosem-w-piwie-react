import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'

export interface IHomeProps {
    actualLocale: TLocales
    setActualIntlLocale: (lang: TLocales) => void
}
