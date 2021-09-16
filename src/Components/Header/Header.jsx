import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const List = styled.li`
    padding-left: 2.3vw;
    color: white;
    &:nth-child(2){
        margin-left: 70%;
    }
    &:nth-child(1){
        margin-left: 1%;
`
export const ListItem = styled.a`
    font-size: 1.02vw;
    margin: 0;
    color: white;
    text-decoration: none;   
`

const Header = () =>{
    return(
        <nav>
            <ul>
                <List>ZAPSYSTEM</List>
                <List><ListItem href="/dashboard">Dashboard</ListItem></List>
                <List><ListItem href="/">Mensagens</ListItem></List>
            </ul>
        </nav>

    );
}
export default Header;