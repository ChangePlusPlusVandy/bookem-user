import React from 'react';

// vertical list of past events (another component)

const UpcomingEvents = () => {
    const styles = {
        div: {
            backgroundColor: "#D9D9D9",
            height: "100vh",
            position: "absolute",
            right: "0px",
            padding: "10px",
            width: "15em",
            overflowY: "auto",
        },
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
    return <div style={styles.div}>
        <h2 style={styles.h2}>Past activity</h2>
        <ul>
            <div style={styles.event}>
                <h4>Event 1</h4>
            </div>
            <div style={styles.event}>
                <h4>Event 2</h4>
            </div>
            <div style={styles.event}>
                <h4>Event 3</h4>
            </div>
            <div style={styles.event}>
                <h4>Event 4</h4>
            </div>
            <div style={styles.event}>
                <h4>Event 5</h4>
            </div>
        </ul>
    </div>
}

export default UpcomingEvents;