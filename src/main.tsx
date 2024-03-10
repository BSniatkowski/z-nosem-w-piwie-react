import './index.css'

import React from 'react'

import App from './App.tsx'

const loadLocaleData = (locale: string) => import(`../compiled-lang/${locale}.json`)

export const main = async (Page) => {
    const en = (await loadLocaleData('en'))?.default
    const pl = (await loadLocaleData('pl'))?.default

    return (
        <React.StrictMode>
            <App messages={{ 'en-GB': en, 'pl-PL': pl }} locale={'en-GB'} Page={Page} />
        </React.StrictMode>
    )
}
