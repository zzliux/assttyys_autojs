import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useStore } from '../store/index';


export default (props) => {
    const { statusBarHeightStore } = useStore();

    return (
        <AppBar position="fixed" color="primary" sx={{ pt: statusBarHeightStore.statusBarHeight + 'px' }}>
            <Toolbar sx={{ minHeight: '48px !important' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={props.onIconButtonClick}
                >
                    {props.leftElement}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ASSTTYYS{props.subTitle ? ` | ${props.subTitle}` : ''}
                </Typography>
                {props.rightElement}
            </Toolbar>
        </AppBar>
    )
}