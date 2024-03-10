import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import { useOffer } from '../../../hooks/useData/useOffer'
import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'
import MenuItem from '../../molecules/MenuItem/MenuItem'
import { IMenuItemProps } from '../../molecules/MenuItem/MenuItem.types'
import messages from './Offer.messages'
import * as S from './Offer.style'

const Offer = () => {
    const intl = useIntl()

    const { data, isLoading, isSuccess } = useOffer()

    const translatedBeersOffer = useMemo<Array<IMenuItemProps>>(
        () =>
            (!isLoading &&
                isSuccess &&
                data?.beers.map((beer) => {
                    const text = beer.translations[intl.locale as TLocales]

                    return { ...beer, ...text }
                })) ||
            [],
        [data?.beers, intl.locale, isLoading, isSuccess],
    )

    const translatedCoffeeOffer = useMemo<Array<IMenuItemProps>>(
        () =>
            (!isLoading &&
                isSuccess &&
                data?.coffee.map((coffee) => {
                    const text = coffee.translations[intl.locale as TLocales]

                    return { ...coffee, ...text }
                })) ||
            [],
        [data?.coffee, intl.locale, isLoading, isSuccess],
    )

    const isMobile = useBreakpoint('mobile')

    return (
        <S.OfferSection id='offer'>
            <S.OfferSectionInner>
                {translatedBeersOffer.length > 0 && (
                    <S.ItemsCategoryContainer $isMobile={isMobile}>
                        <S.ItemsCategoryNameContainer>
                            <S.ItemsCategoryName>
                                {isMobile ? (
                                    <FormattedMessage {...messages.beersM} />
                                ) : (
                                    <FormattedMessage {...messages.beers} />
                                )}
                            </S.ItemsCategoryName>
                        </S.ItemsCategoryNameContainer>
                        <S.ItemsList>
                            {translatedBeersOffer.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    {...item}
                                    name={`${index + 1}. ${item.name}`}
                                    direction={
                                        isMobile ? 'column' : index % 2 ? 'reversed' : 'normal'
                                    }
                                />
                            ))}
                        </S.ItemsList>
                    </S.ItemsCategoryContainer>
                )}
                {!isMobile && translatedCoffeeOffer.length > 0 && <S.CategoriesDivider />}
                {translatedCoffeeOffer.length > 0 && (
                    <S.ItemsCategoryContainer $isMobile={isMobile} $direction='reverse'>
                        <S.ItemsCategoryNameContainer>
                            <S.ItemsCategoryName>
                                {isMobile ? (
                                    <FormattedMessage {...messages.coffeeM} />
                                ) : (
                                    <FormattedMessage {...messages.coffee} />
                                )}
                            </S.ItemsCategoryName>
                        </S.ItemsCategoryNameContainer>
                        <S.ItemsList>
                            {translatedCoffeeOffer.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    {...item}
                                    name={`${index + 1}. ${item.name}`}
                                    direction={
                                        isMobile ? 'column' : index % 2 ? 'reversed' : 'normal'
                                    }
                                />
                            ))}
                        </S.ItemsList>
                    </S.ItemsCategoryContainer>
                )}
            </S.OfferSectionInner>
        </S.OfferSection>
    )
}

export default Offer
