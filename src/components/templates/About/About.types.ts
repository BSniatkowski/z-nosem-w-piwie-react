import { TFields } from '../../organisms/Form/Form.types'

export interface IContactFieldsValues {
    fullname: string
    email: string
    message: string
}

export type TContactFields = TFields<IContactFieldsValues>

export interface ITranslatedEventItem {
    title: string
    date: string
    description: string
    imgSrc: string
}
