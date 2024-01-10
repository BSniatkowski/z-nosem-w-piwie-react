export interface ICarouselProps {
    autoChange?: boolean
    items: Array<{ id: string; itemElement: React.ReactNode }>
}
