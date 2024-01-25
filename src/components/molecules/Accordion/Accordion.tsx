import { useCallback, useState } from 'react'

import * as S from './Accordion.style'
import { IAccordionProps } from './Accordion.types'

const Snackbar: React.FC<IAccordionProps> = ({
    title,
    isActiveByDefault,
    isActive,
    toggleIsActive,
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
        <S.SAccordion $isActive={isActive ?? innerIsActive}>
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

export default Snackbar
