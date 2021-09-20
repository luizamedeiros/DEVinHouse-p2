import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import api from '../../../services/api';
import ReactInputMask from 'react-input-mask';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './InputContainerStyle.css'

const InputDiv = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2vh;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 768px){
      flex-direction: column;
    }
`

const InputContainer=()=>{
    const [triggers, setTriggers] = useState([]);
    const [channels, setChannels]  = useState([]);
    const [timer, setTimer] = useState([]);
    
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
            <label for='gatilho'>Gatilho</label>
            <select className="inputItems" name='gatilho' required>
              <option value=""></option>
                {triggers.map((op) => (
                  <option key={op.id} value={op.id}>
                    {op.name}
                  </option>))}
            </select>
            <label for='canal'>Canal</label>
            <select className="inputItems" required>
              <option value=""></option>
                {channels.map((op) => (
                  <option key={op.id} value={op.id}>
                    {op.name}
                  </option>))}               
            </select>
            <label for='timer'>Timer</label>
            <ReactInputMask 
              className="inputItems"
              value={timer}
              name="timer" 
              required
              mask="99:99"
              placeholder="Timer"
              onChange={(e)=>{
                  setTimer(e.target.value)
              }}
              />
            <Link to="#">
              <IconButton> <SearchIcon style={{color: '#181f75'}}/> </IconButton>
            </Link>
        </InputDiv>
    );
}
export default InputContainer;