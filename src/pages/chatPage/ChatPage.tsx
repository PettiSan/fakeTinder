import avatarFile from '@assets/10_10_corolla.png'
import Avatar from '@components/avatar/Avatar'
import ChatTemplate from '@template/chat/ChatTemplate'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './ChatPage.module.css'

enum FROM_WHO {
  ME = 'ME',
  OTHER = 'OTHER',
}

type Messages = {
  date: string
  messages: Message[]
}[]

type Message = {
  text: string
  from: FROM_WHO
  displayAvatar?: boolean
}

const db: Messages = [
  {
    date: 'sábado 01:18',
    messages: [
      {
        text:
          'Boa noite, procurei Massa de Brocólis no google e só apareceu pizzas, é isso mesmo, kkkkk?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
    ],
  },
]

/* const db = [
  {
    date: 'domingo 01:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'terça 14:18',
    messages: [
      {
        text: 'Boa noite, sabe cantar alguma música da da Dua Lipa?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Boa noite nem sei quem é kkkk',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas se for rock, podemos conversar a respeito',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: ':(',
        from: FROM_WHO.ME,
      },
    ],
  },
] */

export default function ChatPage() {
  return (
    <ChatTemplate pageSeo="Chat">
      <div className={clsx(styles.chatPage)}>
        {db.map((item, i) => (
          <div className={clsx(styles.chatPage_wrapper)} key={i}>
            <span className={clsx(styles.chatPage_date)}>{item.date}</span>

            {item.messages.map((message, key) => (
              <div
                key={key}
                className={clsx(
                  styles.chatPage_message,
                  message.from === FROM_WHO.ME ? styles.me : '',
                  message.from === FROM_WHO.OTHER ? styles.other : ''
                )}
              >
                {message.displayAvatar && (
                  <div className={clsx(styles.chatPage_message_avatar)}>
                    <Avatar image={avatarFile} />
                  </div>
                )}
                <span>{message.text}</span>
              </div>
            ))}

            <div className={clsx(styles.chatPage_whatIf)}>
              <Link to={PATHS.chatWhatIf}>Como poderia ter sido?</Link>
            </div>
          </div>
        ))}
      </div>
    </ChatTemplate>
  )
}
