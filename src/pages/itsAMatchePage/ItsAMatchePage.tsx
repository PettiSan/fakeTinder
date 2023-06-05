import avatar1 from '@assets/avatar_camila.jpg'
import avatar2 from '@assets/card_10_10_loiro.jpg'
import Avatar from '@components/avatar/Avatar'
import DefaultTemplate from '@template/default/DefaultTemplate'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './ItsAMatche.module.css'

export default function ItsAMatchePage() {
  return (
    <DefaultTemplate pageSeo="Its a Matche">
      <div className={clsx(styles.itsAMatche_page)}>
        <span className={clsx(styles.itsAMatche_page_title)}>ITS A MATCH!</span>

        <p className={clsx(styles.itsAMatche_page_subtitle)}>
          Filipe e você tem váras coisas em comum... mande uma mensagem
        </p>

        <div className={clsx(styles.itsAMatche_page_avatars)}>
          <Avatar image={avatar1} />
          <Avatar image={avatar2} />
        </div>

        <div className={clsx(styles.itsAMatche_page_buttons)}>
          <div className={clsx(styles.itsAMatche_page_button, 'grow')}>
            <Link to={PATHS.matches}>ENVIE UMA MENSAGEM</Link>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}
