export type directions = 'normal' | 'reversed' | 'column'

export interface IMenuItemProps {
    direction?: directions
    name: string
    capacity: number
    price: number
    description: string
    imgSrc: string
}

export type TMenuItem = React.FC<IMenuItemProps>
