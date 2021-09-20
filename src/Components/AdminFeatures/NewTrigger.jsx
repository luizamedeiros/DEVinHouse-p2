import React, {useState} from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import api from '../../services/api'

const TriggerForm = styled.form`
width: 50%;
margin: auto;
justify-content: center;
text-align: center;

@media screen and (max-width: 768px){
    width: 100%;
}
`

const NewTrigger = ()=>{
    const [newTrigger, setNewTrigger] = useState('')
    const yup = require('yup');
    const validObject = yup.object().shape({
        trigger: yup.string().required("O campo GATILHO não pode ser vazio!")
    })

    const handleSubmit = async (e)=>{
        try{
            e.preventDefault();
            await validObject.validate({trigger: newTrigger})
            api.post('/triggers', {
                id: Date.now(),
                name: newTrigger
            })
            Swal.fire({
                icon: 'success',
                text: "Seu registro foi cadastrado com sucesso!"});
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Não foi possível realizar o registro no momento',
                text: error})
        }
    }
    return(
        <TriggerForm  
            onSubmit={handleSubmit}>
            <h1>Insira um novo gatilho</h1>
            <input style={{width: '65%', margin: '2%'}}
            onChange={(e)=>{
                setNewTrigger(e.target.value);
            }}type="text" 
            placeholder='Digite o novo gatilho aqui'/>
            <button type="submit">Inserir</button>
        </TriggerForm>
    )
}
export default NewTrigger;