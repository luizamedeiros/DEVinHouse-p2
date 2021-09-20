import React, {useState, useEffect} from 'react';
import api from '../services/api';

const Home = ()=>{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const accessAPI = async ()=>{
        const allMessages = await api.get("http://localhost:3333/messages");
        const newMessage = allMessages.data.map((msg)=>{
            return{
                id: msg.id
            };
        });
        setMessages(newMessage);
        };
        accessAPI();
    }, []);

    return(
            <>
            <h1 style={{textAlign: 'center'}}>Bem vindo! Você tem {messages.length} novas mensagens!</h1>
            </>
    );
}
export default Home