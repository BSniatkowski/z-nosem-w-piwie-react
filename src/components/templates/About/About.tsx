import { useCallback, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import * as yup from 'yup'

import map from '/imgs/map.webp'

import { ContactFormRequest } from '../../../../api/api'
import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import { useEvents } from '../../../hooks/useData/useEvents'
import { useMerch } from '../../../hooks/useData/useMerch'
import { useSnackbarDispatch } from '../../../providers/SnackbarProvider/hooks/useSnackbarDispatch'
import { ESnackbarDispatchActions } from '../../../providers/SnackbarProvider/SnackbarProvider.types'
import Button from '../../atoms/Button/Button'
import Card from '../../atoms/Card/Card'
import Icon from '../../atoms/Icon/Icon'
import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'
import Carousel from '../../organisms/Carousel/Carousel'
import { TCarouselItems } from '../../organisms/Carousel/Carousel.types'
import Form from '../../organisms/Form/Form'
import formMessages from '../../organisms/Form/Form.messages'
import { EFieldType } from '../../organisms/Form/Form.types'
import Loader from '../../organisms/Loader/Loader'
import messages from './About.messages'
import * as S from './About.style'
import { IContactFieldsValues, ITranslatedEventItem, TContactFields } from './About.types'
import NewsletterForm from './components/NewsletterForm/NewsletterForm'

const About = () => {
    const intl = useIntl()
    const isTablet = useBreakpoint('tablet')
    const isMobile = useBreakpoint('mobile')

    const dispatch = useSnackbarDispatch()

    const composeEventItemElement = useCallback(
        ({ title, date, description, imgSrc }: ITranslatedEventItem) => (
            <S.EventContainer $isMobile={isMobile}>
                <S.EventDescription>
                    <Button
                        label={`${title} ${date}`}
                        iconVariant='share'
                        onClick={async () => {
                            try {
                                await navigator.clipboard.writeText(
                                    'https://www.facebook.com/fake_event_link',
                                )

                                if (dispatch)
                                    dispatch({
                                        type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                                        payload: {
                                            variant: 'info',
                                            message: intl.formatMessage(
                                                messages.eventSnackbarMessageSuccess,
                                            ),
                                        },
                                    })
                            } catch (error) {
                                if (dispatch)
                                    dispatch({
                                        type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                                        payload: {
                                            variant: 'error',
                                            message: intl.formatMessage(
                                                messages.eventSnackbarMessageError,
                                                { error: String(error) },
                                            ),
                                        },
                                    })
                            }
                        }}
                    />
                    <p>{description}</p>
                </S.EventDescription>
                {imgSrc && (
                    <S.EventImg
                        src={imgSrc}
                        alt={`${title.replaceAll(' ', '_').toLowerCase()}_img`}
                    />
                )}
            </S.EventContainer>
        ),
        [dispatch, intl, isMobile],
    )

    const { data: eventsData, isLoading: eventsIsLoading, isSuccess: eventsIsSuccess } = useEvents()
    const { data: merchData, isLoading: merchIsLoading, isSuccess: merchIsSuccess } = useMerch()

    const translatedEventsItems = useMemo<TCarouselItems>(
        () =>
            (!eventsIsLoading &&
                eventsIsSuccess &&
                eventsData.map((event) => {
                    const text = event.translations[intl.locale as TLocales]

                    return { id: event.id, itemElement: composeEventItemElement(text) }
                })) ||
            [],
        [composeEventItemElement, eventsData, eventsIsLoading, eventsIsSuccess, intl.locale],
    )

    const merchItemsElements = useMemo<TCarouselItems>(
        () =>
            (!merchIsLoading &&
                merchIsSuccess &&
                merchData.map((merchItem) => ({
                    id: merchItem.id,
                    itemElement: (
                        <S.MerchImg
                            src={merchItem.imgSrc}
                            alt={`${merchItem.id.replaceAll(' ', '_').toLowerCase()}`}
                        />
                    ),
                }))) ||
            [],
        [merchData, merchIsLoading, merchIsSuccess],
    )

    const [isContactFormLoading, setIsContactFormLoading] = useState<boolean>(false)

    const contactFields = [
        {
            name: 'fullname',
            label: intl.formatMessage(messages.fullnameLabel),
            type: EFieldType.text,
            defaultValue: '',
        },
        {
            name: 'email',
            label: intl.formatMessage(messages.emailLabel),
            type: EFieldType.text,
            defaultValue: '',
        },
        {
            name: 'message',
            label: intl.formatMessage(messages.messageLabel),
            type: EFieldType.textarea,
            defaultValue: '',
        },
    ] satisfies TContactFields

    const contactValidationSchema = useMemo(
        () =>
            yup
                .object({
                    fullname: yup
                        .string()
                        .max(
                            128,
                            intl.formatMessage(formMessages.tooLongField, {
                                fieldName: intl.formatMessage(messages.fullnameLabel),
                                max: 128,
                            }),
                        )
                        .required(
                            intl.formatMessage(formMessages.requiredField, {
                                fieldName: intl.formatMessage(messages.fullnameLabel),
                            }),
                        ),
                    email: yup
                        .string()
                        .max(
                            128,
                            intl.formatMessage(formMessages.tooLongField, {
                                fieldName: intl.formatMessage(messages.emailLabel),
                                max: 128,
                            }),
                        )
                        .email(intl.formatMessage(formMessages.emailField))
                        .required(
                            intl.formatMessage(formMessages.requiredField, {
                                fieldName: intl.formatMessage(messages.emailLabel),
                            }),
                        ),
                    message: yup
                        .string()
                        .max(
                            512,
                            intl.formatMessage(formMessages.tooLongField, {
                                fieldName: intl.formatMessage(messages.messageLabel),
                                max: 512,
                            }),
                        )
                        .required(
                            intl.formatMessage(formMessages.requiredField, {
                                fieldName: intl.formatMessage(messages.messageLabel),
                            }),
                        ),
                })
                .required(),
        [intl],
    )

    const onContactSubmit: SubmitHandler<IContactFieldsValues> = useCallback(
        async (data) => {
            setIsContactFormLoading(true)
            const response = await ContactFormRequest(data)

            console.log(response)
            if (dispatch)
                dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                        variant: 'info',
                        message: intl.formatMessage(messages.contactFormSnackbarMessage),
                    },
                })
            setIsContactFormLoading(false)
        },
        [dispatch, intl],
    )

    return (
        <S.AboutSection id='about'>
            <S.AboutSectionInner>
                <Card size='full'>
                    <h1 className='decorative'>
                        <FormattedMessage {...messages.pubName} />
                    </h1>
                    <p>
                        <FormattedMessage {...messages.descriptionPart1} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart2} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart3} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart4} />
                    </p>
                    <S.MapContainer>
                        <img src={map} alt='local_localization_map' />
                    </S.MapContainer>
                    <h4 className='decorative' style={{ textAlign: 'center' }}>
                        <FormattedMessage {...messages.address} />
                    </h4>
                </Card>
                <S.CardsContainer>
                    <Card size='fit'>
                        <h4 className='decorative'>
                            <FormattedMessage {...messages.openingHours} />
                        </h4>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHMT} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHMTHours} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHFS} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHFSHours} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHS} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHSHours} />
                            </span>
                        </S.ContentRow>
                    </Card>
                    <Card size='fit'>
                        <S.ContentRow>
                            <h4 className='decorative'>
                                <FormattedMessage {...messages.emailTitle} />
                            </h4>
                            <span>
                                <FormattedMessage {...messages.email} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <h4 className='decorative'>
                                <FormattedMessage {...messages.phoneTitle} />
                            </h4>
                            <span>
                                <FormattedMessage {...messages.phone} />
                            </span>
                        </S.ContentRow>
                    </Card>
                    <NewsletterForm />
                </S.CardsContainer>
                <Card size='full'>
                    <h3 className='decorative' style={{ textAlign: 'center' }}>
                        <FormattedMessage {...messages.eventsTitle} />
                    </h3>
                    <Carousel autoChange items={translatedEventsItems} />
                </Card>
                <S.ContactAndMerchContainer id='contact' $isTablet={isTablet}>
                    <Card size='full'>
                        <Loader
                            isLoading={isContactFormLoading}
                            loadingMessage={
                                <FormattedMessage {...messages.contactFormLoaderMessage} />
                            }
                        >
                            <>
                                <S.ContactCardTitle>
                                    <FormattedMessage {...messages.contactTitle} />
                                </S.ContactCardTitle>
                                <Form<IContactFieldsValues>
                                    fields={contactFields}
                                    validationSchema={contactValidationSchema}
                                    onSubmit={onContactSubmit}
                                />
                            </>
                        </Loader>
                    </Card>
                    <Card size={40}>
                        <S.MerchTitle>
                            <FormattedMessage {...messages.merchTitle} />
                            <Icon variant='merch' />
                        </S.MerchTitle>
                        <Carousel autoChange items={merchItemsElements} />
                    </Card>
                </S.ContactAndMerchContainer>
            </S.AboutSectionInner>
        </S.AboutSection>
    )
}

export default About
