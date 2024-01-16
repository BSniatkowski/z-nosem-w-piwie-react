export type TCarouselItems = Array<{ id: string; itemElement: React.ReactNode }>

export interface ICarouselProps {
    autoChange?: boolean
    items: TCarouselItems
}
