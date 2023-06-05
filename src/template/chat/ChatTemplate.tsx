import avatarFile from '@assets/card_10_10_loiro.jpg'
import Avatar from '@components/avatar/Avatar'
import ArrowLeftIcon from '@icons/ArrowLeftIcon'
import { CameraIcon } from '@icons/CameraIcon'
import { ShieldIcon } from '@icons/ShieldIcon'
import { VerifiedIcon } from '@icons/VerifiedIcon'
import Seo from '@template/seo/Seo'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from 'router/Paths'
import styles from './ChatTemplate.module.css'

type DefaultTemplateProps = {
  pageSeo: string
  children?: ReactNode | undefined
}

export default function ChatTemplate(props: DefaultTemplateProps) {
  const { pageSeo, children } = props

  return (
    <div className={clsx(styles.chatTemplate, 'template')}>
      <div className={clsx(styles.header)}>
        <div className={clsx(styles.header_arrowBack)}>
          <Link to={PATHS.matches}>
            <ArrowLeftIcon />
          </Link>
        </div>

        <div className={clsx(styles.header_wrapper)}>
          <Avatar image={avatarFile} />

          <span>Filipe Petitemberte</span>

          <VerifiedIcon />

          <CameraIcon />
        </div>

        <div className={clsx(styles.header_verified)}>
          <ShieldIcon />
        </div>
      </div>

      <main className={styles.main}>
        <Seo title={pageSeo} />

        <div className={styles.content}>{children}</div>
      </main>

      <div className={styles.footer}>
        <div className={styles.footer_gif}>GIF</div>

        <div className={styles.footer_wrapper}>
          <input type="text" placeholder="Digite uma mensagem..." />

          <button type="submit">ENVIAR</button>
        </div>
      </div>
    </div>
  )
}
