import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../../Graphql/Mutations'
import { useMutation } from '@apollo/client'
import CardRest from './styled'
import { Link } from 'react-router-dom';

function Rest() {

 
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const [ createUser, { error } ] = useMutation(CREATE_USER_MUTATION)

    const newUser = () => {
        createUser({
            variables: {
                name: name,
                email: email,
                password: password
            }
        })

        if(error) {
            console.error(error)
        }
    }

    return (
        <CardRest >
            <CardRest.Container >
                <CardRest.Input 
                    type="text"
                    placeholder="Nome"
                    onChange={event => {
                        setName(event.target.value)
                    }}
                />

                <CardRest.Input 
                    type="text"
                    placeholder="Email"
                    onChange={event => {
                        setEmail(event.target.value)
                    }}
                />

                <CardRest.Input 
                    type="text"
                    placeholder="Senha"
                    onChange={event => {
                        setPassword(event.target.value)
                    }}
                />

                <CardRest.Button onClick={newUser}>
                    <CardRest.a >
                        <button style={{
                            border: 'none',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            
                        }}>
                            <Link to={"/users"} style={{
                                color: 'black'
                            }}>
                                Rest
                            </Link>
                        </button>
                    </CardRest.a>
                </CardRest.Button>
            </CardRest.Container>       
        </CardRest>
    )
}

export default Rest