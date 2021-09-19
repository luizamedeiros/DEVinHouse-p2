import React, {useState} from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import api from '../../services/api'

const ChannelForm = styled.form`
width: 50%;
margin: auto;
text-align: center;

@media screen and (max-width: 768px){
    width: 100%;
}
`

const NewTrigger = ()=>{
    const [newChannel, setNewChannel] = useState('')

    function handleSubmit(e){
        try{
            e.preventDefault();
            api.post('/channels', {
                id: Date.now(),
                name: newChannel
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
        <ChannelForm  
            onSubmit={handleSubmit}>
            <h1>Insira um novo canal</h1>
            <input 
            style={{width: '65%', margin: '2%'}}
            onChange={(e)=>{
                setNewChannel(e.target.value);
            }}type="text" 
            placeholder='Digite o novo canal aqui'/>
            <button type="submit">Inserir</button>
        </ChannelForm>
    )
}
export default NewTrigger;