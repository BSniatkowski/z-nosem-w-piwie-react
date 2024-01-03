import { ThemeProvider as SThemeProvider } from 'styled-components'

import { theme } from './theme'

const ThemeProvider = ({ children }: { children: React.ReactElement }) => {
    return <SThemeProvider theme={theme}>{children}</SThemeProvider>
}

export default ThemeProvider
