import { ISnackbarProps } from '../../components/molecules/Snackbar/Snackbar.types'

export interface ISnackbarProviderProps {
    children: React.ReactElement
}

export interface IInitialSnackbarState extends Omit<ISnackbarProps, 'onClose' | 'isMobile'> {}

export enum ESnackbarDispatchActions {
    SHOW_SNACKBAR = 'showSnackbar',
    CLOSE_SNACKBAR = 'closeSnackbar',
}

type TShowSnackbar = {
    type: ESnackbarDispatchActions.SHOW_SNACKBAR
    payload: Omit<IInitialSnackbarState, 'isActive'>
}

type TCloseSnackbar = {
    type: ESnackbarDispatchActions.CLOSE_SNACKBAR
}

export type TSnackbarActions = TShowSnackbar | TCloseSnackbar
