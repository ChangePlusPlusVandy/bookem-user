import React from 'react';
import styled from 'styled-components';
import PastActivityEvent from './PastActivityEvent';

// vertical list of sample past events (another component)

const Container = styled.div`
    background-color: #D9D9D9;
    height: 100%;
    width: 15em;
    overflowY: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
`

const Header = styled.p `
    font-family: 'Inter';
    font-size: 25px;
    margin-top: 50px;
    text-align: center;
    font-weight: 400;
`

const PastActivity = () => {
    return <Container>
        <Header>Past activity</Header>
        <ul>
            <PastActivityEvent></PastActivityEvent>
            <PastActivityEvent></PastActivityEvent>
            <PastActivityEvent></PastActivityEvent>
            <PastActivityEvent></PastActivityEvent>
            <PastActivityEvent></PastActivityEvent>
            <PastActivityEvent></PastActivityEvent>
        </ul>
    </Container>
}

export default PastActivity;