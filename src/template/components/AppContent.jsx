import React from 'react';

export default (prop) => {
    return (
        <div style={{ paddingTop: 48, ...prop.sx }}>
            {prop.children}
        </div>
    )
}