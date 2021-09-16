import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import api from '../../../services/api';


const InputDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const InputContainer=()=>{
    const [triggers, setTriggers] = useState([]);
    const [channels, setChannels]  = useState([]);
    const [timer, setTimer] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api
          .get("http://localhost:3333/messages")
          .then((res) => setMessages(res.data));
      }, []);
    
      useEffect(() => {
        api
          .get("http://localhost:3333/triggers")
          .then((res) => setTriggers(res.data));
      }, []);
    
      useEffect(() => {
        api
          .get("http://localhost:3333/channels")
          .then((res) => setChannels(res.data));
      }, []);

    return(
        <InputDiv>
            <select required>
                {triggers.map((op) => (
                  <option key={op.id} value={op.id}>
                    {op.name}
                  </option>))}
            </select>
            <select required>
                {channels.map((op) => (
                  <option key={op.id} value={op.id}>
                    {op.name}
                  </option>))}               
            </select>
            <input 
            value={timer}
            name="timer" 
            type="number" 
            placeholder="Timer"
            onChange={(e)=>{
                setTimer(e.target.value)
            }}
            />
        </InputDiv>
    );
}
export default InputContainer;