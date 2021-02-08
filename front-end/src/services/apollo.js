import { 
    ApolloClient, 
    InMemoryCache, 
    HttpLink, 
    from,
     
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError}) => {
    if(graphQLErrors) return console.log('graphQLErrors', graphQLErrors)       
    if(networkError) return console.log('networkError', networkError)
})

const link = from([
    errorLink,
    new HttpLink({uri: 'http://localhost:3333/graphql'})
])

const client = new ApolloClient({
    cache: new InMemoryCache,
    link: link,
})


export default client