import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { IconButton } from '@material-ui/core';
import {Link } from "react-router-dom";

const MainHeader = styled.div`
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
`
const MsgTitle = styled.h1`
    margin-top: 0%;
    margin-right: 27vw;
    color: #181f75;
    @media screen and (max-width: 768px){
        margin-right: 5vw;
    }
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