import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InputContainer from './InputContainer';
import TitleDiv from './TitleDiv';
import api from '../../services/api';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

const MsgDiv = styled.div`
    width: 70%;
    padding: 2%;
    min-height: 50vh;
    background: #97C4EF;
    border-radius: 8px;
    margin: auto;
    `

const MsgForm = () =>{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const accessAPI = async ()=>{
        const allMessages = await api.get("http://localhost:3333/messages");

        const newMessage = allMessages.data.map((msg)=>{
            return{
                id: msg.id,
                channel: msg.channel,
                trigger: msg.trigger,
                timer: msg.timer,
                message: msg.message
            };
        });
        setMessages(newMessage);
        };
        accessAPI();
    }, []);

    return(
        <MsgDiv>
            <TitleDiv/>
            <InputContainer />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Gatilho</TableCell>
                            <TableCell align='center'>Canal</TableCell>
                            <TableCell align='center'>Timer</TableCell>
                            <TableCell align='center'>Mensagem</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>lsdn</TableCell>
                            <TableCell align='center'>dfxgd</TableCell>
                            <TableCell align='center'>gfd</TableCell>
                            <TableCell align='center'>fdsgdf</TableCell>
                        </TableRow>
                        {messages.map((msg)=>(
                            <TableRow>
                                <TableCell align='center'> {msg.trigger} </TableCell>
                                <TableCell align='center'>{msg.channel}</TableCell>
                                <TableCell align='center'>{msg.timer}</TableCell>
                                <TableCell align='center'>{msg.message}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MsgDiv>
    );
}
export default MsgForm;