import { TFields } from '../../../../organisms/Form/Form.types'

export interface INewsletterFieldsValues {
    email: string
}

export type TNewsletterFields = TFields<INewsletterFieldsValues>
