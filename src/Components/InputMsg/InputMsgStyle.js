import styled from 'styled-components';

export const InputMsgForm = styled.form`
    background: white;
    border: #181f75 4px solid;
    border-radius: 8px;
    margin: auto;
    padding: 1%;
    width: 70%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        flex-direction: column;
        font-size: 3vw;
    }
`

export const DescriptionArea = styled.textarea`
    width: 90%;
    height: 30vh;
    margin: 2% auto auto auto;
    border: #181f75 2px solid;
    border-radius: 4px;
    @media screen and (max-width: 768px){
        margin: auto;

    }
`
export const SubmitButton = styled.button`
    align-self: flex-end;
    background: #181f75;
    border: #181f75 2px solid;
    border-radius: 4px;
    color: white;
    margin: 1%;
    padding: 2%;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        flex-direction: row;
        font-size: 3vw;
        width: 95%;
        margin: 1% 5%;
    }
`
export const CancelButton = styled.button`
    align-self: flex-end;
    background: white;
    border: #181f75 2px solid;
    border-radius: 4px;
    color: #181f75;
    font-weight: bold;
    margin: auto;
    padding: 2%;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        flex-direction: row;
        font-size: 3vw;
        width: 95%;
        margin: 2% 5%;
    }
`
export const ButtonContainer = styled.div`
    margin-right: 5%;
    text-align: right;
`
export const Title = styled.h1`
    margin-left: 5%;
    color: #181f75;
    @media screen and (max-width: 768px){
        text-align: center;
        margin: 2% auto;
    }
`
export const SelectDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    margin: 0 0 0 5%;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`