import { useCallback, useMemo } from 'react'

import event_1 from '/imgs/event_1.png'
import event_2 from '/imgs/event_2.png'
import event_3 from '/imgs/event_3.png'
import map from '/imgs/map.png'
import merch_1 from '/imgs/tshirt.png'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Button from '../../atoms/Button/Button'
import Card from '../../atoms/Card/Card'
import Icon from '../../atoms/Icon/Icon'
import TextInput from '../../atoms/TextInput/TextInput'
import Carousel from '../../organisms/Carousel/Carousel'
import { TCarouselItems } from '../../organisms/Carousel/Carousel.types'
import * as S from './About.style'

const About = () => {
    const isTablet = useBreakpoint('tablet')
    const isMobile = useBreakpoint('mobile')

    const composeEventItemElement = useCallback(
        ({
            title,
            date,
            description,
            imgSrc,
        }: {
            title: string
            date: string
            description: string
            imgSrc: string
        }) => (
            <S.EventContainer $isMobile={isMobile}>
                <S.EventDescription>
                    <Button
                        label={`${title} ${date}`}
                        iconVariant='share'
                        onClick={async () => {
                            try {
                                await navigator.clipboard.writeText(
                                    'https://www.facebook.com/fake_event_link',
                                )
                                console.log('Content copied to clipboard')
                            } catch (err) {
                                console.error('Failed to copy: ', err)
                            }
                        }}
                    />
                    <p>{description}</p>
                </S.EventDescription>
                {imgSrc && <S.EventImg src={imgSrc} />}
            </S.EventContainer>
        ),
        [isMobile],
    )

    const eventsItems = useMemo(
        () => [
            {
                id: 'coffeest',
                itemElement: composeEventItemElement({
                    title: 'Coffeest',
                    date: '10.2024',
                    description:
                        'Coffeest - A Brew-tiful Blend of Art and Aroma Indulge your senses in the enchanting world of "Coffeest" at "Z Nosem W Piwie." Immerse yourself in a celebration of the finer things in life - the rich aroma of freshly brewed coffee and the artistic ambiance that elevates your coffee-drinking experience. "Coffeest" is more than an event; it\'s a sensory journey where every sip becomes a moment of pure bliss, and every conversation is enriched by the warmth of our carefully crafted brews.',
                    imgSrc: event_1,
                }),
            },
            {
                id: 'brewers_banquet',
                itemElement: composeEventItemElement({
                    title: "Brewer's Banquet",
                    date: '6-12.11.2024',
                    description:
                        "Brewer's Banquet: A Beer Tasting Feast Dive into the world of craft beers at \"Brewer's Banquet.\" Indulge your palate with a curated selection of artisanal brews, each with its unique flavor profile and story. Whether you're a seasoned beer enthusiast or a curious newcomer, this tasting event is a celebration of the art and science behind exceptional brewing.",
                    imgSrc: event_2,
                }),
            },
            {
                id: 'canvas_and_beer',
                itemElement: composeEventItemElement({
                    title: 'Canvas and Beer',
                    date: '8.06.2024',
                    description:
                        'Canvas and Beer: Artistic Expressions Over Ales Unleash your inner artist in a delightful fusion of creativity and craft beer! "Canvas and Beer" invites you to paint your masterpiece while sipping on our specially selected ales. Let the flavors inspire your brushstrokes as you create art in the cozy ambiance of "Z Nosem W Piwie."',
                    imgSrc: event_3,
                }),
            },
        ],
        [composeEventItemElement],
    ) satisfies TCarouselItems

    const merchItems = [
        {
            id: 'tshirt',
            itemElement: <S.MerchImg src={merch_1} />,
        },
    ] satisfies TCarouselItems

    return (
        <S.AboutSection id='about'>
            <S.AboutSectionInner>
                <Card size='full'>
                    <h1 className='decorative'>Z Nosem W Piwie</h1>
                    <p>
                        At "Z Nosem W Piwie," we've meticulously crafted a haven that transcends the
                        ordinary, inviting you to step into an imaginary realm where nostalgia
                        intertwines with boundless creativity. Our whimsical establishment, bearing
                        the playful moniker "Z Nosem W Piwie" (translating to "With a Nose in
                        Beer"), is more than just a fictitious pub/cafe—it's an immersive experience
                        where every visit is a journey into the extraordinary.
                        <br />
                        <br /> Step into a cozy corner adorned with eclectic decorations, vintage
                        posters, and the warm glow of flickering candlelight. The ambiance at "Z
                        Nosem W Piwie" is a carefully curated blend of rustic charm and vibrant
                        energy. It's an environment designed to invite you to unwind, connect with
                        others, and savor each moment, creating a timeless escape where
                        conversations flow freely.
                        <br />
                        <br /> While our pub/cafe might be born from imagination, the flavors we
                        serve are grounded in the real joy of culinary exploration. Our menu is a
                        testament to global inspirations, featuring hearty pub fare, aromatic
                        coffees, and an artfully curated selection of imaginative beverages. From
                        the allure of fictional craft beers to the whimsy of creatively crafted
                        cocktails, every sip and bite at "Z Nosem W Piwie" is designed to transport
                        you to a world of delightful gastronomy.
                        <br />
                        <br /> The spirit of make-believe comes alive with an array of events at "Z
                        Nosem W Piwie." From live music performances that resonate through the walls
                        to themed parties that transcend the ordinary, and quirky trivia nights that
                        challenge the imagination - our event calendar is always buzzing with
                        make-believe happenings. Check regularly for updates and immerse yourself in
                        the magic of our make-believe world.
                    </p>
                    <S.MapContainer>
                        <img src={map} />
                    </S.MapContainer>
                    <h4 className='decorative' style={{ textAlign: 'center' }}>
                        Cracow, Main Square 0, 00-000
                    </h4>
                </Card>
                <S.CardsContainer>
                    <Card size='fit'>
                        <h4 className='decorative'>Opening hours</h4>
                        <S.ContentRow>
                            <span>Monday - Thursday</span>
                            <span>8:00 - 22:30</span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>Friday - Saturday</span>
                            <span>10:00 - 1:30</span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>Sunday</span>
                            <span>10:00 - 18:00</span>
                        </S.ContentRow>
                    </Card>
                    <Card size='fit'>
                        <S.ContentRow>
                            <h4 className='decorative'>email</h4>
                            <span>contact@znosemwpiwie.com</span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <h4 className='decorative'>phone</h4>
                            <span>+48 000 000 000</span>
                        </S.ContentRow>
                    </Card>
                    <Card size='fit'>
                        <h4 className='decorative'>Join our newsletter</h4>
                        <Button size='full' label='Ok!' onClick={() => 'Click'} />
                    </Card>
                </S.CardsContainer>
                <Card size='full'>
                    <h3 className='decorative' style={{ textAlign: 'center' }}>
                        Upcoming events
                    </h3>
                    <Carousel autoChange items={eventsItems} />
                </Card>
                <S.ContactAndMerchContainer id='contact' $isTablet={isTablet}>
                    <Card size='full'>
                        <h4 className='decorative' style={{ textAlign: 'center' }}>
                            Contact Us
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4rem',
                                alignItems: 'flex-end',
                            }}
                        >
                            <TextInput label='Fullname' />
                            <TextInput label='Contact email' />
                            <TextInput label='Message' />
                            <Button
                                label='Send'
                                iconVariant='send'
                                onClick={() => console.log('click')}
                            />
                        </div>
                    </Card>
                    <Card size={40}>
                        <S.MerchTitle>
                            Checkout our merch!
                            <Icon variant='merch' />
                        </S.MerchTitle>
                        <Carousel autoChange items={merchItems} />
                    </Card>
                </S.ContactAndMerchContainer>
            </S.AboutSectionInner>
        </S.AboutSection>
    )
}

export default About
