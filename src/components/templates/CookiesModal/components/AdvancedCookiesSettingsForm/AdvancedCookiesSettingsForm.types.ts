import { TFields } from '../../../../organisms/Form/Form.types'

export interface IAdvancedCookiesSettingsFormFieldsValues {
    essential: boolean
    performance: boolean
    functional: boolean
    advertising: boolean
    social: boolean
    analytics: boolean
}

export type TAdvancedCookiesSettingsFormFields = TFields<IAdvancedCookiesSettingsFormFieldsValues>

export interface IAdvancedCookiesSettingsFormProps {
    buttonsElement: React.ReactElement
}
