import '../styles/global.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (<ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>)

export default App