import type { Meta, StoryObj } from '@storybook/react'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import Form from './Form'
import { EFieldType, TFields } from './Form.types'

type TExampleFormFields = {
    text: string
    textarea: string
    switch: string
    accordionSwitch: string
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
    { name: 'text', type: EFieldType.text, label: 'Text Input', defaultValue: 'Some text' },
    {
        name: 'textarea',
        type: EFieldType.textarea,
        label: 'Textarea',
        defaultValue:
            'Amet nulla est qui ad veniam. Anim mollit aliqua sit aute nulla sit elit. Reprehenderit quis ea velit aliqua nulla ipsum veniam sunt amet ad et. Sint velit elit aliquip enim commodo qui in esse deserunt tempor.',
    },
    { name: 'switch', type: EFieldType.text, label: 'Textarea Input', defaultChecked: true },
    {
        name: 'accordionSwitch',
        type: EFieldType.textarea,
        label: 'AccordionSwitch field',
        children:
            'Officia duis id quis laboris Lorem. Minim minim duis velit ut do cupidatat enim excepteur ex minim. Consequat excepteur veniam amet proident Lorem ad enim non officia. Ex ullamco duis nostrud irure irure sit. Consectetur laborum duis nostrud magna sunt. Exercitation incididunt excepteur ex non mollit tempor minim. Voluptate ut sint occaecat ut anim ex. Mollit adipisicing dolore consequat nulla ipsum officia. Laborum aliquip consequat commodo amet amet et anim incididunt quis dolor amet minim anim. Proident esse velit consectetur nulla officia Lorem veniam ut proident sint excepteur ea. Id Lorem ut velit laboris mollit eu nulla elit ex eu ea anim adipisicing. Irure ut irure esse ex consectetur deserunt qui labore pariatur aute amet eu laborum ad. Voluptate ex pariatur laborum do. Dolore id amet eu nulla proident. Exercitation voluptate anim do Lorem incididunt. Culpa aliquip velit sit et elit enim eiusmod esse incididunt adipisicing ex adipisicing. Minim officia nisi nostrud quis esse. Sunt tempor pariatur in eiusmod pariatur nostrud esse enim occaecat qui consectetur duis. Exercitation fugiat proident aute dolore ea ut adipisicing ut dolore sunt nisi nostrud. Cupidatat commodo esse tempor sunt enim anim elit. Consequat in qui reprehenderit minim eu fugiat dolor voluptate proident sint sint anim id consectetur.',
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
