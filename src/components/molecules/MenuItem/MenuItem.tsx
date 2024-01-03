import * as S from './MenuItem.style'
import { TMenuItem } from './MenuItem.types'

const MenuItem: TMenuItem = ({
    direction = 'normal',
    name,
    capacity,
    price,
    description,
    imgSrc,
}) => {
    return (
        <S.MenuItemContainer $direction={direction}>
            <S.ItemImg src={imgSrc} />
            <S.DescriptionContainer>
                <S.NameWithPrice>
                    <h3 className='decorative'>{name}</h3>
                    <h4>
                        {capacity}l {price} zł
                    </h4>
                </S.NameWithPrice>
                <p>{description}</p>
            </S.DescriptionContainer>
        </S.MenuItemContainer>
    )
}

export default MenuItem
