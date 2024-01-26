import { yupResolver } from '@hookform/resolvers/yup'
import { FormEvent, useEffect, useMemo } from 'react'
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
import { EFieldType, IFormProps, TDefaultValues } from './Form.types'

const Form = <T extends FieldValues>({
    fields,
    validationSchema,
    variant,
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

    const isWithoutErrorMessage = (fieldType: EFieldType) => {
        switch (fieldType) {
            case EFieldType.accordionSwitch:
                return true
            default:
                return false
        }
    }

    const formOnSubmit = useMemo(
        () => (buttonsElement ? (e: FormEvent) => e.preventDefault() : handleSubmit(onSubmit)),
        [buttonsElement, handleSubmit, onSubmit],
    )

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful, reset])

    return (
        <S.SForm onSubmit={formOnSubmit} $variant={variant}>
            {fields.length > 0 &&
                fields.map((field, index) => (
                    <S.FieldContainer
                        key={field.name}
                        $withoutErrorMessage={isWithoutErrorMessage(field.type)}
                        $isErrorActive={!!errors[field.name]}
                    >
                        <Controller
                            name={field.name}
                            disabled={field.disabled}
                            control={control}
                            render={({ field: cField }) => {
                                switch (field.type) {
                                    case EFieldType.text: {
                                        return (
                                            <TextInput
                                                {...cField}
                                                label={field.label}
                                                iconVariant={field?.iconVariant}
                                                onIconClick={field?.onIconClick}
                                            />
                                        )
                                    }
                                    case EFieldType.textarea: {
                                        return (
                                            <Textarea
                                                {...cField}
                                                label={field.label}
                                                iconVariant={field?.iconVariant}
                                                onIconClick={field?.onIconClick}
                                            />
                                        )
                                    }
                                    case EFieldType.switch: {
                                        return (
                                            <S.SwitchWrapper>
                                                {field.label && <S.SLabel>{field.label}</S.SLabel>}
                                                <Switch {...cField} />
                                            </S.SwitchWrapper>
                                        )
                                    }
                                    case EFieldType.accordionSwitch: {
                                        const { ref, ...props } = cField

                                        const isWithoutTopBorder =
                                            fields?.[index - 1]?.type === EFieldType.accordionSwitch

                                        return (
                                            <Accordion
                                                title={field.title}
                                                isWithoutTopBorder={isWithoutTopBorder}
                                                headElement={(props) => (
                                                    <AccordionHeadWithSwitch
                                                        {...props}
                                                        readOnly={field.readOnly}
                                                        ref={ref}
                                                    />
                                                )}
                                                {...props}
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
            {typeof buttonsElement === 'function' ? (
                buttonsElement({
                    submitWith: (additionalProps) => {
                        handleSubmit((data) => onSubmit({ ...data, ...additionalProps }))()
                    },
                })
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
