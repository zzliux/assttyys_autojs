import React from 'react';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

/**
 * TODO
 */
export default (prop) => {
    return (
        <div style={{ color: 'rgba(0, 0, 0, .7)' }}>
            <ListItemButton>
                {/* <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon> */}
                <ListItemText primary={prop.text} />
                {prop.rightElement}
            </ListItemButton>
            <Divider variant="fullWidth" component="li" />
        </div>
    );
}