import avatarFile from '@assets/logo_tinder.png'
import NotificationsIcon from '@icons/NotificationsIcon'
import SettingsIcon from '@icons/SettingsIcon'
import SoundOffIcon from '@icons/SoundOffIcon'
import SoundOnIcon from '@icons/SoundOnIcon'
import clsx from 'clsx'
import { useCallback } from 'react'
import { useStateContext } from 'state/context'
import { ActionType } from 'state/reducer'
import styles from './Header.module.css'

export function Header() {
  const { allowAudio } = useStateContext().state
  const { dispatch } = useStateContext()
  console.log('🚀 ~ file: Header.tsx:12 ~ Header ~ allowAudio:', allowAudio)

  const handleAllowAudio = useCallback(() => {
    dispatch &&
      dispatch({ type: ActionType.SET_ALLOW_AUDIO, payload: !allowAudio })
  }, [dispatch, allowAudio])

  return (
    <header className={clsx(styles.header)}>
      <img src={avatarFile} alt="Logo" />

      <button
        onClick={handleAllowAudio}
        className={clsx(
          'flex bg-opacity-80 icon bg-black px-2 rounded-full',
          allowAudio ? '!text-green' : '!text-red'
        )}
      >
        {allowAudio ? <SoundOnIcon /> : <SoundOffIcon />}
      </button>

      <div className={clsx('icon', 'flex items-center space-x-8')}>
        <NotificationsIcon />
        <SettingsIcon />
      </div>
    </header>
  )
}
