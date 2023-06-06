import midiaFazOUrro from '@assets/audio_faz_o_urro.mp3'
import Tracker from '@openreplay/tracker'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import { useCallback, useEffect, useState } from 'react'
import StateProvider from 'state/context'
import { Router } from './router/Router'

const tracker = new Tracker({
  projectKey: 'hmx2xSaArVhyJhDOZsPH',
  __DISABLE_SECURE_MODE: true,
})

LogRocket.init('filipes/faketinder')
setupLogRocketReact(LogRocket)

export function App() {
  useEffect(() => {
    tracker.start()
  }, [])

  const [audio, _] = useState(new Audio(midiaFazOUrro))
  audio.volume = 0.2

  const handleClick = useCallback(() => {
    audio.play()

    return () => {
      audio.pause()
    }
  }, [audio])

  return (
    <StateProvider>
      <div onClick={handleClick} aria-hidden="true">
        <Router />
      </div>
    </StateProvider>
  )
}
