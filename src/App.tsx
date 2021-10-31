import { ApolloProvider } from '@apollo/client/react'
import React from 'react'
import { graphqlClient } from './graphql/client'
import { Router } from './router/Router'

export function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <Router />
    </ApolloProvider>
  )
}
