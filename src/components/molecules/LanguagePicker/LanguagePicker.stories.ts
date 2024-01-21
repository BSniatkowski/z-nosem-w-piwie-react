import type { Meta, StoryObj } from '@storybook/react'

import LanguagePicker from './LanguagePicker'
import { EN } from './LanguagePicker.consts'

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

export const Default: Story = { args: { actualLocale: EN, isMenuActive: false } }

export const MenuActive: Story = { args: { actualLocale: EN, isMenuActive: true } }
