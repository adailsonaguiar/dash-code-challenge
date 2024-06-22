import { ThemeProvider } from '@mui/material'
import { Dashboard } from './Pages/Dash'
import { theme } from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App
