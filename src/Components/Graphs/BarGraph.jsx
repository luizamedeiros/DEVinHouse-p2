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
      }, []
    );

    function makeData(){
        channels.map((channel)=>(
            channelList.push(channel.name)
        ));
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
            backgroundColor: ['blue','green','teal','red']}
        ]
    };
    const options = {
        indexAxis: 'y'
    }

    return(
        <Bar
        data={info}
        width={500}
        height={100}
        options={options}/>
    );
}
export default BarGraph;