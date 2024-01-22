export interface ISnackbarProps {
    variant?: 'info' | 'warning' | 'error'
    message: string
    isActive: boolean
    onClose: () => void
}
