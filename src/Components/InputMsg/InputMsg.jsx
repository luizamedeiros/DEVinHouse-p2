import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {useHistory} from "react-router";

const InputMsgForm = styled.form`
    background: white;
    border: #181f75 4px solid;
    border-radius: 8px;
    margin: auto;
    padding: 1%;
    width: 70%;
    display: flex;
    flex-direction: column;
`

const DescriptionArea = styled.textarea`
    width: 90%;
    height: 30vh;
    margin: 2% auto auto auto;
    border: #181f75 2px solid;
    border-radius: 4px;
`
const SubmitButton = styled.button`
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
`
const CancelButton = styled.button`
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
`
const ButtonContainer = styled.div`
    margin-right: 5%;
    text-align: right;
`
const Title = styled.h1`
    margin-left: 5%;
    color: #181f75;
`
const InputDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

function InputMsg(){
    // para CONSUMIR
    const [triggerList, setTriggerList] = useState([]);
    const [channelsList, setChannelsList]  = useState([]);
    
    //para ENVIAR
    const [trigger, setTrigger] = useState("");
    const [channel, setChannel] = useState("");
    const [timer, setTimer] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        api
          .get("http://localhost:3333/messages")
          .then((res) => setMessage(res.data));
    }, []);
    
    useEffect(() => {
        api
        .get("http://localhost:3333/triggers")
        .then((res) => setTriggerList(res.data));
    }, []);

    useEffect(() => {
        api.get("http://localhost:3333/channels")
        .then((res) => setChannelsList(res.data));
    }, []);

    function handleSubmit(e){
        try{
            e.preventDefault();
            api.post('/messages', {
                trigger: trigger,
                channel: channel, 
                timer: timer, 
                message: message
            })
            Swal.fire({
                icon: 'success',
                text: "Seu registro foi cadastrado com sucesso!"});
        }
        catch{
            Swal.fire({
                icon: 'error',
                text: "Houve um problema com o seu cadastro. Tente novamente mais tarde."})
        }
    }
    
    return(
            <InputMsgForm onSubmit={handleSubmit}>
                <Title>Nova mensagem</Title>
                <InputDiv>
                    <select onChange={(e)=>{
                        setTrigger(e.target.value);
                    }} required>
                        <option value=""></option>
                        {triggerList.map((op) => (
                        <option key={op.id} value={op.name}>
                            {op.name}
                        </option>))}
                    </select>
                    <select onChange={(e)=>{
                        setChannel(e.target.value);
                    }}>
                    <option value=""></option>
                        {channelsList.map((op) => (
                        <option key={op.id} value={op.name}>
                            {op.name}
                        </option>))}               
                    </select>
                    <input 
                    value={timer}
                    name="timer" 
                    type="time" 
                    min='00:00'
                    max='360000:00'
                    placeholder="Timer"
                    onChange={(e)=>{
                        setTimer(e.target.value)
                    }}
                    />
                </InputDiv>
                <DescriptionArea
                name="message"
                placeholder="Digite sua mensagem"
                onChange={(e)=>{
                    setMessage(e.target.value);
                }}/>
                <ButtonContainer>
                    <Link to='/'>
                        <CancelButton>Cancelar</CancelButton>
                    </Link>
                    <SubmitButton type="submit">Salvar</SubmitButton>
                </ButtonContainer>
            </InputMsgForm>
    );
}
export default InputMsg;