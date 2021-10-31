import clsx from 'clsx'
import React from 'react'
import styles from './Avatar.module.css'

type AvatarProps = {
  image: string
}

export default function Avatar(props: AvatarProps) {
  const { image } = props

  return (
    <div className={clsx(styles.avatar)}>
      <img src={image} alt="Avatar" />
    </div>
  )
}
