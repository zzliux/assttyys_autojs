import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import AppBar from '../components/AppBar';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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

    const dataListEles = dataList.map((item, index) => {
        return (
            <DragListItem
                key={index}
                text={item.schemeName}
                rightElement={
                    <>
                        <div onClick={handleStar(index)} >
                            {item.star ? <StarRoundedIcon sx={{ mr: '10px', color: '#1976d2' }} /> : <StarBorderRoundedIcon sx={{ mr: '10px' }} />}
                        </div>
                    </>
                }
            />
        )
    });

    return (
        <>
            <AppBar
                leftElement={<MenuIcon />}
                onIconButtonClick={() => navigate('/Settings')}
            />

            <DndProvider backend={HTML5Backend}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader>方案列表</ListSubheader>}
                >
                    <Divider variant="fullWidth" component="li" />
                    {dataListEles}
                </List>
            </DndProvider>
        </>
    );
}