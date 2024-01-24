import type { Meta, StoryObj } from '@storybook/react'

import Switch from './Switch'

const meta = {
    title: 'Atoms/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
    args: {
        ...Default.args,
        checked: true,
    },
}

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
}
