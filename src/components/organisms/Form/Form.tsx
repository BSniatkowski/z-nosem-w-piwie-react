import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'

import Button from '../../atoms/Button/Button'
import Textarea from '../../atoms/Textarea/Textarea'
import TextInput from '../../atoms/TextInput/TextInput'
import * as S from './Form.style'
import { IFormProps, TDefaultValues } from './Form.types'

const Form = <T extends FieldValues>({ fields, validationSchema, onSubmit }: IFormProps<T>) => {
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
                                    case 'text':
                                        return <TextInput {...cField} label={field.label} />
                                    case 'textarea':
                                        return <Textarea {...cField} label={field.label} />
                                }
                            }}
                        />
                        {
                            <S.ErrorMessage>
                                {errors[field.name] && String(errors[field.name]?.message)}
                            </S.ErrorMessage>
                        }
                    </S.FieldContainer>
                ))}
            <Button label='Send' iconVariant='send' onClick={handleSubmit(onSubmit)} />
        </S.SForm>
    )
}

export default Form
