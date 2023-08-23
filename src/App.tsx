import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global.styles'
import { Router } from './router'
import { CartProvider } from '@contexts/cartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
