import type { Meta, StoryObj } from '@storybook/react'

import { EN } from '../../molecules/LanguagePicker/LanguagePicker.consts'
import { HeaderNav } from '../../molecules/Navigation/Navigation.stories'
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

export const Default: Story = {
    args: { actualLocale: EN, links: HeaderNav.args.links, isMobile: false },
}

export const Mobile: Story = { args: { ...Default.args, isMobile: true } }
