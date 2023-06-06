import { StateContext, defaultState } from './context'

export enum ActionType {
  SET_PLAY_AUDIO = 'Set to audio start playing',
  CLEAR_STATE = 'Clear state',
}

export type Action =
  | { type: ActionType.SET_PLAY_AUDIO; payload: boolean }
  | { type: ActionType.CLEAR_STATE; payload: undefined }

const Reducer = (state: StateContext, { type, payload }: Action) => {
  switch (type) {
    case ActionType.SET_PLAY_AUDIO:
      return { ...state, playAudio: payload }

    case ActionType.CLEAR_STATE:
      return {
        ...defaultState,
      }

    default:
      throw new Error('ActionType não existe!')
  }
}

export default Reducer
