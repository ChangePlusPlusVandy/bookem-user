import React from 'react';
import styled from 'styled-components';

// vertical list of past events (another component)

const Div = styled.div`
    background-color: #D9D9D9;
    height: 100%;
    width: 15em;
    overflowY: auto;
    padding: 10px;
`

const Header = styled.h2 `
    font-size: 25px;
    margin-top: 40px;
    text-align: center;
    font-weight: 400;
`

const PastActivity = () => {
    const styles = {
        h2: {
            fontSize: "25px",
            marginTop: "40px",
            textAlign: "center",
            fontWeight: "400",
        },
        event: {
            backgroundColor: "#FFFFFF",
            height: "8em",
            width: "6em",
            margin: "0 auto"
        },
    };
    return <Div>
        <Header>Past activity</Header>
        <ul>
            
        </ul>
    </Div>
}

export default PastActivity;