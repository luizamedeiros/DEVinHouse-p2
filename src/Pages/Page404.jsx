import React from 'react';
import styled from 'styled-components';

const Warning = styled.h1`
    text-align: center;
`

const Page404 =() =>{
    return(
        <div>
            <Warning>Opa! A página não existe!</Warning>
        </div>
    );
}
export default Page404