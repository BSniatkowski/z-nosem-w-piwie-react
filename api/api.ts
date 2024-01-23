import { eventsData, merchData, offerData } from './api.fakeData'
import {
    TContactFormRequest,
    TFetchEvents,
    TFetchMerch,
    TFetchOffer,
    TNewsletterFormRequest,
} from './api.types'

const fakeServerResponseDelay = async (minDelay?: number) =>
    new Promise((res) => {
        setTimeout(res, minDelay ?? 100 + Math.random() * 500)
    })

export const fetchOffer: TFetchOffer = async () => {
    await fakeServerResponseDelay()

    return offerData
}

export const fetchEvents: TFetchEvents = async () => {
    await fakeServerResponseDelay()

    return eventsData
}

export const fetchMerch: TFetchMerch = async () => {
    await fakeServerResponseDelay()

    return merchData
}

export const NewsletterRequest: TNewsletterFormRequest = async () => {
    await fakeServerResponseDelay(1000)

    return { status: 200 }
}

export const ContactFormRequest: TContactFormRequest = async () => {
    await fakeServerResponseDelay(1000)

    return { status: 200 }
}
