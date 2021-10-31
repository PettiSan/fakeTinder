import React from 'react'
import { RouteComponentProps } from 'react-router'
import { PATHS } from './Paths'

const HomePage = React.lazy(() => import('@pages/homePage/HomePage'))
const MatchesPage = React.lazy(() => import('@pages/matchesPage/MatchesPage'))
const ChatPage = React.lazy(() => import('@pages/chatPage/ChatPage'))
const ItsAMatchePage = React.lazy(
  () => import('@pages/itsAMatchePage/ItsAMatchePage')
)
const ChatWhatIfPage = React.lazy(
  () => import('@pages/chatWhatIfPage/ChatWhatIfPage')
)

export type Route = {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  path: string
  exact?: boolean
}

export const ROUTES: Route[] = [
  { component: HomePage, exact: true, path: PATHS.home },
  { component: MatchesPage, exact: true, path: PATHS.matches },
  { component: ChatPage, exact: true, path: PATHS.chat },
  { component: ItsAMatchePage, exact: true, path: PATHS.itsAMatche },
  { component: ChatWhatIfPage, exact: true, path: PATHS.chatWhatIf },
]
