export interface ISnackbarProps {
    isMobile: boolean
    variant?: 'info' | 'warning' | 'error'
    message: string
    isActive: boolean
    onClose: () => void
}
