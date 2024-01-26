import type { Meta, StoryObj } from '@storybook/react'

import Navigation from './Navigation'

const meta = {
    title: 'Molecules/Navigation',
    component: Navigation,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderNav: Story = {
    args: {
        variant: 'header',
        links: [
            { children: 'Home', href: '#home' },
            { children: 'Offer', href: '#offer' },
            { children: 'About', href: '#about' },
            { children: 'Contact', href: '#contact' },
        ],
    },
}

export const HeaderMobileNav: Story = { args: { ...HeaderNav.args, variant: 'headerMobile' } }

export const FooterNav: Story = { args: { ...HeaderNav.args, variant: 'footer' } }
