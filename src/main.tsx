import './index.css'

import { DehydratedState } from '@tanstack/react-query'
import React from 'react'

import App from './App.tsx'
import { IMainPageProps } from './pages/index/+Page.types.ts'

const loadLocaleData = (locale: string) => import(`../compiled-lang/${locale}.json`)

export interface IStaticProps {
    dehydratedState: DehydratedState
}

export type TMain = (
    Page: React.FC<IMainPageProps>,
    staticProps: IStaticProps,
) => Promise<React.ReactElement>

export const main: TMain = async (Page, staticProps) => {
    const en = (await loadLocaleData('en'))?.default
    const pl = (await loadLocaleData('pl'))?.default

    return (
        <React.StrictMode>
            <App
                messages={{ 'en-GB': en, 'pl-PL': pl }}
                locale={'en-GB'}
                Page={Page}
                staticProps={staticProps}
            />
        </React.StrictMode>
    )
}
