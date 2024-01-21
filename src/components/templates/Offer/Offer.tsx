import { useCallback, useEffect, useMemo, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { fetchOffer } from '../../../../api/api'
import { IOfferItem } from '../../../../api/api.types'
import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import { TLocales } from '../../molecules/LanguagePicker/LanguagePicker.types'
import MenuItem from '../../molecules/MenuItem/MenuItem'
import { IMenuItemProps } from '../../molecules/MenuItem/MenuItem.types'
import messages from './Offer.messages'
import * as S from './Offer.style'

const Offer = () => {
    const intl = useIntl()

    const [beersOffer, setBeersOffer] = useState<Array<IOfferItem>>([])
    const [coffeeOffer, setCoffeeOffer] = useState<Array<IOfferItem>>([])

    const transaltedBeersOffer = useMemo<Array<IMenuItemProps>>(
        () =>
            beersOffer.map((beer) => {
                const text = beer.translations[intl.locale as TLocales]

                return { ...beer, ...text }
            }),
        [beersOffer, intl.locale],
    )

    const transaltedCoffeeOffer = useMemo<Array<IMenuItemProps>>(
        () =>
            coffeeOffer.map((beer) => {
                const text = beer.translations[intl.locale as TLocales]

                return { ...beer, ...text }
            }),
        [coffeeOffer, intl.locale],
    )

    const isMobile = useBreakpoint('mobile')

    const updateOffer = useCallback(async () => {
        const response = await fetchOffer()

        const beers = response?.beers
        const coffee = response?.coffee

        if (beers?.length) setBeersOffer(beers)
        if (coffee?.length) setCoffeeOffer(coffee)
    }, [])

    useEffect(() => {
        updateOffer().catch(console.error)
    }, [updateOffer])

    return (
        <S.OfferSection id='offer'>
            <S.OfferSectionInner>
                {transaltedBeersOffer.length > 0 && (
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
                            {transaltedBeersOffer.map((item, index) => (
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
                {!isMobile && beersOffer.length > 0 && <S.CategoriesDivider />}
                {transaltedCoffeeOffer.length > 0 && (
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
                            {transaltedCoffeeOffer.map((item, index) => (
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
