import React from 'react';
import styled from 'styled-components';
import NewTrigger from '../Components/AdminFeatures/NewTrigger';
import NewChannel from '../Components/AdminFeatures/NewChannel';

const InputContainer = styled.div`
width: 70%;
padding: 2%;
min-height: 50vh;
border: #181f75 2px solid;
border-radius: 4px;
margin: auto;
display: flex;

@media screen and (max-width: 768px){
    flex-direction: column;
    font-size: 3vw;
}
`

const Admin=()=>{
    
    return(
        <InputContainer>
            <NewChannel/>
            <NewTrigger/>
        </InputContainer>
    )
}
export default Admin;