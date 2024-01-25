import { ISwitchProps } from '../../../../atoms/Switch/Switch.types'
import { IDefaultAccordionHeadProps } from '../DefaultAccordionHead/DefaultAccordionHead.types'

export interface IAccordionHeadWithSwitchProps
    extends IDefaultAccordionHeadProps,
        Omit<ISwitchProps, 'title'> {}
