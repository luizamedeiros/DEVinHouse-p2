import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import api from '../../services/api';

const BarGraph = ()=>{
    const [channels, setChannels] = useState([]);
    const channelList = [];
    makeData();
    //channelCounter();

    useEffect(() => {
        api
          .get("http://localhost:3333/channels")
          .then((res) => setChannels(res.data));
      }, []
    );

    function makeData(){
        channels.map((channel)=>(
            channelList.push(channel.name)
        ));
    }


    function generateRandom(){
        var randomNumbers = [];
        for (let i = 0; i<10; i++){
            let newNumber = Math.random()*700;
            randomNumbers.push(newNumber);
        }
        return randomNumbers;
    }

    const info = {
        labels: channelList,
        datasets: [{
            label: 'Quantidade de chamados por canal', 
            data: generateRandom(),
            backgroundColor: '#181f75'}
        ]
    };

    return(
        <Bar
        data={info}
        width={500}
        height={100}/>
    );
}
export default BarGraph;