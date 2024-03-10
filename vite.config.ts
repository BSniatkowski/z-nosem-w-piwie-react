import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/z-nosem-w-piwie-react/',
    plugins: [
        vike({
            prerender: true,
        }),
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'lint',
            },
        }),
    ],
    ssr: {
        noExternal: ['styled-components', '@emotion/*'],
    },
    assetsInclude: ['/sb-preview/runtime.js'],
})
