import Icon from '../../atoms/Icon/Icon'
import * as S from './Snackbar.style'
import { ISnackbarProps } from './Snackbar.types'

const Snackbar: React.FC<ISnackbarProps> = ({
    isMobile,
    variant = 'info',
    message,
    isActive,
    onClose,
}) => {
    return (
        <S.SSnackbar $isMobile={isMobile} $isActive={isActive} $variant={variant}>
            <S.SnackbarMessage>{message}</S.SnackbarMessage>
            <Icon variant='close' onClick={onClose} />
        </S.SSnackbar>
    )
}

export default Snackbar
