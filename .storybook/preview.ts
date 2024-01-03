import '../src/index.css'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../src/providers/ThemeProvider/theme'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeFromJSXProvider<ReactRenderer>({
            themes: {
                light: theme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
        }),
    ],
}

export default preview
