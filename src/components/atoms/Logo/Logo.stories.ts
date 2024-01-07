import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const meta = {
    title: 'Atoms/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dark: Story = {
    args: { isDark: true },
}

export const FooterVersion: Story = {
    args: { withFrame: true },
}
