import type { Meta, StoryObj } from '@storybook/react'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import Form from './Form'
import { TFields } from './Form.types'

type TExampleFormFields = {
    example: string
    example1: string
    example2: string
    example3: string
}

const meta = {
    title: 'Organisms/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const fields = [
    { name: 'example', type: 'text', label: 'Text Input', defaultValue: 'Some text' },
    {
        name: 'example1',
        type: 'textarea',
        label: 'Textarea',
        defaultValue:
            'Amet nulla est qui ad veniam. Anim mollit aliqua sit aute nulla sit elit. Reprehenderit quis ea velit aliqua nulla ipsum veniam sunt amet ad et. Sint velit elit aliquip enim commodo qui in esse deserunt tempor.',
    },
    { name: 'example2', type: 'text', label: 'Text Input 1', defaultValue: 'Some text2' },
    {
        name: 'example3',
        type: 'textarea',
        label: 'Textarea 1',
        defaultValue:
            'Ullamco nulla consequat aliqua aliqua do est sunt elit occaecat in tempor commodo occaecat veniam. Ut et ea sunt in duis tempor tempor et excepteur et consectetur id. Amet amet ullamco laborum voluptate laboris in labore pariatur non et sunt non exercitation aute.',
    },
] satisfies TFields<TExampleFormFields>

const validationSchema = yup
    .object({
        example: yup.string().max(32).required(),
        example1: yup.string().max(64).required(),
        example2: yup.string().max(128).required(),
        example3: yup.string().max(256).required(),
    })
    .required()

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('onSubmit', data, data.example)
}

export const Default: Story = {
    args: { fields, validationSchema, onSubmit },
    render: (args) => (
        <div style={{ width: 600 }}>
            <Form {...args} />
        </div>
    ),
}
