import Icon from '../Icon/Icon'
import { SButton } from './Button.style'
import { IButtonProps } from './Button.types'

const Button: React.FC<IButtonProps> = ({ label, iconVariant, onClick }) => {
    return (
        <SButton className='decorative' onClick={onClick}>
            {label}
            {iconVariant && <Icon variant={iconVariant} />}
        </SButton>
    )
}

export default Button
