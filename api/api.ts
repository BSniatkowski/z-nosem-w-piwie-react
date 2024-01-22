import { eventsData, merchData, offerData } from './api.fakeData'
import { TContactFormData, TFetchEvents, TFetchMerch, TFetchOffer } from './api.types'

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

export const ContactFormData: TContactFormData = async () => {
    await fakeServerResponseDelay(1000)

    return { status: 200 }
}
