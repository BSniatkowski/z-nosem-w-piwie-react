import type { Meta, StoryObj } from '@storybook/react'
import { FieldValues } from 'react-hook-form'

import Form from '../Form/Form'
import { Default as DefaultForm } from '../Form/Form.stories'
import { IFormProps } from '../Form/Form.types'
import Loader from './Loader'

const meta = {
    title: 'Organisms/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { isLoading: true, loadingMessage: 'Sending' },
    render: (args) => (
        <div style={{ width: 800 }}>
            <Loader {...args}>
                <Form {...(DefaultForm.args as IFormProps<FieldValues>)} />
            </Loader>
        </div>
    ),
}

export const Loaded: Story = {
    ...Default,
    args: { isLoading: false, loadingMessage: 'Sending' },
}
