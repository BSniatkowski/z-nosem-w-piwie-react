import type { Meta, StoryObj } from '@storybook/react'

import TextInput from './TextInput'

const meta = {
    title: 'Atoms/TextInput',
    component: TextInput,
    argTypes: {
        value: {
            control: { type: 'text', default: '' },
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

// TODO - correct after useForm introduction

export const Default: Story = {
    args: {
        label: 'Contact email',
        iconVariant: 'send',
    },
    render: (args) => (
        <form style={{ width: '600px' }}>
            <TextInput {...args} />
        </form>
    ),
}

export const WithValue: Story = {
    ...Default,
    args: {
        ...Default.args,
        value: 'johndoe@example.com',
    },
}
