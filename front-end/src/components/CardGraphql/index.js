import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutations'
import { useMutation } from '@apollo/client'
import CardGraphql from './styled'
import { Link } from 'react-router-dom';


function Graphql() {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")

    const [ createUser, { error } ] = useMutation(CREATE_USER_MUTATION)

    const newUser = () => {
        createUser({
            variables: {
                name: name,
                email: email,
            }
        })

        if(error) {
            console.error(error)
        }
    }

    return (
        <CardGraphql>
            <CardGraphql.Container>
                <CardGraphql.Input 
                    type="text"
                    placeholder="Nome"
                    onChange={event => {
                        setName(event.target.value)
                    }}
                />

                <CardGraphql.Input 
                    type="text"
                    placeholder="Email"
                    onChange={event => {
                        setEmail(event.target.value)
                    }}
                />

        
                <CardGraphql.Button onClick={newUser}>
                    <CardGraphql.a >
                        <button style={{
                            border: 'none',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            
                        }}>
                            <Link to={"/users"} style={{
                                color: 'black'
                            }}>
                                Graphql
                            </Link>
                        </button>
                    </CardGraphql.a>
                </CardGraphql.Button>
            </CardGraphql.Container>       
        </CardGraphql>
    )
}

export default Graphql