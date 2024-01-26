import { SubmitHandler } from 'react-hook-form'

import { TFields } from '../../../../organisms/Form/Form.types'

export interface IAdvancedCookiesSettingsFormFieldsValues {
    essential: boolean
    performance: boolean
    functional: boolean
    advertising: boolean
    social: boolean
    analytics: boolean
    submitType?: 'save' | 'accept'
}

export type TAdvancedCookiesSettingsFormFields = TFields<IAdvancedCookiesSettingsFormFieldsValues>

export interface IAdvancedCookiesSettingsFormProps {
    isMobile: boolean
    fields: TAdvancedCookiesSettingsFormFields
    onSubmit: SubmitHandler<IAdvancedCookiesSettingsFormFieldsValues>
}
