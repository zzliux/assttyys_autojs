import React from 'react';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export default (prop) => {
    const getItemStyle = (isDragging, draggableStyle) => {
        return {
            // some basic styles to make the items look a bit nicer
            userSelect: "none",
            // padding: grid * 2,
            // margin: `0 0 ${grid}px 0`,

            // change background colour if dragging
            background: isDragging ? "#efefef" : "#fff",

            // styles we need to apply on draggables
            ...draggableStyle
        }
    };

    return (
        <Draggable draggableId={`${prop.index}`} index={prop.index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                        color: 'rgba(0, 0, 0, .7)', ...getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )
                    }}
                >
                    <ListItemButton>
                        {/* <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon> */}
                        <ListItemText primary={prop.text} />
                        <div {...provided.dragHandleProps}>
                            <DragHandleIcon sx={{ mr: '20px' }} />
                        </div>
                        {prop.children}
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li" sx={{ display: snapshot.isDragging ? 'none' : 'flex' }}/>
                </div>
            )}
        </Draggable>
    );
}