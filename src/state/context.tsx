import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react'
import Reducer, { Action } from './reducer'

export interface Store {
  state: StateContext
  dispatch?: Dispatch<Action>
}

export type StateContext = {
  playAudio: boolean
}

export const defaultState: StateContext = {
  playAudio: false,
}

// * Cria o estado inicial
const Context = createContext<Store>({ state: defaultState })

// * Atalho para utilizar o context geral
export const useStateContext = () => useContext(Context)

export default function StateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(Reducer, defaultState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
