import Icon from '../../../../atoms/Icon/Icon'
import * as S from './DefaultAccordionHead.style'
import { IDefaultAccordionHeadProps } from './DefaultAccordionHead.types'

const DefaultAccordionHead: React.FC<IDefaultAccordionHeadProps> = ({
    title,
    isActive,
    toggleIsActive,
}) => {
    return (
        <S.DefaultAccordionHeadContainer $isActive={isActive}>
            <Icon variant='expand' onClick={toggleIsActive} />
            {title}
        </S.DefaultAccordionHeadContainer>
    )
}

export default DefaultAccordionHead
