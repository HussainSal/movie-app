import React from 'react';

function NotFound(props) {
    return (
        <div>
            <h1 style={{fontSize: '5rem', fontWeight: '300'}}>{props.type} Not Found!!</h1>
        </div>
    );
}

export default NotFound;