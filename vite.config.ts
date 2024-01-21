import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'lint',
            },
        }),
    ],
    assetsInclude: ['/sb-preview/runtime.js'],
})
