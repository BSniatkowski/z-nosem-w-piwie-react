import { useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import {
    TAllLocalesMessages,
    TLocaleMessages,
    TLocales,
} from './components/molecules/LanguagePicker/LanguagePicker.types'
import Layout from './components/templates/Layout/Layout'
import CookiesProvider from './providers/CookiesProvider/CookiesProvider'
import SnackbarProvider from './providers/SnackbarProvider/SnackbarProvider'
import ThemeProvider from './providers/ThemeProvider/ThemeProviding'

function App({
    messages,
    locale,
    Page,
}: {
    messages: TAllLocalesMessages
    locale: TLocales
    Page: React.FC<unknown>
}) {
    const [actualIntlLocale, setActualIntlLocale] = useState(locale)

    const actualMessages = useMemo<TLocaleMessages>(
        () => messages[actualIntlLocale],
        [actualIntlLocale, messages],
    )

    return (
        <ThemeProvider>
            <IntlProvider locale={actualIntlLocale} messages={actualMessages} defaultLocale='en-GB'>
                <SnackbarProvider>
                    <CookiesProvider>
                        <Layout>
                            <Page
                                actualLocale={actualIntlLocale}
                                setActualIntlLocale={setActualIntlLocale}
                            />
                        </Layout>
                    </CookiesProvider>
                </SnackbarProvider>
            </IntlProvider>
        </ThemeProvider>
    )
}

export default App
