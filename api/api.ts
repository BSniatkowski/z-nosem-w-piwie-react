import { eventsData, merchData, offerData } from './api.fakeData'
import { TContactFormData, TFetchEvents, TFetchMerch, TFetchOffer } from './api.types'

const fakeServerResponseDelay = async () =>
    new Promise((res) => {
        setTimeout(res, 100 + Math.random() * 300)
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

export const ContactFormData: TContactFormData = async () => {
    await fakeServerResponseDelay()

    return { status: 200 }
}
