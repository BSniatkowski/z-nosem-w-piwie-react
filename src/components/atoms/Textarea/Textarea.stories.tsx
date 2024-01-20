import type { Meta, StoryObj } from '@storybook/react'

import Textarea from './Textarea'

const meta = {
    title: 'Atoms/Textarea',
    component: Textarea,
    argTypes: {
        value: {
            control: { type: 'text', default: '' },
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

// TODO - correct after useForm introduction

export const Default: Story = {
    args: {
        label: 'Message',
    },
    render: (args) => (
        <form style={{ width: '600px' }}>
            <Textarea {...args} />
        </form>
    ),
}

export const WithValue: Story = {
    ...Default,
    args: {
        ...Default.args,
        value: 'Elit velit do sunt non eu exercitation occaecat ex sunt commodo ad irure aute. Duis veniam quis occaecat veniam voluptate laborum laboris occaecat qui cupidatat laborum eiusmod sint. Ut sit voluptate laboris adipisicing veniam ex ut dolor. Eiusmod irure duis in eu pariatur qui pariatur.',
    },
}
