import { IContactFieldsValues } from '../src/components/templates/About/About.types'

export interface IOfferItem {
    translations: {
        'en-GB': {
            name: string
            description: string
        }
        'pl-PL': {
            name: string
            description: string
        }
    }
    capacity: number
    price: number
    imgSrc: string
}

export interface IEventItemElement {
    id: string
    translations: {
        'en-GB': {
            title: string
            date: string
            description: string
            imgSrc: string
        }
        'pl-PL': {
            title: string
            date: string
            description: string
            imgSrc: string
        }
    }
}

export interface IMerchItemElement {
    id: string
    imgSrc: string
}

export type TFetchOffer = () => Promise<{ beers: Array<IOfferItem>; coffee: Array<IOfferItem> }>

export type TFetchEvents = () => Promise<Array<IEventItemElement>>

export type TContactFormData = (data: IContactFieldsValues) => Promise<{ status: 200 }>

export type TFetchMerch = () => Promise<Array<IMerchItemElement>>
