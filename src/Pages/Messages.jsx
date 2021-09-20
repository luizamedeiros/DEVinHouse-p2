import React from "react";
import MsgForm from '../Components/MsgForm';
import TitleDiv from '../Components/MsgForm/TitleDiv';
import InputContainer from '../Components/MsgForm/InputContainer';
import styled from 'styled-components';

const MsgDiv = styled.div`
    width: 70%;
    padding: 2%;
    min-height: 50vh;
    border: #181f75 2px solid;
    flex-wrap: wrap;
    border-radius: 4px;
    margin: auto;
`

const Messages=()=>{
    return(
        <MsgDiv>
            <TitleDiv/>
            <InputContainer/>
            <MsgForm/>
        </MsgDiv>
    )
}
export default Messages;