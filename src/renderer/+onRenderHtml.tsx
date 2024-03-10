export { onRenderHtml }

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
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Z Nosem W Piwie</title>
        ${dangerouslySkipEscape(sheet.getStyleTags())}
      </head>
      <body style="overflow: hidden;">
        <div id="page-view">${pageHtml}</div>
      </body>
    </html>`
}

export default onRenderHtml
