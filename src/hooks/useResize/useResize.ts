const isSSR = import.meta.env.SSR

import { useCallback, useEffect, useState } from 'react'

export const useResize = (callback?: (props: { width: number; height: number }) => void) => {
    const getWindowSizes = useCallback(
        () =>
            isSSR
                ? {
                      width: 1920,
                      height: 1080,
                  }
                : {
                      width: window.innerWidth,
                      height: window.innerHeight,
                  },
        [],
    )

    const [actualWindowSizes, setActualWindowSizes] = useState(getWindowSizes())

    const onResize = useCallback(() => {
        const sizes = getWindowSizes()

        setActualWindowSizes(sizes)

        if (typeof callback === 'function') callback(sizes)
    }, [callback, getWindowSizes])

    useEffect(() => {
        if (!isSSR) window.addEventListener('resize', onResize)

        return () => {
            if (!isSSR) window.removeEventListener('resize', onResize)
        }
    }, [onResize])

    return actualWindowSizes
}
