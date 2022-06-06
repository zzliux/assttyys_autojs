import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Flipper } from "react-flip-toolkit";

export default (props) => {
    const { subheader, reOrderCallback, children, flipKey, ...others } = props;

    const onDragStart = (a) => {
    };

    const onDragEnd = (result) => (async () => {

        // dropped outside the list
        if (!result.destination) {
            return;
        }
        reOrderCallback(result);
    })();

    const onDragUpdate = (b) => {
    };

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
        >
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    >
                        <List
                            subheader={subheader}
                            {...others}
                        >
                            <Divider variant="fullWidth" component="li" />
                            <Flipper flipKey={children.map(item => item.props.flipId).join(',')}>
                                {children}
                            </Flipper>
                            {provided.placeholder}
                        </List>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}