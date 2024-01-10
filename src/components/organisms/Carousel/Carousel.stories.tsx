import type { Meta, StoryObj } from '@storybook/react'

import beer1 from '/imgs/beer_1.png'
import beer2 from '/imgs/beer_2.png'
import tshirt from '/imgs/tshirt.png'

import Card from '../../atoms/Card/Card'
import Carousel from './Carousel'

const meta = {
    title: 'Organisms/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        autoChange: true,
        items: [
            {
                id: 'beer1',
                itemElement: <img src={beer1} />,
            },
            {
                id: 'beer2',
                itemElement: <img src={beer2} />,
            },
            {
                id: 'tshirt',
                itemElement: <img src={tshirt} />,
            },
        ],
    },
    render: (args) => (
        <Card size={45}>
            <Carousel {...args} />
        </Card>
    ),
}
