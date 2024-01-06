import { useEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
    const ref = useRef<null | T>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (ref.current && !ref.current.contains(target)) callback()
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [callback])

    return ref
}
