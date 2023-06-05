import img4 from '@assets/avatar_miguel.jpg'
import img1 from '@assets/match_1.png'
import img2 from '@assets/match_2.png'
import img3 from '@assets/match_3.png'
import { CardNewMatch } from '@components/cardNewMatch/CardNewMatch'
import clsx from 'clsx'
import styles from './CardNewMatchList.module.css'

const db = [
  {
    name: 'Descole cur...',
    image: img1,
  },
  {
    name: 'Vacina',
    image: img2,
  },
  {
    name: 'Mía',
    image: img3,
  },
  {
    name: 'Miguel',
    image: img4,
  },
]

export function CardNewMatchList() {
  return (
    <div className={clsx(styles.cardNewMatchList)}>
      {db.map((character, key) => (
        <CardNewMatch name={character.name} image={character.image} key={key} />
      ))}
    </div>
  )
}
