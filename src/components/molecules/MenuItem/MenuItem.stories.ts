import type { Meta, StoryObj } from '@storybook/react'

import beerSrc from '/imgs/beer_1.png'

import MenuItem from './MenuItem'

const meta = {
    title: 'Molecules/MenuItem',
    component: MenuItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

const params = {
    name: '1. India Pale Ale (IPA)',
    capacity: 0.5,
    price: 16,
    description:
        'India Pale Ale (IPA) is a beer style characterized by its hoppy flavor profile and higher alcohol content. Originating in England, IPAs gained popularity due to their robustness and ability to withstand long journeys to British troops stationed in India during the 18th century. These beers are known for their prominent hop bitterness, often featuring floral, piney, or citrusy aromas and flavors derived from hops. There are various subcategories within IPAs, such as American IPA, New England IPA, and Double IPA, each with distinct hop profiles and brewing techniques. IPAs typically exhibit a golden to amber color and are favored by craft beer enthusiasts for their bold, bitter, and often fruity characteristics.',
    imgSrc: beerSrc,
}

export const Default: Story = {
    args: params,
}

export const Reversed: Story = {
    args: { ...params, direction: 'reversed' },
}

export const Column: Story = {
    args: { ...params, direction: 'column' },
}
