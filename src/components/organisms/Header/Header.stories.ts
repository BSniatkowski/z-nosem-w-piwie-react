import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta = {
    title: 'Organisms/Header',
    component: Header,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { isMobile: false } }

export const Mobile: Story = { args: { isMobile: true } }
