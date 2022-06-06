import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import { Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export default (props) => {
    const { children, text, secondaryText, key, draggableId, index, collapse, onClick, ...others } = props;
    const [collapseOpen, setCollapseOpen] = React.useState(false);

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

    const MyCollapse = () => {
        if (Collapse) {
            return (
                <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                    {collapse}
                </Collapse>
            )
        }
        return null;
    }

    return (
        // draggable需要key，否则拖拽异常
        <Draggable key={`${key || draggableId || index}`} draggableId={`${key || draggableId || index}`} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                        color: 'rgba(0, 0, 0, .7)',
                        ...getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )
                    }}
                >
                    <ListItemButton
                        sx={{ paddingTop: 0, paddingBottom: 0, minHeight: '42px' }}
                        onClick={() => {
                            setCollapseOpen(!collapseOpen);
                            onClick && onClick.apply(this);
                        }}
                        {...others} >
                        {/* <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon> */}
                        <ListItemText
                            primary={text}
                            primaryTypographyProps={{ sx: { fontSize: '14px' } }}
                            secondary={secondaryText}
                            secondaryTypographyProps={{ sx: { fontSize: '12px' } }}
                        />
                        <div {...provided.dragHandleProps}>
                            <DragHandleIcon sx={{ mr: '20px' }} />
                        </div>
                        {children}
                    </ListItemButton>
                    {MyCollapse()}
                    <Divider variant="fullWidth" component="li" sx={{ display: snapshot.isDragging ? 'none' : 'flex' }} />
                </div>
            )}
        </Draggable>
    );
}