import { useContext } from 'react'

import { SnackbarDispatchContext } from '../SnackbarProvider'

export const useSnackbarDispatch = () => useContext(SnackbarDispatchContext)
