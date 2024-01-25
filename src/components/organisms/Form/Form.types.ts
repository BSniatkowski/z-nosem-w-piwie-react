import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form'
import { InferType, ObjectSchema } from 'yup'

import { ISwitchProps } from '../../atoms/Switch/Switch.types'
import { ITextareaProps } from '../../atoms/Textarea/Textarea.types'
import { ITextInputProps } from '../../atoms/TextInput/TextInput.types'
import { IAccordionProps } from '../../molecules/Accordion/Accordion.types'
import { IAccordionHeadWithSwitchProps } from '../../molecules/Accordion/AccordionHeads/AccordionHeadWithSwitch/AccordionHeadWithSwitch.types'

export type TField<T> =
    | (Omit<ITextInputProps, 'name'> & {
          name: Path<T>
          type: 'text'
      })
    | (Omit<ITextareaProps, 'name'> & {
          name: Path<T>
          type: 'textarea'
      })
    | (Omit<ISwitchProps, 'name'> & {
          name: Path<T>
          type: 'switch'
          label: string
      })
    | (Omit<IAccordionProps, 'name' | 'headElement' | 'title'> &
          IAccordionHeadWithSwitchProps & {
              name: Path<T>
              type: 'accordionSwitch'
          })

export type TFields<T> = Array<TField<T>>

export interface IFormProps<T extends FieldValues> {
    fields: TFields<InferType<ObjectSchema<T>>>
    validationSchema: ObjectSchema<T>
    buttonsElement?: React.ReactElement
    onSubmit: SubmitHandler<InferType<ObjectSchema<T>>>
}

export type TDefaultValues<T extends FieldValues> = DefaultValues<InferType<ObjectSchema<T>>>
