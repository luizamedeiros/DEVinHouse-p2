import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {InputMsgForm, DescriptionArea, SubmitButton, CancelButton, ButtonContainer, Title, SelectDiv} from './InputMsgStyle';
import ReactInputMask from "react-input-mask";

function InputMsg(){
    // para CONSUMIR
    const [triggerList, setTriggerList] = useState([]);
    const [channelsList, setChannelsList]  = useState([]);
    
    //para ENVIAR
    const [trigger, setTrigger] = useState("");
    const [channel, setChannel] = useState("");
    const [timer, setTimer] = useState([]);
    const [message, setMessage] = useState();
    
    const yup = require("yup");
    const validObject = yup.object().shape({
        channel : yup.string().required('Você deve selecionar um canal'),
        trigger : yup.string().required('Você deve selecionar um gatilho'),
        timer: yup.string().required('Você deve inserir o tempo'),
        message: yup.string().required('Você deve inserir uma descrição para o registro').min(5, 'A mensagem deve ter, no mínimo, 5 caracteres'),
    });
    
    useEffect(() => {
        api
        .get("http://localhost:3333/triggers")
        .then((res) => setTriggerList(res.data));
    }, []);

    useEffect(() => {
        api.get("http://localhost:3333/channels")
        .then((res) => setChannelsList(res.data));
    }, []);

    const handleSubmit = async (e)=>{
        try{
            e.preventDefault();
            await validObject.validate({channel: channel, trigger: trigger, timer: timer, message: message});
            api.post('/messages', {
                trigger: trigger,
                channel: channel, 
                timer: timer, 
                message: message})
            Swal.fire({
                icon: 'success',
                text: "Seu registro foi cadastrado com sucesso!"})
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Não foi possível realizar o registro no momento',
                text: error})
        }
    }
    
    return(
            <InputMsgForm onSubmit={handleSubmit}>
                <Title>Nova mensagem</Title>
                <SelectDiv>
                    <label for='gatilho'>Gatilho</label>
                    <select onChange={(e)=>{
                        setTrigger(e.target.value);
                    }} >
                        <option value=""></option>
                        {triggerList.map((op) => (
                        <option key={op.id} value={op.name}>
                            {op.name}
                        </option>))}
                    </select>
                    <label for='canal'>Canal</label>
                    <select onChange={(e)=>{
                        setChannel(e.target.value);
                    }} >
                    <option value=""></option>
                        {channelsList.map((op) => (
                        <option key={op.id} value={op.name}>
                            {op.name}
                        </option>))}               
                    </select>
                    <label for='timer'>Timer</label>
                    <ReactInputMask 
                    value={timer}
                    name="timer"
                    mask="99:99"
                    placeholder="Timer"
                    onChange={(e)=>{
                        setTimer(e.target.value)
                    }}
                    />
                </SelectDiv>
                <DescriptionArea
                name="message"
                placeholder="Digite sua mensagem..."
                onChange={(e)=>{
                    setMessage(e.target.value);
                }}
                />
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