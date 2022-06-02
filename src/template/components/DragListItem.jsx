import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export default (props) => {
    const { children, ...others } = props;

    const getItemStyle = (isDragging, draggableStyle) => {
        return {
            // some basic styles to make the items look a bit nicer
            userSelect: "none",
            // padding: grid * 2,
            // margin: `0 0 ${grid}px 0`,

            // change background colour if dragging
            background: isDragging ? "rgba(0,0,0,.1)" : "#fff",

            // styles we need to apply on draggables
            ...draggableStyle
        }
    };

    return (
        <Draggable draggableId={`${props.index}`} index={props.index}>
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
                    <ListItemButton {...others} >
                        {/* <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon> */}
                        <ListItemText primary={props.text} />
                        <div {...provided.dragHandleProps}>
                            <DragHandleIcon sx={{ mr: '20px' }} />
                        </div>
                        {children}
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li" sx={{ display: snapshot.isDragging ? 'none' : 'flex' }}/>
                </div>
            )}
        </Draggable>
    );
}