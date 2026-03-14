import { BrowserRouter } from 'react-router-dom'
import { HomeProvider } from '../context/HomeContext'

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <HomeProvider>{children}</HomeProvider>
    </BrowserRouter>
  )
}
