import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logoOutline from '../../assets/logoOutline.png';
import './headerStyles.css';

export const List = styled.li`
    padding-left: 2.3vw;
    &:nth-child(2){
        margin-left: 55%;
    }
    @media screen and (max-width: 768px){
        &:nth-child(2){
            margin-left: 20%;
        }
    }
`

const Header = () =>{
    return(
        <nav>
            <ul className="headerUL">
                <List><Link to="/" className=""><img src={logoOutline} alt="logo da Conta Zap"/></Link></List>
                <List>
                    <Link to="/dashboard" className="headerLink">Dashboard</Link>
                </List>
                <List> 
                    <Link to='/mensagens' className="headerLink"> Mensagens </Link> 
                </List>
                <List> 
                    <Link to='/admin' className="headerLink"> Administrador </Link> 
                </List>
            </ul>
        </nav>

    );
}
export default Header;