import teste from '@assets/teste.gif'
import { Card } from '@components/card/Card'
import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './CardList.module.css'

type Card = {
  title: string
  url: string
}[]

const db: Card = [
  {
    title: 'Filipe Petitemberte',
    url: './src/assets/10_10_cute.png',
  },
  {
    title: 'TLOU2',
    url: './src/assets/card_tlou2.png',
  },
  {
    title: 'Vingaceiros',
    url: './src/assets/card_vingaceiros.png',
  },
  {
    title: 'Naruto',
    url: './src/assets/card_naruto_smile.png',
  },
  {
    title: 'Board Games',
    url: './src/assets/card_board_games.png',
  },
  {
    title: 'CSGO Karambit',
    url: './src/assets/card_karambit_autotronic.png',
  },
  {
    title: 'Lamen',
    url: './src/assets/card_lamen.png',
  },
  {
    title: 'The Chefs',
    url: './src/assets/card_the_chefs.png',
  },
  {
    title: 'Canada',
    url: './src/assets/card_canada.png',
  },
  {
    title: 'Massa de Brócolis com Molho Branco',
    url: './src/assets/card_massa_brocolis.png',
  },
]

export function CardList() {
  const [displaySwipeGiff, setDisplaySwipeGiff] = useState<boolean>(true)

  setTimeout(() => {
    setDisplaySwipeGiff(false)
  }, 3000)

  return (
    <div className={clsx(styles.cardList)}>
      {db.map((character, key) => (
        <Card title={character.title} img={character.url} key={key} />
      ))}

      {displaySwipeGiff && (
        <div className={clsx(styles.swipe)}>
          <img src={teste} alt="" />
        </div>
      )}
    </div>
  )
}
