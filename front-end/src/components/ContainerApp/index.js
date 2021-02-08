import styled from 'styled-components';


const ContainerApp = styled.div`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        font-family: 'Lato', sans-serif;
    }   


    width: 100%;
    max-width: 1100px;
    margin:  0 auto;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    @media screen and (max-width: 783px) {
        display: flex;
        flex-direction: column;
        
    }

`


export default ContainerApp