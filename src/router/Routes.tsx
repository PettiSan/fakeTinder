import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { PATHS } from './Paths'

const HomePage = lazy(() => import('@pages/homePage/HomePage'))
const MatchesPage = lazy(() => import('@pages/matchesPage/MatchesPage'))
const ChatPage = lazy(() => import('@pages/chatPage/ChatPage'))
const ItsAMatchePage = lazy(
  () => import('@pages/itsAMatchePage/ItsAMatchePage')
)
export function Routes() {
  const element = useRoutes([
    { path: PATHS.home, element: <HomePage /> },
    { path: PATHS.matches, element: <MatchesPage /> },
    { path: PATHS.chat, element: <ChatPage /> },
    { path: PATHS.itsAMatche, element: <ItsAMatchePage /> },
  ])

  return <>{element}</>
}
