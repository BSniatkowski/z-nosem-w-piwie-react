import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form'
import { InferType, ObjectSchema } from 'yup'

import { ITextInputProps } from '../../atoms/TextInput/TextInput.types'

export type TField<T> = Omit<ITextInputProps, 'name'> &
    (
        | {
              name: Path<T>
              type: 'text'
          }
        | {
              name: Path<T>
              type: 'textarea'
          }
    )

export type TFields<T> = Array<TField<T>>

export interface IFormProps<T extends FieldValues> {
    fields: TFields<InferType<ObjectSchema<T>>>
    validationSchema: ObjectSchema<T>
    onSubmit: SubmitHandler<InferType<ObjectSchema<T>>>
}

export type TDefaultValues<T extends FieldValues> = DefaultValues<InferType<ObjectSchema<T>>>
