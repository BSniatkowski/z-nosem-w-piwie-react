import { useCallback, useMemo } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import * as yup from 'yup'

import event_1 from '/imgs/event_1.png'
import event_2 from '/imgs/event_2.png'
import event_3 from '/imgs/event_3.png'
import map from '/imgs/map.png'
import merch_1 from '/imgs/tshirt.png'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Button from '../../atoms/Button/Button'
import Card from '../../atoms/Card/Card'
import Icon from '../../atoms/Icon/Icon'
import Carousel from '../../organisms/Carousel/Carousel'
import { TCarouselItems } from '../../organisms/Carousel/Carousel.types'
import Form from '../../organisms/Form/Form'
import messages from './About.messages'
import * as S from './About.style'
import { IContactFieldsValues, TContactFields } from './About.types'

const About = () => {
    const fields = [
        { name: 'fullname', label: 'Fullname', type: 'text', defaultValue: '' },
        { name: 'email', label: 'Contact email', type: 'text', defaultValue: '' },
        { name: 'message', label: 'Message', type: 'textarea', defaultValue: '' },
    ] satisfies TContactFields

    const validationSchema = yup
        .object({
            fullname: yup.string().max(128).required(),
            email: yup.string().email().required(),
            message: yup.string().max(512).required(),
        })
        .required()

    const onSubmit: SubmitHandler<IContactFieldsValues> = useCallback(() => {}, [])

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
                    <h1 className='decorative'>
                        <FormattedMessage {...messages.pubName} />
                    </h1>
                    <p>
                        <FormattedMessage {...messages.descriptionPart1} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart2} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart3} />
                        <br />
                        <br />
                        <FormattedMessage {...messages.descriptionPart4} />
                    </p>
                    <S.MapContainer>
                        <img src={map} />
                    </S.MapContainer>
                    <h4 className='decorative' style={{ textAlign: 'center' }}>
                        <FormattedMessage {...messages.address} />
                    </h4>
                </Card>
                <S.CardsContainer>
                    <Card size='fit'>
                        <h4 className='decorative'>
                            <FormattedMessage {...messages.openingHours} />
                        </h4>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHMT} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHMTHours} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHFS} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHFSHours} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <span>
                                <FormattedMessage {...messages.oHS} />
                            </span>
                            <span>
                                <FormattedMessage {...messages.oHSHours} />
                            </span>
                        </S.ContentRow>
                    </Card>
                    <Card size='fit'>
                        <S.ContentRow>
                            <h4 className='decorative'>
                                <FormattedMessage {...messages.emailTitle} />
                            </h4>
                            <span>
                                <FormattedMessage {...messages.email} />
                            </span>
                        </S.ContentRow>
                        <S.ContentRow>
                            <h4 className='decorative'>
                                <FormattedMessage {...messages.phoneTitle} />
                            </h4>
                            <span>
                                <FormattedMessage {...messages.phone} />
                            </span>
                        </S.ContentRow>
                    </Card>
                    <Card size={34}>
                        <h4 className='decorative'>
                            <FormattedMessage {...messages.newsletter} />
                        </h4>
                        <Button size='full' label='Ok!' onClick={() => 'Click'} />
                    </Card>
                </S.CardsContainer>
                <Card size='full'>
                    <h3 className='decorative' style={{ textAlign: 'center' }}>
                        <FormattedMessage {...messages.eventsTitle} />
                    </h3>
                    <Carousel autoChange items={eventsItems} />
                </Card>
                <S.ContactAndMerchContainer id='contact' $isTablet={isTablet}>
                    <Card size='full'>
                        <h4 className='decorative' style={{ textAlign: 'center' }}>
                            <FormattedMessage {...messages.contactTitle} />
                        </h4>
                        <Form<IContactFieldsValues>
                            fields={fields}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        />
                    </Card>
                    <Card size={40}>
                        <S.MerchTitle>
                            <FormattedMessage {...messages.merchTitle} />
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
