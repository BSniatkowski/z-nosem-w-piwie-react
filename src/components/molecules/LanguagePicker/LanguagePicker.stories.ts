import type { Meta, StoryObj } from '@storybook/react'

import LanguagePicker from './LanguagePicker'

const meta = {
    title: 'Molecules/LanguagePicker',
    component: LanguagePicker,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LanguagePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { isMenuActive: false } }

export const MenuActive: Story = { args: { isMenuActive: true } }
