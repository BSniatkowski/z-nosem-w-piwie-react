import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { OnRenderHtmlAsync } from 'vike/types'

import { IStaticProps, main } from '../main'
import { IMainPageProps } from '../pages/index/+Page.types'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext) => {
    const { Page, data: staticProps } = pageContext

    const sheet = new ServerStyleSheet()
    const pageHtml = dangerouslySkipEscape(
        renderToString(
            sheet.collectStyles(
                await main(Page as React.FC<IMainPageProps>, staticProps as IStaticProps),
            ),
        ),
    )

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" href="/z-nosem-w-piwie-react/logo.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Z Nosem W Piwie</title>
            <meta name="description" content="Welcome to fictious entity 'Z Nosem W Piwie' - your virtual haven where the spirit of conviviality meets the charm of a bygone era! Immerse yourself in a whimsical fusion of rustic charm and vibrant energy, where every visit feels like a journey back in time. Join us for imaginative events, curated menus, and unforgettable moments in our fictitious pub/cafe. Escape reality and embrace the magic of make-believe at 'Z Nosem W Piwie.'">
            <meta name="theme-color" content="#FFE0B2"/>
            <meta property="og:title" content="Z Nosem W Piwie">
            <meta property="og:description" content="A fictious entity 'Z Nosem W Piwie'">
            <meta property="og:image" content="/z-nosem-w-piwie-react/logo.svg">
            ${dangerouslySkipEscape(sheet.getStyleTags())}
        </head>
      <body style="overflow: hidden;">
        <div id="page-view">${pageHtml}</div>
      </body>
    </html>`
}

export default onRenderHtml
