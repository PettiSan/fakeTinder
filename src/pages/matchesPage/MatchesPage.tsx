import { CardMessageList } from '@components/cardMessage/cardListMessage/CardMessageList'
import { CardNewMatchList } from '@components/cardNewMatch/cardNewMatchList/CardNewMatchList'
import { SearchIcon } from '@icons/SearchIcon'
import DefaultTemplate from '@template/default/DefaultTemplate'
import clsx from 'clsx'
import React from 'react'
import styles from './MatchesPage.module.css'

export default function MatchesPage() {
  return (
    <DefaultTemplate pageSeo="Matches">
      <div className={clsx(styles.matchesPage)}>
        {/* SearchBar Section */}
        <div className={clsx(styles.matchesPage_searchBar)}>
          <div className={clsx(styles.matchesPage_searchBar_icon)}>
            <SearchIcon />
          </div>

          <input type="text" placeholder="Buscar 9 Matches" />
        </div>

        {/* New Matches Section */}
        <div
          className={clsx(
            styles.matchesPage_sectionWrapper,
            styles.matchesPage_newMatches
          )}
        >
          <span className={clsx(styles.matchesPage_sectionTitle)}>
            Novos Matches
          </span>

          <CardNewMatchList />
        </div>

        {/* Messages Section */}
        <div
          className={clsx(
            styles.matchesPage_sectionWrapper,
            styles.matchesPage_newMatches
          )}
        >
          <span className={clsx(styles.matchesPage_sectionTitle)}>
            Mensagens
          </span>

          <CardMessageList />
        </div>
      </div>
    </DefaultTemplate>
  )
}
