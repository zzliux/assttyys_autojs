import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import AppBar from '../components/AppBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import MenuIcon from '@mui/icons-material/Menu';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DragListItem from '../components/DragListItem';

export default () => {
    const navigate = useNavigate();
    const [dataList, setDataList] = React.useState([]);

    const handleStar = (index) => async () => {
        const newDataList = dataList.splice(0);
        console.log(dataList);
        newDataList[index].star = !newDataList[index].star;
        const result = await AutoWeb.autoPromise('saveSchemeList', newDataList);
        if (result) {
            setDataList(newDataList);
        }
    }

    React.useEffect(() => {
        (async () => {
            const newDataList = await AutoWeb.autoPromise('getSchemeList');
            setDataList(newDataList);
        })();
    }, []);


    const onDragStart = () => { };
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const newDataList = reorder(
            dataList,
            result.source.index,
            result.destination.index
        );

        setDataList(newDataList);
    };
    const onDragUpdate = () => { };
    const reorder = (list, startIndex, endIndex) => {
        const result = list.splice(0);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        console.log(`startIndex=${startIndex}, endIndex=${endIndex}`);
        console.log(result);
        return result;
    };
    const getItemStyle = isDraggingOver => ({
        background: isDraggingOver ? "#aaa" : "#fff",
    });

    return (
        <>
            <AppBar
                leftElement={<MenuIcon />}
                onIconButtonClick={() => navigate('/Settings')}
            />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        >
                            <List
                                subheader={<ListSubheader>方案列表</ListSubheader>}
                            >
                                <Divider variant="fullWidth" component="li" />
                                {dataList.map((item, index) => (
                                    <Draggable key={`item-${index}`} draggableId={`${index}`} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <DragListItem
                                                    text={item.schemeName}
                                                    draggableId={`${index}`}
                                                    rightElement={
                                                        <>
                                                            <div onClick={handleStar(index)} >
                                                                {item.star ? <StarRoundedIcon sx={{ mr: '10px', color: '#1976d2' }} /> : <StarBorderRoundedIcon sx={{ mr: '10px' }} />}
                                                            </div>
                                                        </>
                                                    }
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </List>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
}