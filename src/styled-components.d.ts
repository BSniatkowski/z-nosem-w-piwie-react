import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: string
            secondary: string
            accent: string
            error: string
            info: string
            success: string
            warning: string
            white: string
            black: string
            grey: string
            greyLighten1: string
            greyLighten2: string
            shades: {
                black: {
                    18: string
                    38: string
                    87: string
                }
                primary: {
                    48: string
                    87: string
                }
                secondary: {
                    18: string
                    38: string
                    48: string
                }
            }
        }
        border: { primary: string; secondary: string }
        boxShadow: { primary: string; secondary: string }
    }
}
