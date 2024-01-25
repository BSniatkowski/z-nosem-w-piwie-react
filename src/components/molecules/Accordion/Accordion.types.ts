import { IAccordionHeadWithSwitchProps } from './AccordionHeads/AccordionHeadWithSwitch/AccordionHeadWithSwitch.types'
import { IDefaultAccordionHeadProps } from './AccordionHeads/DefaultAccordionHead/DefaultAccordionHead.types'

export interface IAccordionProps {
    title: string
    isActiveByDefault?: boolean
    isActive?: boolean
    toggleIsActive?: () => void
    headElement: React.FC<IDefaultAccordionHeadProps | IAccordionHeadWithSwitchProps>
    children?: React.ReactElement
}
