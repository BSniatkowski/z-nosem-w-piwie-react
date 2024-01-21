import { useCallback, useEffect, useRef, useState } from 'react'

import Icon from '../../atoms/Icon/Icon'
import * as S from './Carousel.style'
import { ICarouselProps } from './Carousel.types'

const Carousel: React.FC<ICarouselProps> = ({ autoChange, items = [] }) => {
    const [actualItemId, setActualItemId] = useState<string | null>(null)

    const itemsContainerRef = useRef<HTMLDivElement | null>(null)
    const itemsRefsMap = useRef<Map<string, HTMLDivElement> | null>(null)

    const refGetter = useCallback(() => {
        if (!itemsRefsMap.current) itemsRefsMap.current = new Map()

        return itemsRefsMap.current
    }, [])

    const refSetter = useCallback(
        ({ id, node }: { id: string; node: HTMLDivElement | null }) => {
            const map = refGetter()

            if (node) {
                map.set(id, node)
            } else {
                map.delete(id)
            }
        },
        [refGetter],
    )

    const showElement = useCallback(
        (id: string) => {
            const map = refGetter()

            const node = map.get(id)

            const container = itemsContainerRef.current
            if (node && container) container.scrollLeft = node.offsetLeft
        },
        [refGetter],
    )

    const changeElement = useCallback(
        (id: string) => {
            setActualItemId(id)
            showElement(id)
        },
        [showElement],
    )

    useEffect(() => {
        const onResizeCorrectPosition = () => {
            if (actualItemId) showElement(actualItemId)
        }

        window.addEventListener('resize', onResizeCorrectPosition)

        return () => {
            window.removeEventListener('resize', onResizeCorrectPosition)
        }
    }, [actualItemId, showElement])

    useEffect(() => {
        if (!items.length || !autoChange) return

        if (!actualItemId) setActualItemId(items[0].id)

        const changeInterval = setInterval(() => {
            const actualItemIndex = items.findIndex((item) => item.id === actualItemId)

            if (actualItemIndex + 1 < items.length) {
                changeElement(items[actualItemIndex + 1].id)
            } else {
                changeElement(items[0].id)
            }
        }, 5000)

        return () => {
            clearInterval(changeInterval)
        }
    }, [actualItemId, autoChange, changeElement, items, showElement])

    return (
        <S.CarouselContainer>
            <S.CarouselItemsContainer ref={itemsContainerRef}>
                {items.length > 0 &&
                    items.map(({ id, itemElement }) => (
                        <S.CarouselItem key={id} ref={(node) => refSetter({ id, node })}>
                            {itemElement}
                        </S.CarouselItem>
                    ))}
            </S.CarouselItemsContainer>
            <S.CarouselItemsDots>
                {items.length &&
                    items.map(({ id }) => (
                        <Icon
                            key={id}
                            variant={id === actualItemId ? 'dotActive' : 'dot'}
                            onClick={() => changeElement(id)}
                        />
                    ))}
            </S.CarouselItemsDots>
        </S.CarouselContainer>
    )
}

export default Carousel
