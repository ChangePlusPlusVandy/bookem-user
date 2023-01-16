import React from 'react';
import styled from 'styled-components';

// a single past event

const EventContainter = styled.div`
    background-color: white;
    height: 8em;
    width: 13em;    
    margin-top: 20px;
    margin-left: -34px;
    display: flex;
    border-radius: 10px;
`


const PastActivityEvent = ({eventData} : any) => {
    return (
        <EventContainter></EventContainter>
    )
}

export default PastActivityEvent;