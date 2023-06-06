import StateProvider from 'state/context'
import { Router } from './router/Router'

export function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  )
}
