import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton} from '@material-ui/core'
import api from '../../services/api';
import './msgFormStyles.css';

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
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color:'white', textAlign: 'center'}}>Gatilho</TableCell>
                            <TableCell style={{color:'white', textAlign: 'center'}}>Canal</TableCell>
                            <TableCell style={{color:'white', textAlign: 'center'}}>Timer</TableCell>
                            <TableCell style={{color:'white', textAlign: 'center'}}>Mensagem</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        </TableRow>
                        {messages.map((msg)=>(
                            <TableRow>
                                <TableCell align='center'> {msg.trigger} </TableCell>
                                <TableCell align='center'>{msg.channel}</TableCell>
                                <TableCell align='center'>{msg.timer}</TableCell>
                                <TableCell align='center'> 
                                    <IconButton onClick={()=>{Swal.fire(msg.message)}}> 
                                        <VisibilityIcon style={{color: '#181f75'}}/> 
                                    </IconButton>
                                </TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default MsgForm;