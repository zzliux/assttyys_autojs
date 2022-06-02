import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default (props) => {
    const [subTitle, setSubTitle] = React.useState('');
    React.useEffect(() => {
        if (props.subTitle) {
            setSubTitle(` | ${props.subTitle}`);
        }
    }, [props.subTitle]);

    return (
        <AppBar position="static" color="primary" sx={{ position: 'fixed', zIndex: 2 }}>
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
                ASSTTYYS{subTitle}
                </Typography>
                {props.rightElement}
            </Toolbar>
        </AppBar>
    )
}