import { useEffect } from 'react'

import Icon from '../../atoms/Icon/Icon'
import * as S from './Modal.style'
import { IModalProps } from './Modal.types'

const Modal: React.FC<IModalProps> = ({
    children,
    isActive,
    isOverlayVisible = true,
    isScrollBehindPossible,
    position = 'center',
    onClose = undefined,
}) => {
    useEffect(() => {
        if (isActive && !isScrollBehindPossible) {
            const body = document.getElementsByTagName('body')[0]

            if (body) body.style.overflow = 'hidden'
        }

        return () => {
            if (isScrollBehindPossible) return

            const body = document.getElementsByTagName('body')[0]

            if (body) body.style.overflow = 'unset'
        }
    }, [isActive, isScrollBehindPossible])

    return (
        isActive && (
            <S.ModalOverlay $isOverlayVisible={isOverlayVisible} $position={position}>
                <S.SModal $position={position}>
                    {children}
                    {onClose && <Icon variant='close' onClick={onClose} />}
                </S.SModal>
            </S.ModalOverlay>
        )
    )
}

export default Modal
