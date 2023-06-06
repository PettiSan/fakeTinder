import imgLoiro from '@assets/card_10_10_loiro.jpg'
import imgCebola from '@assets/card_cebola_outback.jpg'
import imgCombo from '@assets/card_combo.jpeg'
import imgCorolla from '@assets/card_corolla.webp'
import imgComida from '@assets/card_outback_comida.webp'
import imgSobremesa from '@assets/card_sobremesa_outback.jpg'
import swipeAnimation from '@assets/swipeAnimation.gif'
import { Card } from '@components/card/Card'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { useStateContext } from 'state/context'
import { ActionType } from 'state/reducer'
import styles from './CardList.module.css'

type Card = {
  title: string
  url: string
}[]

const db: Card = [
  {
    title: 'Combo',
    url: imgCombo,
  },
  {
    title: 'Outback sobremesa',
    url: imgSobremesa,
  },
  {
    title: 'Outback cebola',
    url: imgCebola,
  },
  {
    title: 'Outback ribs',
    url: imgComida,
  },
  {
    title: 'Corolla',
    url: imgCorolla,
  },
  {
    title: 'Filipe Loiro',
    url: imgLoiro,
  },
]

export function CardList() {
  const [displaySwipeGiff, setDisplaySwipeGiff] = useState<boolean>(true)

  const { dispatch } = useStateContext()

  const handleSwipe = useCallback(() => {
    dispatch && dispatch({ type: ActionType.SET_PLAY_AUDIO, payload: true })
  }, [dispatch])

  setTimeout(() => {
    setDisplaySwipeGiff(false)
  }, 3000)

  return (
    <div className={clsx(styles.cardList)}>
      {db.map((character, key) => (
        <Card
          title={character.title}
          img={character.url}
          key={key}
          onSwipe={handleSwipe}
        />
      ))}

      {displaySwipeGiff && (
        <div className={clsx(styles.swipe)}>
          <img src={swipeAnimation} alt="Animação de arrastar para o lado" />
        </div>
      )}
    </div>
  )
}
