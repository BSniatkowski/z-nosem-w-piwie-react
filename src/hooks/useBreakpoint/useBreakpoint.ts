import { useMemo } from 'react'

import { useResize } from '../useResize/useResize'
import { breakpoints } from './breakpoints.consts'
import { TBreakpointKey } from './useBreakpoint.types'

export const useBreakpoint = (breakpoint: TBreakpointKey) => {
    const breakpointWidth = breakpoints[breakpoint]

    const { width } = useResize()

    const isActive = useMemo(() => width <= breakpointWidth, [width, breakpointWidth])

    return isActive
}
