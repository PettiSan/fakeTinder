import { ChatIcon } from '@icons/ChatIcon'
import { DiamondIcon } from '@icons/DiamondIcon'
import { SearchFooterIcon } from '@icons/SearchFooterIcon'
import { TinderIcon } from '@icons/TinderIcon'
import clsx from 'clsx'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './Footer.module.css'

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className={clsx(styles.footer)}>
      <nav>
        <ul>
          <li className={clsx(pathname === PATHS.home ? styles.active : '')}>
            <Link to={PATHS.home}>
              <TinderIcon />
            </Link>
          </li>

          <li>
            <SearchFooterIcon />
          </li>

          <li>
            <DiamondIcon />
          </li>

          <li
            className={clsx(
              pathname === PATHS.matches ? styles.active : '',
              'grow'
            )}
          >
            <Link to={PATHS.matches}>
              <ChatIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
