import midiaSong from '@assets/Marshmello_Happier.mp3'
import midiaVideo from '@assets/naruto_balanco_sad.mp4'
import { DevTools } from '@components/devTools/DevTools'
import { Loading } from '@components/loading/Loading'
import Midia from '@components/midia/Midia'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ROUTES } from './Routes'
import { ScrollToTop } from './ScrollToTop'

export function Router() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
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
          <Switch>
            {ROUTES.map((route, i) => {
              return (
                <Route
                  component={route.component}
                  exact={!!route.exact}
                  key={i}
                  path={route.path}
                />
              )
            })}
          </Switch>
        </Suspense>
      </QueryParamProvider>
    </BrowserRouter>
  )
}
