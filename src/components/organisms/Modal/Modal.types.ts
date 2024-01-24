export interface IModalProps {
    children?: React.ReactElement
    isActive: boolean
    isOverlayVisible?: boolean
    isScrollBehindPossible?: boolean
    position?: 'bottom' | 'center'
    onClose?: () => void
}
