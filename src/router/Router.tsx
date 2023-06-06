import midiaSalvame from '@assets/audio_salvame.mp3'
import { DevTools } from '@components/devTools/DevTools'
import { Loading } from '@components/loading/Loading'
import Midia from '@components/midia/Midia'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

export function Router() {
  return (
    <BrowserRouter>
      {import.meta.env.DEV && <DevTools />}

      <Midia song={midiaSalvame} />

      <Suspense
        fallback={
          <div className="w-full flex justify-center h-[80vh] mt-10 ">
            <div>
              <Loading />
            </div>
          </div>
        }
      >
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}
