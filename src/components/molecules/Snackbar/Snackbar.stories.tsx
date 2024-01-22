import type { Meta, StoryObj } from '@storybook/react'

import Snackbar from './Snackbar'

const meta = {
    title: 'Molecules/Snackbar',
    component: Snackbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        isMobile: false,
        variant: 'info',
        message: 'Event data successfully copied to clipboard.',
        isActive: true,
        onClose: () => console.log('Click!'),
    },
    render: (args) => (
        <div style={{ height: 120 }}>
            <Snackbar {...args} />
        </div>
    ),
}

export const Mobile: Story = {
    ...Default,
    args: {
        ...Default.args,
        isMobile: true,
    },
}

export const Warning: Story = {
    ...Default,
    args: {
        ...Default.args,
        variant: 'warning',
    },
}

export const Error: Story = {
    ...Default,
    args: {
        ...Default.args,
        variant: 'error',
    },
}
