import React from 'react';

export default (props) => {
    return (
        <div style={{ paddingTop: 48, ...props.sx }}>
            {props.children}
        </div>
    )
}