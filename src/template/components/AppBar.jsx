import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default (prop) => {
    const [subTitle, setSubTitle] = React.useState('');
    React.useEffect(() => {
        if (prop.subTitle) {
            setSubTitle(`| ${prop.subTitle}`);
        }
    }, [prop.subTitle]);

    return (
        <AppBar position="static" color="primary" sx={{ position: 'fixed', zIndex: 2 }}>
            <Toolbar sx={{ minHeight: '48px !important' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={prop.onIconButtonClick}
                >
                    {prop.leftElement}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ASSTTYYS {subTitle}
                </Typography>
                {prop.rightElement}
            </Toolbar>
        </AppBar>
    )
}