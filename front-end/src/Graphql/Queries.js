import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query {
        getAlluser{
            id
            name
            email
            password
        }
    }
`