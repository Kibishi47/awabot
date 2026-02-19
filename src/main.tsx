import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF335C',
      dark: '#6D213C',
      light: '#F6EAEC',
    },
    secondary: {
      main: '#6D213C',
    },
    text: {
      primary: '#252525',
    },
    background: {
      default: '#F6EAEC',
      paper: '#F6EAEC',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Satoshi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
