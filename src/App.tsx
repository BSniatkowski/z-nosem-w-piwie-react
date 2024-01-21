import { useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import {
    TAllLocalesMessages,
    TLocaleMessages,
    TLocales,
} from './components/molecules/LanguagePicker/LanguagePicker.types'
import Main from './components/pages/Main/Main'
import Layout from './components/templates/Layout/Layout'
import ThemeProvider from './providers/ThemeProvider/ThemeProviding'

function App({ messages, locale }: { messages: TAllLocalesMessages; locale: TLocales }) {
    const [actualIntlLocale, setActualIntlLocale] = useState(locale)

    const actualMessages = useMemo<TLocaleMessages>(
        () => messages[actualIntlLocale],
        [actualIntlLocale, messages],
    )

    return (
        <ThemeProvider>
            <IntlProvider locale={actualIntlLocale} messages={actualMessages} defaultLocale='en-GB'>
                <Layout>
                    <Main
                        actualLocale={actualIntlLocale}
                        setActualIntlLocale={setActualIntlLocale}
                    />
                </Layout>
            </IntlProvider>
        </ThemeProvider>
    )
}

export default App
