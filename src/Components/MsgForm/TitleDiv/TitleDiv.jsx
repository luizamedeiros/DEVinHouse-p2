import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { IconButton } from '@material-ui/core';
import {Link } from "react-router-dom";

const MainHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 2%;
`
const MsgTitle = styled.h1`
    margin-right: 50%;
    margin-top: 0%;
    color: #181f75;
    `

function TitleDiv(){
    return(
        <MainHeader>
            <MsgTitle>Mensagens</MsgTitle>
            <Link to="#">
                <IconButton> <SearchIcon style={{color: '#181f75'}}/> </IconButton>
            </Link>
            <Link to="/novamensagem">
                <IconButton> <AddCommentIcon style={{color: '#181f75'}}/> </IconButton>
            </Link>
        </MainHeader>
        
    );
}
export default TitleDiv;