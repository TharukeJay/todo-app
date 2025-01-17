import React from 'react';
import ReactLoading from 'react-loading';

export default function ScreenLoading() {
    return (
        <div className="viewLoading" style={styles.container}>
            <ReactLoading type={'spinningBubbles'} color={'yellogreen'} height={'15%'} width={'15%'} />
            <br/>
            <br/>
            <br/>
            <p style={styles.text}>Wait, processing...</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    text: {
        marginTop: '10px',
        fontSize: '16px',
        color: 'black',
    }
};
