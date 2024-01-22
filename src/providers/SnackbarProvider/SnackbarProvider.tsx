import { createContext, Dispatch, useEffect, useReducer } from 'react'

import Snackbar from '../../components/molecules/Snackbar/Snackbar'
import { useBreakpoint } from '../../hooks/useBreakpoint/useBreakpoint'
import {
    ESnackbarDispatchActions,
    IInitialSnackbarState,
    ISnackbarProviderProps,
    TSnackbarActions,
} from './SnackbarProvider.types'

const initialSnackbarState: IInitialSnackbarState = {
    variant: 'info',
    message: '',
    isActive: false,
}

const snackbarStateReducer = (state: IInitialSnackbarState, action: TSnackbarActions) => {
    switch (action.type) {
        case ESnackbarDispatchActions.SHOW_SNACKBAR: {
            return {
                variant: action?.payload?.variant,
                message: action?.payload?.message,
                isActive: true,
            }
        }
        case ESnackbarDispatchActions.CLOSE_SNACKBAR: {
            return { ...state, isActive: false }
        }
    }
}

const SnackbarContext = createContext<IInitialSnackbarState>(initialSnackbarState)
export const SnackbarDispatchContext = createContext<Dispatch<TSnackbarActions> | null>(null)

const SnackbarProvider: React.FC<ISnackbarProviderProps> = ({ children }) => {
    const [snackbarState, snackbarDispatch] = useReducer(snackbarStateReducer, initialSnackbarState)

    const isMobile = useBreakpoint('mobile')

    useEffect(() => {
        const closeSnackbarTimeout = setTimeout(() => {
            if (snackbarState.isActive)
                snackbarDispatch({ type: ESnackbarDispatchActions.CLOSE_SNACKBAR })
        }, 3000)

        return () => clearTimeout(closeSnackbarTimeout)
    }, [snackbarState.isActive])

    return (
        <SnackbarContext.Provider value={snackbarState}>
            <SnackbarDispatchContext.Provider value={snackbarDispatch}>
                {children}
                <Snackbar
                    {...snackbarState}
                    isMobile={isMobile}
                    onClose={() =>
                        snackbarDispatch({ type: ESnackbarDispatchActions.CLOSE_SNACKBAR })
                    }
                />
            </SnackbarDispatchContext.Provider>
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider
