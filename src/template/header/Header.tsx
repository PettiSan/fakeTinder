import avatarFile from '@assets/logo_tinder.png'
import NotificationsIcon from '@icons/NotificationsIcon'
import SettingsIcon from '@icons/SettingsIcon'
import clsx from 'clsx'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={clsx(styles.header)}>
      <img src={avatarFile} alt="Logo" />

      <div className={clsx('icon', 'flex items-center space-x-8')}>
        <NotificationsIcon />
        <SettingsIcon />
      </div>
    </header>
  )
}
