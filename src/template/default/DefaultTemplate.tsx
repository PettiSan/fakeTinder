import { Footer } from '@template/footer/Footer'
import { Header } from '@template/header/Header'
import Seo from '@template/seo/Seo'
import React, { ReactNode } from 'react'
import styles from './DefaultTemplate.module.css'

type DefaultTemplateProps = {
  pageSeo: string
  children?: ReactNode | undefined
}

export default function DefaultTemplate(props: DefaultTemplateProps) {
  const { pageSeo, children } = props

  return (
    <div className={styles.defaultTemplate}>
      <Header />

      <main className={styles.main}>
        <Seo title={pageSeo} />

        <div className={styles.content}>{children}</div>
      </main>

      <Footer />
    </div>
  )
}
