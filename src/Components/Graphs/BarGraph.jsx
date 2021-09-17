import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarGraph = ()=>{

    function generateRandom(){
        var randomNumbers = [];
        for (let i = 0; i<10; i++){
            let newNumber = Math.random()*700;
            randomNumbers.push(newNumber);
        }
        return randomNumbers;
    }

    const info = {
        labels: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho', 'Julho', 'Julho', 'Agosto', 'Setembro'
        ],
        datasets: [{
            label: 'Quantidade de depósitos', 
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