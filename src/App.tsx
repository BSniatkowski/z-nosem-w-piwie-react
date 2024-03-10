import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import {
    TAllLocalesMessages,
    TLocaleMessages,
    TLocales,
} from './components/molecules/LanguagePicker/LanguagePicker.types'
import Layout from './components/templates/Layout/Layout'
import { IStaticProps } from './main'
import { IMainPageProps } from './pages/index/+Page.types'
import CookiesProvider from './providers/CookiesProvider/CookiesProvider'
import SnackbarProvider from './providers/SnackbarProvider/SnackbarProvider'
import ThemeProvider from './providers/ThemeProvider/ThemeProviding'

function App({
    messages,
    locale,
    staticProps,
    Page,
}: {
    messages: TAllLocalesMessages
    locale: TLocales
    staticProps: IStaticProps
    Page: React.FC<IMainPageProps>
}) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    )

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
                            <QueryClientProvider client={queryClient}>
                                <HydrationBoundary state={staticProps.dehydratedState}>
                                    <Page
                                        actualLocale={actualIntlLocale}
                                        setActualIntlLocale={setActualIntlLocale}
                                    />
                                </HydrationBoundary>
                            </QueryClientProvider>
                        </Layout>
                    </CookiesProvider>
                </SnackbarProvider>
            </IntlProvider>
        </ThemeProvider>
    )
}

export default App
