import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { lightTheme } from './theme.ts'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'


createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
 </StrictMode>
)
