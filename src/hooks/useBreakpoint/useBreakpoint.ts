import { useEffect, useMemo, useState } from 'react'

import { breakpoints } from './breakpoints.consts'
import { TBreakpointKey } from './useBreakpoint.types'

export const useBreakpoint = (breakpoint: TBreakpointKey) => {
    const breakpointWidth = breakpoints[breakpoint]

    const [actualWidth, setActualWidth] = useState<number>(window.innerWidth)
    const isActive = useMemo(() => actualWidth <= breakpointWidth, [actualWidth, breakpointWidth])

    const resize = () => {
        setActualWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return isActive
}
