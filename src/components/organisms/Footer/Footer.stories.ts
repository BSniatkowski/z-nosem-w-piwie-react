import type { Meta, StoryObj } from '@storybook/react'

import { FooterNav } from '../../molecules/Navigation/Navigation.stories'
import Footer from './Footer'

const meta = {
    title: 'Organisms/Footer',
    component: Footer,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        siteLinks: FooterNav.args.links,
        altLinks: [
            { children: 'React (current)', href: '#', isCurrent: true },
            { children: 'Vue', href: '#' },
            { children: 'Angular', href: '#' },
        ],
        myLinks: [
            { children: 'LinkedIn', href: '#' },
            { children: 'Github', href: '#' },
        ],
    },
}
