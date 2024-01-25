import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './Accordion'
import AccordionHeadWithSwitch from './AccordionHeads/AccordionHeadWithSwitch/AccordionHeadWithSwitch'
import DefaultAccordionHead from './AccordionHeads/DefaultAccordionHead/DefaultAccordionHead'

const meta = {
    title: 'Molecules/Accordion',
    component: Accordion,
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Fugiat voluptate do amet elit ipsum consequat ad esse.',
        headElement: DefaultAccordionHead,
    },
    render: (args) => (
        <div style={{ height: 300 }}>
            <Accordion {...args}>
                <p>
                    In velit velit laboris veniam velit do qui ad. Ex elit in esse esse dolor in
                    fugiat commodo sit aute aliqua mollit eiusmod anim. Voluptate esse excepteur
                    cupidatat eiusmod irure do in culpa. Amet ullamco nisi ea cillum sit enim non
                    duis. Quis ut eiusmod sint nisi. Eu veniam non veniam reprehenderit cupidatat
                    irure cupidatat enim culpa tempor labore ut adipisicing nostrud. Amet cillum
                    eiusmod commodo cillum adipisicing in mollit ullamco. Exercitation nostrud
                    excepteur sint amet pariatur consectetur sint dolor nostrud anim sunt. Officia
                    incididunt fugiat laborum dolor ea cillum reprehenderit quis. Cillum aute ut
                    duis labore qui eu. Sit excepteur exercitation duis aliqua cupidatat labore
                    cupidatat consectetur qui fugiat incididunt. Veniam sunt sint aliquip
                    reprehenderit labore ad officia laborum labore aliqua cupidatat. Commodo ut
                    reprehenderit nisi laborum minim elit anim aute quis eiusmod. Fugiat fugiat
                    ullamco aute sunt officia sint mollit cupidatat nisi.
                </p>
            </Accordion>
        </div>
    ),
}

export const WithSwitch: Story = {
    ...Default,
    args: {
        ...Default.args,
        headElement: AccordionHeadWithSwitch,
    },
}
