import EnterIcon from '@icons/EnterIcon'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './CardMessage.module.css'

export type CardMessageProps = {
  name: string
  image: string
  lastMessage: string
  canChat: boolean
}

export function CardMessage(props: CardMessageProps) {
  const { image, lastMessage, name, canChat } = props

  return (
    <div className={clsx(styles.cardMessage)}>
      <Link to={PATHS.chat}>
        <div className={clsx(styles.cardMessage_avatar)}>
          <img src={image} alt="Avatar" />
        </div>

        <div className={clsx(styles.cardMessage_wrapper)}>
          <span className={clsx(styles.cardMessage_name)}>{name}</span>

          <div className={clsx(styles.cardMessage_message)}>
            <EnterIcon />
            <span>{lastMessage}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
