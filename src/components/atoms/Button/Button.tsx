import Icon from '../Icon/Icon'
import { SButton } from './Button.style'
import { IButtonProps } from './Button.types'

const Button: React.FC<IButtonProps> = ({
    variant = 'normal',
    size,
    label,
    iconVariant,
    onClick,
}) => {
    return (
        <SButton
            className='decorative'
            $variant={variant}
            $size={size}
            $isSingleItem={!(label && iconVariant)}
            onClick={onClick}
        >
            {label}
            {iconVariant && <Icon variant={iconVariant} />}
        </SButton>
    )
}

export default Button
