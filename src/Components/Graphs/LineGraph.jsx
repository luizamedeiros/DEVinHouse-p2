import React from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = () => {

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
            label: 'Quantidade de transações PIX',
            data: generateRandom(),
            borderColor: '#181f75',
            backgroundColor: '#181f75'}
        ]
    };

    return (
        <Line
            data={info}
            width={500}
            height={100}/>
    );
}
export default LineGraph;