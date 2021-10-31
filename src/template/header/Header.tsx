import avatarFile from '@assets/10_10_corolla.png'
import clsx from 'clsx'
import React from 'react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={clsx(styles.header)}>
      <img src={avatarFile} alt="Avatar" />
    </header>
  )
}
