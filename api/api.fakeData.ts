import beer_1 from '/imgs/beer_1.webp'
import beer_2 from '/imgs/beer_2.webp'
import beer_3 from '/imgs/beer_3.webp'
import coffee_1 from '/imgs/coffee.webp'
import coffee_2 from '/imgs/coffee_2.webp'
import coffee_3 from '/imgs/coffee_3.webp'
import event_1 from '/imgs/event_1.webp'
import event_2 from '/imgs/event_2.webp'
import event_3 from '/imgs/event_3.webp'
import merch_1 from '/imgs/tshirt.webp'

import { EN, PL } from '../src/components/molecules/LanguagePicker/LanguagePicker.consts'
import { IEventItemElement, IMerchItemElement, IOfferItem } from './api.types'

export const offerData = {
    beers: [
        {
            translations: {
                [EN]: {
                    name: 'India Pale Ale (IPA)',
                    description:
                        'India Pale Ale (IPA) is a beer style characterized by its hoppy flavor profile and higher alcohol content. Originating in England, IPAs gained popularity due to their robustness and ability to withstand long journeys to British troops stationed in India during the 18th century. These beers are known for their prominent hop bitterness, often featuring floral, piney, or citrusy aromas and flavors derived from hops. There are various subcategories within IPAs, such as American IPA, New England IPA, and Double IPA, each with distinct hop profiles and brewing techniques. IPAs typically exhibit a golden to amber color and are favored by craft beer enthusiasts for their bold, bitter, and often fruity characteristics.',
                },
                [PL]: {
                    name: 'India Pale Ale (IPA)',
                    description:
                        'India Pale Ale (IPA) to styl piwa charakteryzujący się chmielowym profilem smakowym i wyższą zawartością alkoholu. Pochodzący z Anglii, IPA zyskały popularność ze względu na swoją wytrzymałość i zdolność do przetrwania długich podróży do brytyjskich oddziałów stacjonujących w Indiach w XVIII wieku. Te piwa są znane z wyraźnej goryczki chmielu, często z nutami kwiatowymi, sosnowymi lub cytrusowymi aromatami i smakami pochodzącymi od chmielu. Istnieje wiele podkategorii wśród IPA, takich jak American IPA, New England IPA i Double IPA, z każdą z nich charakteryzującą się unikalnym profilem chmielu i technikami warzenia. IPA zazwyczaj mają złoto-ambrowy kolor i są cenione przez miłośników piwa rzemieślniczego za swoje odważne, goryczkowe i często owocowe cechy.',
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_1,
        },
        {
            translations: {
                [EN]: {
                    name: 'Stout',
                    description:
                        'Stout is a dark, rich beer known for its creamy texture, full-bodied nature, and roasted malt flavors. It originated in the United Kingdom and has several variations, including Dry Stout (Irish Stout), Imperial Stout, and Milk Stout (Sweet Stout). Stouts typically showcase dark, roasted malt flavors that impart coffee, chocolate, caramel, and sometimes even nutty or toasty notes. The use of roasted barley in the brewing process gives stouts their distinct dark color and contributes to their robust flavor profile. While some stouts have a higher alcohol content, they are generally characterized by their smoothness and can range from sweet to bitter in taste, making them a favorite among beer enthusiasts seeking a hearty and flavorful brew.',
                },
                [PL]: {
                    name: 'Stout',
                    description:
                        'Stout to ciemne, bogate piwo znane z kremowej tekstury, pełnego smaku i aromatu palonych słodów. Pochodzi z Wielkiej Brytanii i ma kilka odmian, w tym Dry Stout (Irish Stout), Imperial Stout i Milk Stout (Sweet Stout). Stouty zazwyczaj prezentują ciemne, palone smaki słodów, które nadają nuty kawy, czekolady, karmelu, a czasami nawet orzechowe lub tostowe. Użycie palonego jęczmienia w procesie warzenia nadaje stoutom charakterystyczny ciemny kolor i przyczynia się do ich intensywnego profilu smakowego. Choć niektóre stouty mają wyższą zawartość alkoholu, są one generalnie charakteryzowane przez swoją gładkość i mogą mieć smak od słodkiego do gorzkiego, co czyni je ulubionym wyborem miłośników piwa poszukujących sycącego i aromatycznego napoju.',
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_2,
        },
        {
            translations: {
                [EN]: {
                    name: 'Pilsner',
                    description:
                        'Pilsner is a pale lager that originated in the Czech Republic, specifically in the city of Pilsen. It is renowned for its crisp, clean taste, golden hue, and refreshing qualities. Pilsners are typically light-bodied with a moderate hop bitterness and a prominent malt presence. They often have a noticeable but balanced hoppy aroma, with floral or spicy notes derived from noble hops. Pilsners undergo a lagering process that contributes to their clarity and smoothness, making them highly drinkable and widely popular, particularly during warm weather. Known for their well-balanced flavors and effervescence, Pilsners remain a go-to choice for those seeking a refreshing and sessionable beer style.',
                },
                [PL]: {
                    name: 'Pilsner',
                    description:
                        'Pilsner to jasny lager pochodzący z Czech, konkretnie z miasta Pilzno. Jest znany ze swojego klarownego, czystego smaku, złotego koloru i orzeźwiających cech. Pilsnery zazwyczaj są lekkie, z umiarkowaną goryczką chmielu i wyraźną obecnością słodu. Często mają zauważalny, ale zrównoważony aromat chmielu, z nutami kwiatowymi lub pikantnymi pochodzącymi od szlachetnych odmian chmielu. Pilsnery przechodzą proces leżakowania, który przyczynia się do ich klarowności i gładkości, sprawiając, że są wyjątkowo pijalne i szeroko popularne, zwłaszcza podczas ciepłej pogody. Znane ze swoich zrównoważonych smaków i musujących właściwości, Pilsnery pozostają popularnym wyborem dla tych, którzy szukają orzeźwiającego i sesyjnego stylu piwa.',
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_3,
        },
        {
            translations: {
                [EN]: {
                    name: 'Pale Ale',
                    description:
                        'Pale Ale is a beer style known for its balanced yet flavorful profile. It typically exhibits a copper to amber color and showcases a moderate hop presence coupled with a substantial malt backbone. With origins in Britain, Pale Ales offer a harmonious blend of hoppy bitterness and malt sweetness, often featuring fruity, floral, or citrusy hop aromas and flavors. There are various subcategories within Pale Ales, such as American Pale Ale and English Bitter, each with unique characteristics stemming from different hop varieties and brewing techniques. Pale Ales are often less bitter than IPAs, making them approachable for a wide range of beer enthusiasts, and they provide a pleasant drinking experience with their well-rounded flavors.',
                },
                [PL]: {
                    name: 'Pale Ale',
                    description:
                        'Pale Ale to styl piwa znany ze zrównoważonego, ale aromatycznego profilu. Zazwyczaj prezentuje miedziany lub bursztynowy kolor i charakteryzuje się umiarkowaną obecnością chmielu w połączeniu z solidną bazą słodową. Wywodzące się z Wielkiej Brytanii, Pale Ale oferuje harmonijną mieszankę goryczki chmielowej i słodowej słodyczy, często z nutami owocowymi, kwiatowymi lub cytrusowymi aromatami i smakami chmielu. Istnieje wiele podkategorii wśród Pale Ale, takich jak American Pale Ale i English Bitter, z unikalnymi cechami wynikającymi z różnych odmian chmielu i technik warzenia. Pale Ale są często mniej gorzkie niż IPA, co sprawia, że są dostępne dla szerokiego spektrum miłośników piwa, i zapewniają przyjemne doświadczenie degustacyjne dzięki swoim zrównoważonym smakom.',
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_1,
        },
        {
            translations: {
                [EN]: {
                    name: 'Hefeweizen',
                    description:
                        'Hefeweizen is a traditional German wheat beer celebrated for its cloudy appearance and distinctive yeast-derived flavors. Brewed with a significant portion of wheat malt, Hefeweizens are known for their refreshing and effervescent nature. They often display a hazy, straw-colored appearance and a tall, foamy head. These beers commonly exhibit flavors and aromas reminiscent of banana, clove, and sometimes even bubblegum, which are produced by specific strains of yeast used during fermentation. Hefeweizens tend to be light-bodied, moderately carbonated, and offer a delightful balance between fruity esters and subtle spiciness, making them a popular choice, especially during warmer months.',
                },
                [PL]: {
                    name: 'Hefeweizen',
                    description:
                        'Hefeweizen to tradycyjne niemieckie piwo pszeniczne cenione za swoją mętną aparycję i charakterystyczne smaki pochodzące od drożdży. Warzone z znaczną ilością słodu pszenicznego, Hefeweizeny są znane z orzeźwiającej i musującej natury. Często prezentują mętną, słomkową barwę i wysoką, piankową głowę. Te piwa często wykazują smaki i aromaty przypominające banan, goździk, a czasami nawet gumę do żucia, które są produkowane przez konkretne szczepy drożdży używane podczas fermentacji. Hefeweizeny mają tendencję do bycia lekkimi, umiarkowanie gazowanymi i oferują uroczy balans między owocowymi esterami a subtelnością pikantności, co sprawia, że są popularnym wyborem, zwłaszcza w cieplejszych miesiącach.',
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_2,
        },
        {
            translations: {
                [EN]: {
                    name: 'Saison',
                    description:
                        "Saison, originating from Belgium, is a farmhouse ale recognized for its complex yet refreshing character. Historically brewed in the winter for consumption during the summer by farmworkers ('saisonniers'), this beer style offers a diverse range of flavors and aromas. Saisons often possess a hazy, golden appearance and showcase fruity, spicy yeast characteristics alongside a moderate hop presence. They can feature a wide array of flavors, including notes of pepper, citrus, earthiness, and even a mild tartness. Saisons are typically dry and effervescent with a moderate to high level of carbonation, providing a refreshing and complex drinking experience that pairs well with a variety of cuisines.",
                },
                [PL]: {
                    name: 'Saison',
                    description:
                        "Saison, pochodzący z Belgii, to ale farmeryjskie uznawane za swoją złożoną, a jednocześnie orzeźwiającą charakterystykę. Historycznie warzone zimą do spożycia latem przez pracowników rolnych ('saisonniers'), ten styl piwa oferuje różnorodny zakres smaków i aromatów. Saisony często posiadają mętną, złotą aparycję i prezentują owocowe, pikantne cechy drożdży w połączeniu z umiarkowaną obecnością chmielu. Mogą mieć różnorodne smaki, w tym nuty pieprzu, cytrusów, ziemistości, a nawet łagodną kwasowość. Saisony są zazwyczaj suche i musujące, z umiarkowanym do wysokiego poziomu nasycenia, co zapewnia orzeźwiające i złożone doświadczenie degustacyjne, które doskonale komponuje się z różnorodnymi kuchniami.",
                },
            },
            capacity: 0.5,
            price: 16,
            imgSrc: beer_3,
        },
    ],
    coffee: [
        {
            translations: {
                [EN]: {
                    name: 'Espresso',
                    description:
                        'Espresso is a concentrated coffee beverage brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. This method extracts intense flavors, resulting in a rich, velvety, and highly aromatic shot of coffee. Typically served in small, demitasse-sized cups, espresso is known for its robustness, strong flavor profile, and a layer of golden crema on top, which consists of oils and gases emulsified during the brewing process. It serves as the foundation for various coffee drinks like cappuccinos, lattes, and macchiatos. The taste of espresso can range from slightly sweet to notably bitter, depending on the beans used and the brewing technique employed.',
                },
                [PL]: {
                    name: 'Espresso',
                    description:
                        'Espresso to skoncentrowany napój kawowy przygotowywany przez przepuszczanie niewielkiej ilości prawie wrzącej wody przez drobno zmielone ziarna kawy. Ta metoda wyciąga intensywne smaki, dając bogate, aksamitne i silnie aromatyczne espresso. Zazwyczaj podawane w małych filiżankach typu demitasse, espresso jest znane ze swojej solidności, intensywnego profilu smakowego i warstwy złotej cremy na wierzchu, składającej się z olejów i gazów emulgowanych podczas procesu parzenia. Jest podstawą do przygotowywania różnych napojów kawowych, takich jak cappuccino, latte i macchiato. Smak espresso może się różnić od lekko słodkiego do zauważalnie gorzkiego, w zależności od użytych ziaren i zastosowanej techniki parzenia.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_1,
        },
        {
            translations: {
                [EN]: {
                    name: 'Cappuccino',
                    description:
                        "Cappuccino is a popular espresso-based drink made by combining equal parts of espresso, steamed milk, and milk foam. It's known for its luxurious creamy texture and balanced flavors. The espresso forms the base, while the steamed milk adds a velvety smoothness, and the milk foam crowns the drink, providing a frothy layer. Typically served in a cup smaller than a latte, cappuccinos offer a strong coffee flavor balanced by the milk, making it a favorite choice for those seeking a harmonious blend of espresso strength and creamy richness.",
                },
                [PL]: {
                    name: 'Cappuccino',
                    description:
                        'Cappuccino to popularny napój oparty na espresso, przygotowywany poprzez połączenie równych części espresso, mleka parzonego i pianki mlecznej. Znany jest z luksusowej, kremowej tekstury i zrównoważonych smaków. Espresso stanowi bazę, podczas gdy mleko parzone dodaje aksamitnej gładkości, a pianka mleczna wieńczy napój, tworząc puchatą warstwę. Zazwyczaj podawane w filiżance mniejszej niż latte, cappuccino oferuje silny smak kawy zrównoważony przez mleko, co czyni go ulubionym wyborem dla tych, którzy szukają harmonijnego połączenia siły espresso i kremowej słodyczy.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_2,
        },
        {
            translations: {
                [EN]: {
                    name: 'Cold Brew',
                    description:
                        "Cold brew is a coffee preparation method where coarse coffee grounds are steeped in cold water for an extended period, usually 12 to 24 hours. This slow extraction process produces a smooth, less acidic, and highly caffeinated coffee concentrate. Cold brew is appreciated for its milder, less bitter taste compared to traditionally brewed coffee, making it an excellent choice for those who prefer a smoother and less acidic coffee experience. It is often served over ice and can be customized with milk, cream, or flavored syrups to create a refreshing and customizable beverage. Cold brew's popularity has risen significantly due to its versatility and refreshing qualities, especially during warm weather.",
                },
                [PL]: {
                    name: 'Cold Brew',
                    description:
                        'Cold brew to metoda przygotowywania kawy, w której grubo zmielone ziarna kawy są macerowane w zimnej wodzie przez przedłużony okres, zazwyczaj od 12 do 24 godzin. Ten proces powolnej ekstrakcji produkuje gładki, mniej kwasowy i silnie kofeinowany koncentrat kawy. Cold brew cieszy się uznaniem za swój łagodniejszy, mniej gorzki smak w porównaniu z tradycyjnie parzoną kawą, co czyni go doskonałym wyborem dla tych, którzy preferują łagodniejsze i mniej kwasowe doświadczenie kawowe. Często podawany jest na lodzie i można go dostosować, dodając mleko, śmietanę lub syropy smakowe, aby stworzyć orzeźwiający i dostosowywalny napój. Popularność cold brew znacząco wzrosła ze względu na jego wszechstronność i orzeźwiające cechy, zwłaszcza podczas ciepłej pogody.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_3,
        },
        {
            translations: {
                [EN]: {
                    name: 'Latte',
                    description:
                        "A latte is an espresso-based drink made with a shot of espresso and steamed milk, topped with a small amount of milk foam. It's a milder and creamier coffee option compared to drinks like cappuccinos. Lattes have a higher ratio of milk to espresso, resulting in a smoother and more subdued coffee flavor. They are often served in larger cups or glasses and can be customized with flavored syrups such as vanilla, caramel, or hazelnut, allowing for a wide range of taste variations. Lattes are popular for their comforting and creamy texture, making them a favorite choice for those who enjoy a more milk-forward coffee experience.",
                },
                [PL]: {
                    name: 'Latte',
                    description:
                        'Latte to napój oparty na espresso, przygotowywany z jednym strzałem espresso, mlekiem parzonym i niewielką ilością pianki mlecznej. Jest łagodniejszą i kremową opcją kawową w porównaniu do napojów takich jak cappuccino. Latte ma wyższy stosunek mleka do espresso, co sprawia, że smak kawy jest bardziej gładki i łagodny. Często podawane w większych filiżankach lub szklankach i można je dostosować, dodając syropy smakowe, takie jak waniliowy, karmelowy lub laskowy, co pozwala na szeroki zakres wariacji smakowych. Latte cieszy się popularnością ze względu na swoją kojącą i kremową teksturę, co sprawia, że jest ulubionym wyborem dla tych, którzy preferują bardziej mleczne doświadczenie kawowe.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_1,
        },
        {
            translations: {
                [EN]: {
                    name: 'Macchiato',
                    description:
                        'A macchiato, which translates to "stained" or "marked" in Italian, is an espresso-based drink characterized by a shot of espresso "marked" with a small amount of steamed milk or milk foam. This results in a strong coffee flavor with a touch of milkiness. There are two main variations: the traditional macchiato, which features just a dollop of foam, and the more modern version, known as a "latte macchiato," where a shot of espresso is added to a glass of steamed milk, creating layers of espresso and milk. The macchiato offers a balance between the intensity of espresso and the slight creaminess of milk, appealing to those who enjoy a stronger coffee taste but with a touch of milk.',
                },
                [PL]: {
                    name: 'Macchiato',
                    description:
                        'Macchiato, co w języku włoskim oznacza "plamiony" lub "oznaczony", to napój oparty na espresso, charakteryzujący się strzałem espresso "oznaczonym" niewielką ilością mleka parzonego lub pianki mlecznej. Efektem jest silny smak kawy z lekką nutą mleczności. Istnieją dwie główne wersje: tradycyjne macchiato, które obejmuje jedynie niewielką ilość pianki, oraz bardziej nowoczesną wersję, znana jako "latte macchiato", gdzie strzał espresso dodawany jest do szkła z mlekiem parzonym, tworząc warstwy espresso i mleka. Macchiato oferuje równowagę między intensywnością espresso a lekką kremowością mleka, przyciągając tych, którzy lubią mocniejszy smak kawy, ale z nutą mleka.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_2,
        },
        {
            translations: {
                [EN]: {
                    name: 'Pour-Over Coffee',
                    description:
                        "Pour-over coffee is a manual brewing method that involves pouring hot water over coffee grounds placed in a filter, allowing the water to slowly drip through into a serving vessel below. This technique allows for precise control over brewing variables such as water temperature, pour rate, and coffee-to-water ratio, resulting in a clean, nuanced, and flavorful cup of coffee. The pour-over method emphasizes the use of fresh, high-quality coffee beans and allows the drinker to appreciate the subtle nuances of different coffee varieties. It's favored by coffee enthusiasts who appreciate the ritualistic and hands-on approach to brewing coffee and enjoy exploring the complexities of various coffee origins and flavors.",
                },
                [PL]: {
                    name: 'Pour-Over Coffee',
                    description:
                        'Pour-over coffee to ręczna metoda parzenia kawy, polegająca na nalewaniu gorącej wody na umieszczone w filtrze ziarna kawy, pozwalając wodzie powoli przeciekać do naczynia pod spodem. Ta technika umożliwia precyzyjną kontrolę nad zmiennymi parzenia, takimi jak temperatura wody, szybkość nalewania i proporcje kawy do wody, co daje czystą, subtelnie zróżnicowaną i aromatyczną filiżankę kawy. Metoda pour-over podkreśla użycie świeżych, wysokiej jakości ziaren kawy i pozwala kawoszowi docenić subtelne niuanse różnych odmian kawy. Cieszy się uznaniem wśród miłośników kawy, którzy doceniają rytualny i praktyczny sposób parzenia kawy oraz lubią eksplorować złożoność różnych pochodzeń i smaków kawy.',
                },
            },
            capacity: 0.3,
            price: 16,
            imgSrc: coffee_3,
        },
    ],
} satisfies { beers: Array<IOfferItem>; coffee: Array<IOfferItem> }

export const eventsData = [
    {
        id: 'coffeest',
        translations: {
            [EN]: {
                title: 'Coffeest',
                date: '10.2024',
                description:
                    'Coffeest - A Brew-tiful Blend of Art and Aroma Indulge your senses in the enchanting world of "Coffeest" at "Z Nosem W Piwie." Immerse yourself in a celebration of the finer things in life - the rich aroma of freshly brewed coffee and the artistic ambiance that elevates your coffee-drinking experience. "Coffeest" is more than an event; it\'s a sensory journey where every sip becomes a moment of pure bliss, and every conversation is enriched by the warmth of our carefully crafted brews.',
                imgSrc: event_1,
            },
            [PL]: {
                title: 'Coffeest',
                date: '10.2024',
                description:
                    'Coffeest - Przepiękne połączenie sztuki i aromatu. Zanurz swoje zmysły w czarującym świecie "Coffeest" w "Z Nosem W Piwie." Pogłęb się w celebracji wyrafinowanych aspektów życia - bogaty aromat świeżo parzonej kawy i artystyczne otoczenie, które podnosi doświadczenie picia kawy. "Coffeest" to nie tylko wydarzenie; to podróż sensoryczna, gdzie każdy łyk staje się chwilą czystego błogostanu, a każda rozmowa wzbogaca się ciepłem naszych starannie przygotowanych naparów.',
                imgSrc: event_1,
            },
        },
    },
    {
        id: 'brewers_banquet',
        translations: {
            [EN]: {
                title: "Brewer's Banquet",
                date: '6-12.11.2024',
                description:
                    "Brewer's Banquet: A Beer Tasting Feast Dive into the world of craft beers at \"Brewer's Banquet.\" Indulge your palate with a curated selection of artisanal brews, each with its unique flavor profile and story. Whether you're a seasoned beer enthusiast or a curious newcomer, this tasting event is a celebration of the art and science behind exceptional brewing.",
                imgSrc: event_2,
            },
            [PL]: {
                title: 'Bankiet Piwowarów',
                date: '6-12.11.2024',
                description:
                    'Bankiet Piwowarów: Uczta Degustacji Piwa. Zanurz się w świat rzemieślniczych piw na "Bankiecie Piwowarów." Rozpieszczaj swoje kubki smakowe kuracyjnym wyborem artystycznych napojów, z każdym z unikalnym profilem smakowym i historią. Czy jesteś doświadczonym miłośnikiem piwa czy ciekawym nowicjuszem, to wydarzenie degustacyjne to święto sztuki i nauki stoiące za wyjątkowym warzeniem piwa.',
                imgSrc: event_2,
            },
        },
    },
    {
        id: 'canvas_and_beer',
        translations: {
            [EN]: {
                title: 'Canvas and Beer',
                date: '8.06.2024',
                description:
                    'Canvas and Beer: Artistic Expressions Over Ales Unleash your inner artist in a delightful fusion of creativity and craft beer! "Canvas and Beer" invites you to paint your masterpiece while sipping on our specially selected ales. Let the flavors inspire your brushstrokes as you create art in the cozy ambiance of "Z Nosem W Piwie."',
                imgSrc: event_3,
            },
            [PL]: {
                title: 'Płótno i Piwo',
                date: '8.06.2024',
                description:
                    'Płótno i Piwo: Artystyczne Wyrażenia Nad Alem. Uwolnij swojego wewnętrznego artystę w uroczej fuzji kreatywności i piwa rzemieślniczego! "Płótno i Piwo" zaprasza cię do malowania swojego arcydzieła, popijając nasze specjalnie wyselekcjonowane piwa. Pozwól smakom inspirować twoje pociągnięcia pędzlem, gdy tworzysz sztukę w przytulnym otoczeniu "Z Nosem W Piwie."',
                imgSrc: event_3,
            },
        },
    },
] satisfies Array<IEventItemElement>

export const merchData = [{ id: 'tshirt', imgSrc: merch_1 }] satisfies Array<IMerchItemElement>
