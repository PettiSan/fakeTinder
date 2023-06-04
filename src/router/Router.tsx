import midiaSong from '@assets/Marshmello_Happier.mp3'
import midiaVideo from '@assets/naruto_balanco_sad.mp4'
import { DevTools } from '@components/devTools/DevTools'
import { Loading } from '@components/loading/Loading'
import Midia from '@components/midia/Midia'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { ScrollToTop } from './ScrollToTop'

export function Router() {
  return (
    <BrowserRouter>
      <Midia video={midiaVideo} song={midiaSong} />

      {import.meta.env.DEV && <DevTools />}

      <ScrollToTop />

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
