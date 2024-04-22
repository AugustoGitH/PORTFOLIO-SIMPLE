import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './contexts/ThemeContext/index.tsx'
import { GlobalStyles } from './styles/components/GlobalStyles.tsx'

import TranslateProvider from './contexts/TranslateContext/index.tsx'
import ToastProvider from './contexts/ToastContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TranslateProvider>
        <ToastProvider>
          <GlobalStyles />
          <App />
        </ToastProvider>
      </TranslateProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
