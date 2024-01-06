import { DefaultTheme } from 'styled-components/dist/types'

export const theme = {
    palette: {
        primary: '#FFE0B2',
        secondary: '#5D4037',
        accent: '#FFCA28',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        white: '#fff',
        black: '#000',
        grey: '#9E9E9E',
        greyLighten1: '#BDBDBD',
        greyLighten2: '#E0E0E0',
        shades: {
            black: {
                38: '#00000061',
                87: '#000000DE',
            },
            primary: {
                48: '#FFE0B280',
                87: '#FFE0B2DE',
            },
            secondary: {
                18: '#5D40372E',
                38: '#5D403761',
                48: '#5D40377A',
            },
        },
    },
} satisfies DefaultTheme
