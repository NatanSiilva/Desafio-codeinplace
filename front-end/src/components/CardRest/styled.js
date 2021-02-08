import styled from 'styled-components';

const CardRest =  styled.div`
    width: 370px;
    height: auto;
    background-image: url('https://github.com/codeinplace/interview/blob/main/assets/rest.jpg?raw=true');
    background-repeat: no-repeat;
    background-size: contain;

    @media screen and (max-width: 783px) {
        display: flex;
        flex-direction: column;
        background-size: 100%;
        width: 100%;
        height: auto;
        margin-bottom: 70px;
        
    }
   
`

CardRest.Container = styled.div`
    width: 80%;
    height: 100%;
    padding: 27px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 783px) {

        width: 90%;
        padding: 20px;
        
    }
` 


CardRest.Input = styled.input`
    height: 61px;
    border-radius: 7px;
    border: none;
    padding-left: 10px;
    margin-bottom: 20px;
    background-color: white; 
    opacity: 0.7;
    font-size: 20px;
    font-weight: bold;
    outline: none;

    ::placeholder {
        font-size: 25px;
        color: black;
        opacity: 1;
        padding-left: 20px;
    }
`


CardRest.Button = styled.button`
    color: red;
    margin-top: 150px;
    height: 61px;
    border: none;
    border-radius: 7px;
    

`

CardRest.a = styled.a`
    color: black;
    &:hover {
        color: blue;
    }
`




export default CardRest
