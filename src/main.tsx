import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { darkTheme } from './theme.ts'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'


createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
 </StrictMode>
)
