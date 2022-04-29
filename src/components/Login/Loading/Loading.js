import React from 'react';
import { Spinner } from 'react-bootstrap';
const style = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '0.2'
}
const Loading = () => {
    return (
        <div>
            <div style={style}>
                <Spinner animation="border" variant="warning" />
            </div>
        </div>
    );
};

export default Loading;