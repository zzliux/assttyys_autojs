import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import AppBar from '../components/AppBar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragListItem from '../components/DragListItem';

import MenuIcon from '@mui/icons-material/Menu';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default () => {
    const navigate = useNavigate();
    const [dataList, setDataList] = React.useState([]);

    const handleStar = (index) => async () => {
        const newDataList = [...dataList];
        newDataList[index].star = !newDataList[index].star;
        const result = await AutoWeb.autoPromise('saveSchemeList', newDataList);
        if (result) {
            setDataList(newDataList);
        }
    };


    const onDragStart = (a) => {
    };

    const onDragEnd = (result) => (async () => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        const newDataList = reSort(
            dataList,
            result.source.index,
            result.destination.index
        );
        const saveResult = await AutoWeb.autoPromise('saveSchemeList', newDataList);
        if (saveResult) {
            setDataList(newDataList);
        }
    })();

    const onDragUpdate = (b) => {
    };

    const reSort = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    React.useEffect(() => {
        (async () => {
            const newDataList = await AutoWeb.autoPromise('getSchemeList');
            setDataList(newDataList);
        })();
    }, []);

    return (
        <>
            <AppBar
                leftElement={<MenuIcon />}
                onIconButtonClick={() => navigate('/Settings')}
            />
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
                                subheader={<ListSubheader>方案列表</ListSubheader>}
                            >
                                <Divider variant="fullWidth" component="li" />
                                {dataList.map((item, index) => (
                                    <DragListItem
                                        key={`item-${index}`}
                                        text={item.schemeName}
                                        index={index}
                                    >
                                        <div onClick={handleStar(index)} >
                                            {item.star ? <StarRoundedIcon sx={{ mr: '10px', color: '#1976d2' }} /> : <StarBorderRoundedIcon sx={{ mr: '10px' }} />}
                                        </div>
                                    </DragListItem>
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