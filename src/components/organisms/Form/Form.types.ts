import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form'
import { InferType, ObjectSchema } from 'yup'

import { ISwitchProps } from '../../atoms/Switch/Switch.types'
import { ITextareaProps } from '../../atoms/Textarea/Textarea.types'
import { ITextInputProps } from '../../atoms/TextInput/TextInput.types'
import { IAccordionProps } from '../../molecules/Accordion/Accordion.types'
import { IAccordionHeadWithSwitchProps } from '../../molecules/Accordion/AccordionHeads/AccordionHeadWithSwitch/AccordionHeadWithSwitch.types'

export enum EFieldType {
    text = 'text',
    textarea = 'textarea',
    switch = 'switch',
    accordionSwitch = 'accordionSwitch',
}

export type TField<T> = { name: Path<T> } & (
    | (Omit<ITextInputProps, 'name'> & {
          type: EFieldType.text
      })
    | (Omit<ITextareaProps, 'name'> & {
          type: EFieldType.textarea
      })
    | (Omit<ISwitchProps, 'name'> & {
          type: EFieldType.switch
          label: string
      })
    | (Omit<IAccordionProps, 'name' | 'headElement' | 'title'> &
          IAccordionHeadWithSwitchProps & {
              type: EFieldType.accordionSwitch
          })
)

export type TFields<T> = Array<TField<T>>

export interface IFormProps<T extends FieldValues> {
    fields: TFields<InferType<ObjectSchema<T>>>
    validationSchema: ObjectSchema<T>
    variant?: 'normal' | 'collapsed'
    buttonsElement?: ({
        submitWith,
    }: {
        submitWith: (additionalProps: Partial<InferType<ObjectSchema<T>>>) => void
    }) => React.ReactElement
    onSubmit: SubmitHandler<InferType<ObjectSchema<T>>>
}

export type TDefaultValues<T extends FieldValues> = DefaultValues<InferType<ObjectSchema<T>>>
