import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import { GET_USERS } from '../../Graphql/Queries'
import { DELETE_USER_MUTATION } from '../../Graphql/deleteMutation'
import ShowUsersContainer from './styled'
import { Link } from 'react-router-dom';


function ShowUsers() {

    const { error, loading, data } =  useQuery(GET_USERS)
    const [deleteUser] = useMutation(DELETE_USER_MUTATION)

    const [ idUser, setIdUser ] = useState("")
    const [ users, setUsers ] = useState([])


    const deleted = () => {
        deleteUser({
            variable: {
                id: idUser
            }
        })
    }

    useEffect(() => {
        if (data) {
            console.log(data.getAlluser)
            setUsers(data.getAlluser)
        }

        if(loading) return <p>Loading...</p>
        if(error) return <p>Error...</p>

    }, [data, error, loading])

    

    return (

        <ShowUsersContainer>

                <ShowUsersContainer.Button>
                    <Link to={"/"} style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        Cadastrar novo usuário
                    </Link>
                </ShowUsersContainer.Button>
            <ShowUsersContainer.Content>
                {" "}
                {users.map((item, key) => {
                return (
                    <ShowUsersContainer.Card key={key}>
                        <li style={{
                            paddingBottom: '15px',
                            fontWeight: 'bold'
                        }}>Id: {item.id}</li>
                        <h4 style={{
                            paddingBottom: '5px',
                        }}>Nome: {item.name}</h4>
                        <li>Email: {item.email}</li>
                        <li>Password: {item.password}</li>
                        <button style={{
                            padding: '10px',
                            marginTop: '25px',
                            width: '100px',
                            borderRadius: '8px',
                            color: 'red',
                            fontWeight: 'bold'
                        }} 
                            onClick={deleted}
                            onChange={event => {
                            setIdUser(event.target.value)
                        }}
                        >
                            Deletar
                        </button>

                    </ShowUsersContainer.Card>
                )
                })}

                {users.length <= 0 && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '400px',
                        height: '400px'
                    }}>
                        <h1>POR FAVOR AGUARDE UM POUCO. PAGINA CARREGANDO....</h1>
                    </div>
                )}
            </ShowUsersContainer.Content>            
        </ShowUsersContainer>
      
    )  
    
}


export default ShowUsers;