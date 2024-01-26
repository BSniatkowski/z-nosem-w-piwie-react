import { useCallback, useState } from 'react'

import * as S from './Accordion.style'
import { IAccordionProps } from './Accordion.types'

const Accordion: React.FC<IAccordionProps> = ({
    title,
    isActiveByDefault,
    isActive,
    toggleIsActive,
    isWithoutTopBorder,
    headElement,
    children,
    ...props
}) => {
    const [innerIsActive, innerSetIsActive] = useState(isActiveByDefault ?? false)

    const innerToggleIsActive = useCallback(
        () =>
            typeof toggleIsActive === 'function'
                ? toggleIsActive()
                : innerSetIsActive(!innerIsActive),
        [innerIsActive, toggleIsActive],
    )

    return (
        <S.SAccordion
            $isActive={isActive ?? innerIsActive}
            $isWithoutTopBorder={isWithoutTopBorder}
        >
            <S.AccordionHead>
                {headElement({
                    title,
                    isActive: isActive ?? innerIsActive,
                    toggleIsActive: innerToggleIsActive,
                    ...props,
                })}
            </S.AccordionHead>
            <S.AccordionContent $isActive={isActive ?? innerIsActive}>
                {children}
            </S.AccordionContent>
        </S.SAccordion>
    )
}

export default Accordion
