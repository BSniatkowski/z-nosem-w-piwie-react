import close from '/icons/close.svg'
import copyright from '/icons/copyright.svg'
import facebook from '/icons/facebook.svg'
import instagram from '/icons/instagram.svg'
import menu from '/icons/menu.svg'
import merch from '/icons/merch.svg'
import send from '/icons/send.svg'
import share from '/icons/share.svg'
import tiktok from '/icons/tiktok.svg'
import x from '/icons/x.svg'
import youtube from '/icons/youtube.svg'

import * as S from './Icon.style'
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

    return <S.IconImg src={IconPath} $size={size} />
}

export default Icon
