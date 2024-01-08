import type { Meta, StoryObj } from '@storybook/react'

import MenuItem from '../../molecules/MenuItem/MenuItem'
import {
    Column as ColumnMenuItem,
    Default as DefaultMenuItem,
} from '../../molecules/MenuItem/MenuItem.stories'
import Card from './Card'

const meta = {
    title: 'Atoms/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Full: Story = {
    args: { size: 'full' },
    render: (args) => (
        <Card {...args}>
            <MenuItem {...DefaultMenuItem.args} />
        </Card>
    ),
}

export const Fit: Story = {
    args: { size: 'fit' },
    render: (args) => (
        <Card {...args}>
            <MenuItem {...DefaultMenuItem.args} />
        </Card>
    ),
}

export const FixedSize: Story = {
    args: { size: 60 },
    render: (args) => (
        <Card {...args}>
            <MenuItem {...ColumnMenuItem.args} />
        </Card>
    ),
}
