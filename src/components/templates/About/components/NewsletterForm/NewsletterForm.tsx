import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import * as yup from 'yup'

import { NewsletterRequest } from '../../../../../../api/api'
import { SnackbarDispatchContext } from '../../../../../providers/SnackbarProvider/SnackbarProvider'
import { ESnackbarDispatchActions } from '../../../../../providers/SnackbarProvider/SnackbarProvider.types'
import Button from '../../../../atoms/Button/Button'
import Card from '../../../../atoms/Card/Card'
import TextInput from '../../../../atoms/TextInput/TextInput'
import formMessages from '../../../../organisms/Form/Form.messages'
import { ErrorMessage, FieldContainer, SForm } from '../../../../organisms/Form/Form.style'
import { TField } from '../../../../organisms/Form/Form.types'
import Loader from '../../../../organisms/Loader/Loader'
import aboutMessages from '../../About.messages'
import { SNewsletterInsideContainer } from './Newsletter.style'
import messages from './NewsletterForm.messages'
import { INewsletterFieldsValues } from './NewsletterForm.types'

const NewsletterForm = () => {
    const intl = useIntl()

    const dispatch = useContext(SnackbarDispatchContext)

    const [isFormActive, setIsFormActive] = useState<boolean>(false)
    const [isFormLoading, setIsFormLoading] = useState<boolean>(false)

    const emailField = {
        name: 'email' as const,
        type: 'text',
        label: intl.formatMessage(aboutMessages.emailLabel),
        defaultValue: '',
    } satisfies TField<'email'>

    const newsletterValidationSchema = useMemo(
        () =>
            yup
                .object({
                    email: yup
                        .string()
                        .max(
                            128,
                            intl.formatMessage(formMessages.tooLongField, {
                                fieldName: intl.formatMessage(aboutMessages.emailLabel),
                                max: 128,
                            }),
                        )
                        .email(intl.formatMessage(formMessages.emailField))
                        .required(
                            intl.formatMessage(formMessages.requiredField, {
                                fieldName: intl.formatMessage(aboutMessages.emailLabel),
                            }),
                        ),
                })
                .required(),
        [intl],
    )

    const onNewsletterSubmit: SubmitHandler<INewsletterFieldsValues> = useCallback(
        async (data) => {
            setIsFormLoading(true)
            const response = await NewsletterRequest(data)

            console.log(response)
            if (dispatch)
                dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                        variant: 'info',
                        message: intl.formatMessage(messages.FormSnackbarMessage),
                    },
                })
            setIsFormLoading(false)
        },
        [dispatch, intl],
    )

    type FormData = yup.InferType<typeof newsletterValidationSchema>

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        defaultValues: { [emailField.name]: emailField.defaultValue },
        resolver: yupResolver(newsletterValidationSchema),
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful, reset])

    return (
        <Card size={41}>
            <Loader
                isLoading={isFormLoading}
                loadingMessage={<FormattedMessage {...messages.FormLoaderMessage} />}
            >
                <SNewsletterInsideContainer $isFormActive={isFormActive}>
                    <h4 className='decorative'>
                        <FormattedMessage {...messages.newsletter} />
                    </h4>
                    {isFormActive ? (
                        <SForm>
                            <FieldContainer $isErrorActive={!!errors[emailField.name]}>
                                <Controller
                                    name={emailField.name}
                                    control={control}
                                    render={({ field }) => (
                                        <TextInput
                                            {...field}
                                            label={emailField.label}
                                            iconVariant='send'
                                            onIconClick={handleSubmit(onNewsletterSubmit)}
                                        />
                                    )}
                                />
                                <ErrorMessage>
                                    {errors[emailField.name] &&
                                        String(errors[emailField.name]?.message)}
                                </ErrorMessage>
                            </FieldContainer>
                        </SForm>
                    ) : (
                        <Button
                            size='full'
                            label={intl.formatMessage(messages.newsletterJoinButton)}
                            onClick={() => setIsFormActive(true)}
                        />
                    )}
                </SNewsletterInsideContainer>
            </Loader>
        </Card>
    )
}

export default NewsletterForm
