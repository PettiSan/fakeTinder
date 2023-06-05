import { ChatIcon } from '@icons/ChatIcon'
import { DiamondIcon } from '@icons/DiamondIcon'
import { PersonIcon } from '@icons/PersonIcon'
import { SearchFooterIcon } from '@icons/SearchFooterIcon'
import { TinderIcon } from '@icons/TinderIcon'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './Footer.module.css'

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className={clsx(styles.footer)}>
      <nav>
        <ul>
          <li
            className={clsx(
              'icon',
              pathname === PATHS.home ? styles.active : ''
            )}
          >
            <Link to={PATHS.home}>
              <TinderIcon />
            </Link>
          </li>

          <li className="icon">
            <SearchFooterIcon />
          </li>

          <li className="icon">
            <DiamondIcon />
          </li>

          <li className={clsx('icon')}>
            <Link to={PATHS.matches}>
              <ChatIcon />
            </Link>
          </li>

          <li className="icon">
            <PersonIcon />
          </li>
        </ul>
      </nav>
    </footer>
  )
}
