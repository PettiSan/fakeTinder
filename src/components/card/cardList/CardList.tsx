import img1 from '@assets/10_10_cute.png'
import img5 from '@assets/card_board_games.png'
import img9 from '@assets/card_canada.png'
import img6 from '@assets/card_karambit_autotronic.png'
import img7 from '@assets/card_lamen.png'
import img10 from '@assets/card_massa_brocolis.png'
import img4 from '@assets/card_naruto_smile.png'
import img8 from '@assets/card_the_chefs.png'
import img2 from '@assets/card_tlou2.png'
import img3 from '@assets/card_vingaceiros.png'
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
    url: img1,
  },
  {
    title: 'TLOU2',
    url: img2,
  },
  {
    title: 'Vingaceiros',
    url: img3,
  },
  {
    title: 'Naruto',
    url: img4,
  },
  {
    title: 'Board Games',
    url: img5,
  },
  {
    title: 'CSGO Karambit',
    url: img6,
  },
  {
    title: 'Lamen',
    url: img7,
  },
  {
    title: 'The Chefs',
    url: img8,
  },
  {
    title: 'Canada',
    url: img9,
  },
  {
    title: 'Massa de Brócolis com Molho Branco',
    url: img10,
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
