import { TFields } from '../../organisms/Form/Form.types'

export interface IContactFieldsValues {
    fullname: string
    email: string
    message: string
}

export type TContactFields = TFields<IContactFieldsValues>
