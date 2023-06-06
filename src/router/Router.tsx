import { DevTools } from '@components/devTools/DevTools'
import { Loading } from '@components/loading/Loading'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { ScrollToTop } from './ScrollToTop'

export function Router() {
  return (
    <BrowserRouter>
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
