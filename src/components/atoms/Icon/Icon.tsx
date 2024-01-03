import close from '/close.svg'
import copyright from '/copyright.svg'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'
import menu from '/menu.svg'
import merch from '/merch.svg'
import send from '/send.svg'
import share from '/share.svg'
import tiktok from '/tiktok.svg'
import x from '/x.svg'
import youtube from '/youtube.svg'

import { SIcon } from './Icon.style'
import { IIconProps } from './Icon.types'

const Icon = ({ size = 'normal', variant = 'close' }: IIconProps) => {
    const IconPath = {
        close: close,
        copyright: copyright,
        facebook: facebook,
        instagram: instagram,
        menu: menu,
        merch: merch,
        send: send,
        share: share,
        tiktok: tiktok,
        x: x,
        youtube: youtube,
    }[variant]

    return <SIcon src={IconPath} $size={size} />
}

export default Icon
