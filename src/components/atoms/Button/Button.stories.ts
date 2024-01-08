import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { label: 'Send', onClick: () => console.log('Click!') },
}

export const ButtonWithIcon: Story = {
    args: { label: 'Send', iconVariant: 'send', onClick: () => console.log('Click!') },
}

export const IconButton: Story = {
    args: { iconVariant: 'send', onClick: () => console.log('Click!') },
}
