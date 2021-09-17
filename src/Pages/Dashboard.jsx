import React from 'react';
import styled from 'styled-components';
import LineGraph from '../Components/Graphs/LineGraph';
import BarGraph from '../Components/Graphs/BarGraph';

const GraphWrapper = styled.div`
    height: 40%;
    width: 60%;
    margin: auto;
    padding: 3%;
    border: 2px solid #181f75;
    border-radius: 6px;
`
const Title = styled.h1`
    margin: auto auto 2% auto;
    text-align: center;
`

const Dashboard =()=>{
    return(
        <GraphWrapper>
            <Title> ZAPboard </Title>
            <BarGraph/>
            <LineGraph/>
        </GraphWrapper>
    )
}
export default Dashboard;