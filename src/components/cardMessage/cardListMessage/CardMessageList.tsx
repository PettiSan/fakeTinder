import img3 from '@assets/avatar_dua_lipa.png'
import img1 from '@assets/avatar_filipe.png'
import img4 from '@assets/avatar_harvey.png'
import img5 from '@assets/avatar_lebron.png'
import img2 from '@assets/avatar_naruto.png'
import img6 from '@assets/avatar_pam.png'
import img7 from '@assets/avatar_silvio_santos.png'
import clsx from 'clsx'
import React from 'react'
import { CardMessage } from '../CardMessage'
import styles from './CardMessageList.module.css'

const db = [
  {
    name: 'Filipe Petitemberte',
    image: img1,
    lastMessage:
      'Boa noite, procurei Massa de Brocólis no google e só apareceu pizzas, é isso mesmo, kkkkk?',
    canChat: true,
  },
  {
    name: 'Naruto',
    image: img2,
    lastMessage: 'Meu filho é um idiota, o que eu faço?',
    canChat: false,
  },
  {
    name: 'Dua Lipa',
    image: img3,
    lastMessage: 'If you dont wanna see me dancing with somebody',
    canChat: false,
  },
  {
    name: 'Harvey Specter',
    image: img4,
    lastMessage: 'i can get u into law school',
    canChat: false,
  },
  {
    name: 'Lebron James',
    image: img5,
    lastMessage: 'wanna join the Lakers?',
    canChat: false,
  },
  {
    name: 'Pam Beesly',
    image: img6,
    lastMessage: 'Jim cheated on me',
    canChat: false,
  },
  {
    name: 'Silvio Santos',
    image: img7,
    lastMessage: 'Conhece os produtos Jequiti?',
    canChat: false,
  },
]

export function CardMessageList() {
  return (
    <div className={clsx(styles.cardMessageList)}>
      {db.map((character, key) => (
        <CardMessage
          name={character.name}
          image={character.image}
          lastMessage={character.lastMessage}
          canChat={character.canChat}
          key={key}
        />
      ))}
    </div>
  )
}
