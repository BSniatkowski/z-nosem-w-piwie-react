import { TLocales } from '../../components/molecules/LanguagePicker/LanguagePicker.types'

export interface IMainPageProps {
    actualLocale: TLocales
    setActualIntlLocale: (lang: TLocales) => void
}
