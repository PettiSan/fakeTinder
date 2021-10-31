import React from 'react'
import styles from './Loading.module.css'

export function Loading() {
  return (
    <div
      aria-roledescription="Carregando"
      className="rounded-full p-2 inline-block bg-black bg-opacity-20"
    >
      <div className={styles.loading} />
    </div>
  )
}
