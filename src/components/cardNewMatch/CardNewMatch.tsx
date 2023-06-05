import clsx from 'clsx'
import styles from './CardNewMatch.module.css'

type CardNewMatchProps = {
  name: string
  image: string
}

export function CardNewMatch(props: CardNewMatchProps) {
  const { image, name } = props

  return (
    <div className={clsx(styles.cardNewMatch)}>
      <div className={clsx(styles.cardNewMatch_img)}>
        <img src={image} alt="Card Match" />
      </div>

      <span>{name}</span>
    </div>
  )
}
