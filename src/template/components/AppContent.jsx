import React from 'react';
import { useStore } from '../store/index';

export default (props) => {
    const { statusBarHeightStore } = useStore();
    return (
        <div style={{ paddingTop: (48 + statusBarHeightStore.statusBarHeight) + 'px', ...props.sx }}>
            {props.children}
        </div>
    )
}
