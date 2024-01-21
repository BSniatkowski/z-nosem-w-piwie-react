import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { locales } from './components/molecules/LanguagePicker/LanguagePicker.consts.ts'
import { TLocales } from './components/molecules/LanguagePicker/LanguagePicker.types.ts'

const loadLocaleData = (locale: string) => import(`../compiled-lang/${locale}.json`)

;(async () => {
    const en = (await loadLocaleData('en'))?.default
    const pl = (await loadLocaleData('pl'))?.default

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App
                messages={{ 'en-GB': en, 'pl-PL': pl }}
                locale={
                    // @ts-expect-error To clear lang code later
                    locales.includes(navigator.language)
                        ? (navigator.language as TLocales)
                        : 'en-GB'
                }
            />
        </React.StrictMode>,
    )
})()
