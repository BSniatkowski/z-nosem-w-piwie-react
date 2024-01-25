import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import * as yup from 'yup'

import Button from '../../atoms/Button/Button'
import Switch from '../../atoms/Switch/Switch'
import Textarea from '../../atoms/Textarea/Textarea'
import TextInput from '../../atoms/TextInput/TextInput'
import Accordion from '../../molecules/Accordion/Accordion'
import AccordionHeadWithSwitch from '../../molecules/Accordion/AccordionHeads/AccordionHeadWithSwitch/AccordionHeadWithSwitch'
import messages from './Form.messages'
import * as S from './Form.style'
import { IFormProps, TDefaultValues } from './Form.types'

const Form = <T extends FieldValues>({
    fields,
    validationSchema,
    buttonsElement,
    onSubmit,
}: IFormProps<T>) => {
    const intl = useIntl()

    const defaultValues = Object.fromEntries(
        fields.map((field) => {
            switch (field.type) {
                case 'switch':
                    return [field.name, field.defaultChecked]
                case 'accordionSwitch':
                    return [field.name, field.defaultChecked]
                default:
                    return [field.name, field.defaultValue]
            }
        }),
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
                                    case 'switch': {
                                        return (
                                            <S.SwitchWrapper>
                                                {field.label && <S.SLabel>{field.label}</S.SLabel>}
                                                <Switch {...cField} />
                                            </S.SwitchWrapper>
                                        )
                                    }
                                    case 'accordionSwitch': {
                                        return (
                                            <Accordion
                                                title={field.title}
                                                headElement={AccordionHeadWithSwitch}
                                                {...cField}
                                            >
                                                <p>{field.children}</p>
                                            </Accordion>
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
            {buttonsElement ? (
                buttonsElement
            ) : (
                <Button
                    label={intl.formatMessage(messages.send)}
                    iconVariant='send'
                    onClick={handleSubmit(onSubmit)}
                />
            )}
        </S.SForm>
    )
}

export default Form
