import styled from 'styled-components'


const ShowUsersContainer = styled.div`
    * {
        list-style: none;
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    margin: 0;
    color: black;
    width: 100%;

`

ShowUsersContainer.Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px;

`


ShowUsersContainer.Button = styled.button`
    margin: 0 0 0 50px;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
    color: white;
    &:hover {
        background-color: green;
    }

`

ShowUsersContainer.Card = styled.ul`
    background-color: black;
    height: 200px;
    padding: 20px;
    border-radius: 8px;
    color: red;

    &:hover {
        background-color: green;
        color: white;
    }
   
`



export default ShowUsersContainer