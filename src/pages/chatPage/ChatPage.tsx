import avatarFile from '@assets/card_10_10_loiro.jpg'
import Avatar from '@components/avatar/Avatar'
import { CalendarButton } from '@components/calendarButton/CalendarButton'
import ChatTemplate from '@template/chat/ChatTemplate'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useStateContext } from 'state/context'
import { ActionType } from 'state/reducer'
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
    date: 'sábado 20:18',
    messages: [
      {
        text: 'Qual desses é melhor?',
        from: FROM_WHO.ME,
      },
      {
        text: 'esse por 100 a mais está valendo',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'por tudo o que eu pesquisei a respeito está valendo hein, pelo preço está bom👍🏻',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'beleza, muito obrigado seu fake loiro lindo 😍',
        from: FROM_WHO.ME,
      },
      {
        text: 'que isso gata, calma 😏',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'ur welcome',
        from: FROM_WHO.OTHER,
      },
    ],
  },
  {
    date: 'domingo 14:25',
    messages: [
      {
        text: 'Ouu, iae minha querida, quinta agora é feriado... lembra o que rolou na última vez que tivemos feriado na quinta né?',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'Claro, umas das melhores noite do ano',
        from: FROM_WHO.ME,
      },
      {
        text: 'como poderia esquecer...?',
        from: FROM_WHO.ME,
      },
      {
        text: 'To ligado... então bora repetir 😈',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Quarta ás 20hrs, passo ai de carro, ai vamos para o Outback',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Bah só quarta? Queria que fosse antes 😒',
        from: FROM_WHO.ME,
      },
      {
        text: 'pq não posso quarta, estou muito ocupada infelizmente...',
        from: FROM_WHO.ME,
      },
      {
        text: 'Bah é que tem NBA nos outros dias, sabe... prioridades 🏀🏀🏀',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'é sério??? 😡😡',
        from: FROM_WHO.ME,
      },
      {
        text: 'Filipe?',
        from: FROM_WHO.ME,
      },
      {
        text: '???????',
        from: FROM_WHO.ME,
      },
      {
        text: '???',
        from: FROM_WHO.ME,
      },
    ],
  },
  {
    date: 'segunda 09:49',
    messages: [
      {
        text: 'oii, bom dia feia, foi mal, por demorar para responder 😁',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: 'vai ter que segurar a saudade...',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'Sábado então, passo ai de carro ás 20hrs, vamos para o Outback do Praia de Belas ai perto, bater um papo',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'dependendo de como as coisas forem, te levo para conhecer o VisAVis, mas sem promessas, ok?',
        from: FROM_WHO.OTHER,
      },
      {
        text: 'bom dia, combinado 🤩',
        from: FROM_WHO.ME,
      },
      {
        text: 'o que é VisAVis?',
        from: FROM_WHO.ME,
      },
      {
        text: 'hahaha, segredo, sexta eu te conto😉',
        from: FROM_WHO.OTHER,
        displayAvatar: true,
      },
      {
        text: '😒',
        from: FROM_WHO.ME,
      },
    ],
  },
]

export default function ChatPage() {
  const { dispatch } = useStateContext()

  useEffect(() => {
    dispatch && dispatch({ type: ActionType.SET_ALLOW_AUDIO, payload: true })
  }, [dispatch])

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
          </div>
        ))}

        <div
          className={clsx(
            styles.chatPage_wrapper,
            styles.chatPage_confirmation
          )}
        >
          <ul>
            <li>
              <span>
                Data: <b>09/06/2023</b>
              </span>
            </li>

            <li>
              <span>
                Horário: <b>20:00</b>
              </span>
            </li>

            <li>
              <span>
                Local: <b>Outback - Praia de Belas</b>
              </span>
            </li>

            <li>
              <span>
                Participantes: <b>Filipe</b> & <b>Camila</b>
              </span>
            </li>

            <li>
              <span>
                Valor: <b>TBD</b>
              </span>
            </li>
          </ul>

          <CalendarButton>ADICIONE NA AGENDA</CalendarButton>
        </div>
      </div>
    </ChatTemplate>
  )
}
