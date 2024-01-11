import beer_1 from '/imgs/beer_1.png'
import beer_2 from '/imgs/beer_2.png'
import beer_3 from '/imgs/beer_3.png'
import coffee_1 from '/imgs/coffee.png'
import coffee_2 from '/imgs/coffee_2.png'
import coffee_3 from '/imgs/coffee_3.png'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import MenuItem from '../../molecules/MenuItem/MenuItem'
import { IMenuItemProps } from '../../molecules/MenuItem/MenuItem.types'
import * as S from './Offer.style'

const Offer = () => {
    const beersOffer = [
        {
            name: 'India Pale Ale (IPA)',
            capacity: 0.5,
            price: 16,
            description:
                'India Pale Ale (IPA) is a beer style characterized by its hoppy flavor profile and higher alcohol content. Originating in England, IPAs gained popularity due to their robustness and ability to withstand long journeys to British troops stationed in India during the 18th century. These beers are known for their prominent hop bitterness, often featuring floral, piney, or citrusy aromas and flavors derived from hops. There are various subcategories within IPAs, such as American IPA, New England IPA, and Double IPA, each with distinct hop profiles and brewing techniques. IPAs typically exhibit a golden to amber color and are favored by craft beer enthusiasts for their bold, bitter, and often fruity characteristics.',
            imgSrc: beer_1,
        },
        {
            name: 'Stout',
            capacity: 0.5,
            price: 16,
            description:
                'Stout is a dark, rich beer known for its creamy texture, full-bodied nature, and roasted malt flavors. It originated in the United Kingdom and has several variations, including Dry Stout (Irish Stout), Imperial Stout, and Milk Stout (Sweet Stout). Stouts typically showcase dark, roasted malt flavors that impart coffee, chocolate, caramel, and sometimes even nutty or toasty notes. The use of roasted barley in the brewing process gives stouts their distinct dark color and contributes to their robust flavor profile. While some stouts have a higher alcohol content, they are generally characterized by their smoothness and can range from sweet to bitter in taste, making them a favorite among beer enthusiasts seeking a hearty and flavorful brew.',
            imgSrc: beer_2,
        },
        {
            name: 'Pilsner',
            capacity: 0.5,
            price: 16,
            description:
                'Pilsner is a pale lager that originated in the Czech Republic, specifically in the city of Pilsen. It is renowned for its crisp, clean taste, golden hue, and refreshing qualities. Pilsners are typically light-bodied with a moderate hop bitterness and a prominent malt presence. They often have a noticeable but balanced hoppy aroma, with floral or spicy notes derived from noble hops. Pilsners undergo a lagering process that contributes to their clarity and smoothness, making them highly drinkable and widely popular, particularly during warm weather. Known for their well-balanced flavors and effervescence, Pilsners remain a go-to choice for those seeking a refreshing and sessionable beer style.',
            imgSrc: beer_3,
        },
        {
            name: 'Pale Ale',
            capacity: 0.5,
            price: 16,
            description:
                'Pale Ale is a beer style known for its balanced yet flavorful profile. It typically exhibits a copper to amber color and showcases a moderate hop presence coupled with a substantial malt backbone. With origins in Britain, Pale Ales offer a harmonious blend of hoppy bitterness and malt sweetness, often featuring fruity, floral, or citrusy hop aromas and flavors. There are various subcategories within Pale Ales, such as American Pale Ale and English Bitter, each with unique characteristics stemming from different hop varieties and brewing techniques. Pale Ales are often less bitter than IPAs, making them approachable for a wide range of beer enthusiasts, and they provide a pleasant drinking experience with their well-rounded flavors.',
            imgSrc: beer_1,
        },
        {
            name: 'Hefeweizen',
            capacity: 0.5,
            price: 16,
            description:
                'Hefeweizen is a traditional German wheat beer celebrated for its cloudy appearance and distinctive yeast-derived flavors. Brewed with a significant portion of wheat malt, Hefeweizens are known for their refreshing and effervescent nature. They often display a hazy, straw-colored appearance and a tall, foamy head. These beers commonly exhibit flavors and aromas reminiscent of banana, clove, and sometimes even bubblegum, which are produced by specific strains of yeast used during fermentation. Hefeweizens tend to be light-bodied, moderately carbonated, and offer a delightful balance between fruity esters and subtle spiciness, making them a popular choice, especially during warmer months.',
            imgSrc: beer_2,
        },
        {
            name: 'Saison',
            capacity: 0.5,
            price: 16,
            description:
                "Saison, originating from Belgium, is a farmhouse ale recognized for its complex yet refreshing character. Historically brewed in the winter for consumption during the summer by farmworkers ('saisonniers'), this beer style offers a diverse range of flavors and aromas. Saisons often possess a hazy, golden appearance and showcase fruity, spicy yeast characteristics alongside a moderate hop presence. They can feature a wide array of flavors, including notes of pepper, citrus, earthiness, and even a mild tartness. Saisons are typically dry and effervescent with a moderate to high level of carbonation, providing a refreshing and complex drinking experience that pairs well with a variety of cuisines.",
            imgSrc: beer_3,
        },
    ] satisfies Array<IMenuItemProps>

    const coffeeOffer = [
        {
            name: 'Espresso',
            capacity: 0.5,
            price: 16,
            description:
                'Espresso is a concentrated coffee beverage brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. This method extracts intense flavors, resulting in a rich, velvety, and highly aromatic shot of coffee. Typically served in small, demitasse-sized cups, espresso is known for its robustness, strong flavor profile, and a layer of golden crema on top, which consists of oils and gases emulsified during the brewing process. It serves as the foundation for various coffee drinks like cappuccinos, lattes, and macchiatos. The taste of espresso can range from slightly sweet to notably bitter, depending on the beans used and the brewing technique employed.',
            imgSrc: coffee_1,
        },
        {
            name: 'Cappuccino',
            capacity: 0.5,
            price: 16,
            description:
                "Cappuccino is a popular espresso-based drink made by combining equal parts of espresso, steamed milk, and milk foam. It's known for its luxurious creamy texture and balanced flavors. The espresso forms the base, while the steamed milk adds a velvety smoothness, and the milk foam crowns the drink, providing a frothy layer. Typically served in a cup smaller than a latte, cappuccinos offer a strong coffee flavor balanced by the milk, making it a favorite choice for those seeking a harmonious blend of espresso strength and creamy richness.",
            imgSrc: coffee_2,
        },
        {
            name: 'Cold Brew',
            capacity: 0.5,
            price: 16,
            description:
                "Cold brew is a coffee preparation method where coarse coffee grounds are steeped in cold water for an extended period, usually 12 to 24 hours. This slow extraction process produces a smooth, less acidic, and highly caffeinated coffee concentrate. Cold brew is appreciated for its milder, less bitter taste compared to traditionally brewed coffee, making it an excellent choice for those who prefer a smoother and less acidic coffee experience. It is often served over ice and can be customized with milk, cream, or flavored syrups to create a refreshing and customizable beverage. Cold brew's popularity has risen significantly due to its versatility and refreshing qualities, especially during warm weather.",
            imgSrc: coffee_3,
        },
        {
            name: 'Latte',
            capacity: 0.5,
            price: 16,
            description:
                "A latte is an espresso-based drink made with a shot of espresso and steamed milk, topped with a small amount of milk foam. It's a milder and creamier coffee option compared to drinks like cappuccinos. Lattes have a higher ratio of milk to espresso, resulting in a smoother and more subdued coffee flavor. They are often served in larger cups or glasses and can be customized with flavored syrups such as vanilla, caramel, or hazelnut, allowing for a wide range of taste variations. Lattes are popular for their comforting and creamy texture, making them a favorite choice for those who enjoy a more milk-forward coffee experience.",
            imgSrc: coffee_1,
        },
        {
            name: 'Macchiato',
            capacity: 0.5,
            price: 16,
            description:
                'A macchiato, which translates to "stained" or "marked" in Italian, is an espresso-based drink characterized by a shot of espresso "marked" with a small amount of steamed milk or milk foam. This results in a strong coffee flavor with a touch of milkiness. There are two main variations: the traditional macchiato, which features just a dollop of foam, and the more modern version, known as a "latte macchiato," where a shot of espresso is added to a glass of steamed milk, creating layers of espresso and milk. The macchiato offers a balance between the intensity of espresso and the slight creaminess of milk, appealing to those who enjoy a stronger coffee taste but with a touch of milk.',
            imgSrc: coffee_2,
        },
        {
            name: 'Pour-Over Coffee',
            capacity: 0.5,
            price: 16,
            description:
                "Pour-over coffee is a manual brewing method that involves pouring hot water over coffee grounds placed in a filter, allowing the water to slowly drip through into a serving vessel below. This technique allows for precise control over brewing variables such as water temperature, pour rate, and coffee-to-water ratio, resulting in a clean, nuanced, and flavorful cup of coffee. The pour-over method emphasizes the use of fresh, high-quality coffee beans and allows the drinker to appreciate the subtle nuances of different coffee varieties. It's favored by coffee enthusiasts who appreciate the ritualistic and hands-on approach to brewing coffee and enjoy exploring the complexities of various coffee origins and flavors.",
            imgSrc: coffee_3,
        },
    ] satisfies Array<IMenuItemProps>

    const isMobile = useBreakpoint('mobile')

    return (
        <S.OfferSection id='offer'>
            <S.OfferSectionInner>
                <S.ItemsCategoryContainer $isMobile={isMobile}>
                    <S.ItemsCategoryNameContainer>
                        <S.ItemsCategoryName>
                            {isMobile ? 'Beers' : 'B e e r s'}
                        </S.ItemsCategoryName>
                    </S.ItemsCategoryNameContainer>
                    <S.ItemsList>
                        {beersOffer.length > 0 &&
                            beersOffer.map((item, index) => (
                                <MenuItem
                                    {...item}
                                    name={`${index + 1}. ${item.name}`}
                                    direction={
                                        isMobile ? 'column' : index % 2 ? 'reversed' : 'normal'
                                    }
                                />
                            ))}
                    </S.ItemsList>
                </S.ItemsCategoryContainer>
                {!isMobile && <S.CategoriesDivider />}
                <S.ItemsCategoryContainer $isMobile={isMobile} $direction='reverse'>
                    <S.ItemsCategoryNameContainer>
                        <S.ItemsCategoryName>
                            {isMobile ? 'Coffee' : 'C o f f e e'}
                        </S.ItemsCategoryName>
                    </S.ItemsCategoryNameContainer>
                    <S.ItemsList>
                        {coffeeOffer.length > 0 &&
                            coffeeOffer.map((item, index) => (
                                <MenuItem
                                    {...item}
                                    name={`${index + 1}. ${item.name}`}
                                    direction={
                                        isMobile ? 'column' : index % 2 ? 'reversed' : 'normal'
                                    }
                                />
                            ))}
                    </S.ItemsList>
                </S.ItemsCategoryContainer>
            </S.OfferSectionInner>
        </S.OfferSection>
    )
}

export default Offer
