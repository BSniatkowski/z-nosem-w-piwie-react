import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import * as yup from 'yup'

import Button from '../../atoms/Button/Button'
import Textarea from '../../atoms/Textarea/Textarea'
import TextInput from '../../atoms/TextInput/TextInput'
import messages from './Form.messages'
import * as S from './Form.style'
import { IFormProps, TDefaultValues } from './Form.types'

const Form = <T extends FieldValues>({ fields, validationSchema, onSubmit }: IFormProps<T>) => {
    const intl = useIntl()

    const defaultValues = Object.fromEntries(
        fields.map((field) => [field.name, field.defaultValue]),
    ) as TDefaultValues<T>

    type FormData = yup.InferType<typeof validationSchema>

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful, reset])

    return (
        <S.SForm>
            {fields.length > 0 &&
                fields.map((field) => (
                    <S.FieldContainer key={field.name} $isErrorActive={!!errors[field.name]}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({ field: cField }) => {
                                switch (field.type) {
                                    case 'text': {
                                        return (
                                            <TextInput
                                                {...cField}
                                                label={field.label}
                                                iconVariant={field?.iconVariant}
                                                onIconClick={field?.onIconClick}
                                            />
                                        )
                                    }
                                    case 'textarea': {
                                        return (
                                            <Textarea
                                                {...cField}
                                                label={field.label}
                                                iconVariant={field?.iconVariant}
                                                onIconClick={field?.onIconClick}
                                            />
                                        )
                                    }
                                }
                            }}
                        />
                        <S.ErrorMessage>
                            {errors[field.name] && String(errors[field.name]?.message)}
                        </S.ErrorMessage>
                    </S.FieldContainer>
                ))}
            <Button
                label={intl.formatMessage(messages.send)}
                iconVariant='send'
                onClick={handleSubmit(onSubmit)}
            />
        </S.SForm>
    )
}

export default Form
