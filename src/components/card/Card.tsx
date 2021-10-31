import clsx from 'clsx'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import TinderCard from 'react-tinder-card'
import { PATHS } from 'router/Paths'
import styles from './Card.module.css'

type CardProps = {
  title: string
  img: string
}

export function Card(props: CardProps) {
  const { img, title } = props

  const { push } = useHistory()

  const handleCardLeftScreen = useCallback(
    (identifier: string) => {
      // último card
      if (identifier === 'Filipe Petitemberte') {
        push(PATHS.itsAMatche)
      }
    },
    [push]
  )

  return (
    <TinderCard
      className="swipe"
      key={title}
      preventSwipe={['up', 'down']}
      onCardLeftScreen={() => handleCardLeftScreen(title)}
      swipeThreshold={300}
    >
      <div
        style={{ backgroundImage: 'url(' + img + ')' }}
        className={clsx(styles.card)}
      ></div>
    </TinderCard>
  )
}
