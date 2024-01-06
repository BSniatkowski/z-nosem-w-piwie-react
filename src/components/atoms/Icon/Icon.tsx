import close from '/icons/close.svg?raw'
import copyright from '/icons/copyright.svg?raw'
import expand from '/icons/expand.svg?raw'
import facebook from '/icons/facebook.svg?raw'
import instagram from '/icons/instagram.svg?raw'
import menu from '/icons/menu.svg?raw'
import merch from '/icons/merch.svg?raw'
import send from '/icons/send.svg?raw'
import share from '/icons/share.svg?raw'
import tiktok from '/icons/tiktok.svg?raw'
import x from '/icons/x.svg?raw'
import youtube from '/icons/youtube.svg?raw'

import * as S from './Icon.style'
import { IIconProps } from './Icon.types'

const Icon = ({ size = 'normal', variant = 'close' }: IIconProps) => {
    const svg = {
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
        expand: expand,
    }[variant]

    return <S.IconWrapper $size={size} dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Icon
