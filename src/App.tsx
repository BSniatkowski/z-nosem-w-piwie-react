import Layout from './components/templates/Layout/Layout'
import ThemeProvider from './providers/ThemeProvider/ThemeProviding'

function App() {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    )
}

export default App
