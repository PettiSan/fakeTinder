import { CardList } from '@components/card/cardList/CardList'
import DefaultTemplate from '@template/default/DefaultTemplate'
import React from 'react'

export default function HomePage() {
  return (
    <DefaultTemplate pageSeo="Home">
      <CardList />
    </DefaultTemplate>
  )
}
