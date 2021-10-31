import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
// if apollo-upload-client crashes check tudo-de-bolo-react for forked version
import { createUploadLink } from 'apollo-upload-client'

const URI =
  (import.meta.env.VITE_GRAPHQL_ENDPOINT as string) ||
  'http://localhost:8001/graphql'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'TODO: implement this'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const graphqlClient = new ApolloClient({
  link: authLink.concat(createUploadLink({ uri: URI })),
  cache: new InMemoryCache({
    typePolicies: {
      Mutation: {},
      Query: {},
    },
  }),
})
