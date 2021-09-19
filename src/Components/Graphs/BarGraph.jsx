import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import api from '../../services/api';

const BarGraph = ()=>{
    const [channels, setChannels] = useState([]);
    const channelList = [];
    makeData();

    useEffect(() => {
        api.get("http://localhost:3333/channels")
          .then((res) => setChannels(res.data));
          makeData();
      }, []
    );

    function makeData(){
        channels.map((channel)=>(
            channelList.push(channel.name)
        ));
        console.log('channel list is', channelList)
    }

    function generateRandom(){
        var randomNumbers = [];
        for (let i = 0; i<channelList.length; i++){
            let newNumber = Math.random()*200;
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