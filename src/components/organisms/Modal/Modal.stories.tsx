import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'

const meta = {
    title: 'Organisms/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { isActive: true },
    render: (args) => (
        <Modal {...args}>
            <div>
                <h1>Modal Example</h1>
                <p>
                    Cupidatat officia ut Lorem enim ea. Et non quis fugiat consectetur in veniam
                    dolor exercitation. Enim enim est sint occaecat sit occaecat voluptate
                    reprehenderit deserunt. Dolore fugiat mollit aute incididunt id. Id cillum
                    reprehenderit sunt laboris elit elit fugiat exercitation et qui ullamco
                    excepteur. Adipisicing qui quis consequat cupidatat sint est ullamco. Dolor sint
                    incididunt Lorem et sit ea amet exercitation magna est minim. Id voluptate
                    aliquip magna voluptate duis dolor proident. Culpa irure eu duis sunt enim ut
                    Lorem magna cupidatat quis ipsum est. Lorem in culpa proident tempor anim nulla.
                    Ea laboris ut aute nostrud. Mollit amet occaecat eiusmod nisi sint irure laboris
                    nulla et. Pariatur consectetur ullamco aliquip minim non. Fugiat proident
                    aliquip duis in aliqua. Adipisicing magna ea adipisicing et. Anim ullamco
                    commodo aute adipisicing id nostrud. Est Lorem elit nisi ipsum exercitation esse
                    ea elit ea deserunt amet nulla sint et. Velit esse in exercitation labore
                    exercitation anim pariatur minim quis esse do ea fugiat. Tempor labore mollit
                    amet non amet consequat culpa duis irure ad tempor. Sint id cupidatat sit
                    occaecat. Proident fugiat eiusmod labore dolore laborum. Aute quis laboris
                    deserunt enim in eu consequat occaecat exercitation sit laboris reprehenderit.
                    Veniam non ullamco mollit nisi laborum. Officia anim nostrud consectetur velit
                    duis occaecat sunt mollit. Excepteur velit sint elit dolore eiusmod fugiat.
                    Cillum cupidatat aute labore occaecat laboris laboris anim dolor laboris minim
                    proident. Id laboris adipisicing reprehenderit enim magna minim sit irure
                    commodo do voluptate aliquip.
                </p>
            </div>
        </Modal>
    ),
}

export const BottomPosition: Story = {
    ...Default,
    args: {
        ...Default.args,
        position: 'bottom',
    },
}
