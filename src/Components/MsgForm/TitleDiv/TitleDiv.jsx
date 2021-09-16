import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { IconButton } from '@material-ui/core';
import InputMsg from '../../MsgForm/InputContainer';

const MainHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 0 10px;
`
const MsgTitle = styled.h1`
    margin-right: 50%;
`

function TitleDiv(){
    return(
        <MainHeader>
            <MsgTitle>Mensagens</MsgTitle>
            <IconButton> <SearchIcon/> </IconButton>
            <a href="/novamensagem"> <AddCommentIcon /> </a>
        </MainHeader>
        
    );
}
export default TitleDiv;