import { SCard } from './Card.style'
import { ICardProps } from './Card.types'

const Card: React.FC<ICardProps> = ({ size, children }) => {
    return <SCard $size={size}>{children}</SCard>
}

export default Card
