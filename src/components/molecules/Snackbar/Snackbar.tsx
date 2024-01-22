import Icon from '../../atoms/Icon/Icon'
import * as S from './Snackbar.style'
import { ISnackbarProps } from './Snackbar.types'

const Snackbar: React.FC<ISnackbarProps> = ({ variant = 'info', message, isActive, onClose }) => {
    return (
        <S.SSnackbar $isActive={isActive} $variant={variant}>
            <S.SnackbarMessage>{message}</S.SnackbarMessage>
            <Icon variant='close' onClick={onClose} />
        </S.SSnackbar>
    )
}

export default Snackbar
