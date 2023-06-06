import clsx from 'clsx'
import { CardMessage } from '../CardMessage'
import styles from './CardMessageList.module.css'

type CardMessageListProps = {
  matchs: {
    name: string
    image: string
    lastMessage: string
    canChat: boolean
  }[]
}

export function CardMessageList(props: CardMessageListProps) {
  const { matchs } = props

  return (
    <div className={clsx(styles.cardMessageList)}>
      {matchs.map((character, key) => (
        <CardMessage
          name={character.name}
          image={character.image}
          lastMessage={character.lastMessage}
          canChat={character.canChat}
          key={key}
          highlight={key === 0 ? true : false}
        />
      ))}
    </div>
  )
}
