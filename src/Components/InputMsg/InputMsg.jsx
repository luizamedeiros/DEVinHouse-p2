import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {InputMsgForm, DescriptionArea, SubmitButton, CancelButton, ButtonContainer, Title, SelectDiv} from './InputMsgStyle';


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
                <SelectDiv>
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
                </SelectDiv>
                <DescriptionArea
                name="message"
                placeholder="Digite sua mensagem"
                onChange={(e)=>{
                    setMessage(e.target.value);
                }}/>
                <ButtonContainer>
                    <Link to='/mensagens'>
                        <CancelButton>Cancelar</CancelButton>
                    </Link>
                    <SubmitButton type="submit">Salvar</SubmitButton>
                </ButtonContainer>
            </InputMsgForm>
    );
}
export default InputMsg;