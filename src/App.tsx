import Tracker from '@openreplay/tracker'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import { useEffect } from 'react'
import StateProvider from 'state/context'
import { Router } from './router/Router'

const tracker = new Tracker({
  projectKey: 'hmx2xSaArVhyJhDOZsPH',
  __DISABLE_SECURE_MODE: true,
})

LogRocket.init('filipes/faketinder')
setupLogRocketReact(LogRocket)

export function App() {
  console.log('🚀 ~ file: App.tsx:19 ~ useEffect ~ tracker:', tracker)
  useEffect(() => {
    tracker.start()
  }, [])

  return (
    <StateProvider>
      <Router />
    </StateProvider>
  )
}
