import clsx from 'clsx'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { PATHS } from 'router/Paths'
import styles from './Card.module.css'

type CardProps = {
  title: string
  img: string
}

export function Card(props: CardProps) {
  const { img, title } = props

  const navigate = useNavigate()

  const handleCardLeftScreen = useCallback(
    (identifier: string) => {
      // * último card
      if (identifier === 'Filipe Petitemberte') {
        navigate(PATHS.itsAMatche)
      }
    },
    [navigate]
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
