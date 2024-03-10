import ReactDOM from 'react-dom/client'
import { OnRenderClientSync } from 'vike/types'

import { main } from '../main'
import Page from '../pages/index/+Page'

const onRenderClient: OnRenderClientSync = (pageContext): ReturnType<OnRenderClientSync> => {
    const container = document.getElementById('page-view') as HTMLDivElement

    let root
    ;(async () => {
        const page = await main(Page)

        if (container.innerHTML !== '' && pageContext.isHydration) {
            // First render (hydration)
            root = ReactDOM.hydrateRoot(container, page)
        } else {
            if (!root) {
                // First render (not hydration)
                root = ReactDOM.createRoot(container)
            }

            root.render(page)
        }
    })()
}

export default onRenderClient
