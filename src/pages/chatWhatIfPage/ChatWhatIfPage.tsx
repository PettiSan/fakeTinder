import avatarFile from '@assets/avatar_filipe.png'
import Avatar from '@components/avatar/Avatar'
import ChatTemplate from '@template/chat/ChatTemplate'
import clsx from 'clsx'
import React from 'react'
import styles from './ChatWhatIfPage.module.css'

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
        text: 'Boa noite, procurei Massa de Brocólis no google e só apareceu pizzas, é isso mesmo, kkkkk?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Boa noite, não é massa mesmo kkk',
        from: FROM_WHO.ME,
      },
      {
        text: 'HAHAHA, aceito a receita',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Trabalha com o que?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Sou programadora',
        from: FROM_WHO.ME,
      },
      {
        text: 'No way!!!',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Front ou back?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Frontend, React mais especificamente',
        from: FROM_WHO.ME,
      },
      {
        text: 'Que da hora, eu ganho uma grana criando os sites por ai, uma gelera até me chama de programador',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
    ],
  },
  {
    date: 'segunda 14:25',
    messages: [
      {
        text: 'Faz o que além de programar?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Joga? Estuda?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Tenho estudado para o ENEM desse ano',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Jogo sim, atualmente tenho jogado só CSGO de vez em quando com os amigos',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Mas jogo qualquer jogo basicamente, já fui viciado em LoL na adolescência, joguei MMORPG, jogo uns Boards Games tbm',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Legal...',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'quarta 16:49',
    messages: [
      {
        text: 'Uma dúvida, se Massa de Brócolis é comida, Hamburguer é o que?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Como assim kkkkkkk?',
        from: FROM_WHO.ME,
      },
      {
        text: 'Tipo, já comeu comida boa de verdade? Tipo um Hamburguer topzera? Outback?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Claro que já comi hamburguer',
        from: FROM_WHO.ME,
      },
      {
        text: 'McDonalds conta?',
        from: FROM_WHO.ME,
      },
      {
        text: 'kkkkkkkkkkkkkkkk, eu diria que não',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Outback eu só conheço por nome, mas nunca fui não',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'quinta 10:22',
    messages: [
      {
        text: 'Se quiser está convidada, podemos ir qualquer dia lá, uns dos restaurantes',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Bora?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Partiu',
        from: FROM_WHO.ME,
      },
    ],
  },
]

export default function ChatWhatIfPage() {
  return (
    <ChatTemplate pageSeo="Chat">
      <div className={clsx(styles.chatWhatIfPage)}>
        {db.map((item, i) => (
          <div className={clsx(styles.chatWhatIfPage_wrapper)} key={i}>
            <span className={clsx(styles.chatWhatIfPage_date)}>
              {item.date}
            </span>

            {item &&
              item.messages.map((message, key) => (
                <div
                  key={key}
                  className={clsx(
                    styles.chatWhatIfPage_message,
                    message.from === FROM_WHO.ME ? styles.me : '',
                    message.from === FROM_WHO.OTHER ? styles.other : ''
                  )}
                >
                  {message.displayAvatar && (
                    <div className={clsx(styles.chatWhatIfPage_message_avatar)}>
                      <Avatar image={avatarFile} />
                    </div>
                  )}
                  <span>{message.text}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </ChatTemplate>
  )
}
