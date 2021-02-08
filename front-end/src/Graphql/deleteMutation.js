import { gql } from "@apollo/client";

export const DELETE_USER_MUTATION = gql`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id)
    }

`