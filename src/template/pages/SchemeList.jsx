import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';

import MenuIcon from '@mui/icons-material/Menu';
import AppContent from '../components/AppContent';

import DragList from '../components/DragList';
import DragListItem from '../components/DragListItem';
import ListSubheader from '@mui/material/ListSubheader';

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

    const reSortCallback = async (result) => {
        const newDataList = reSort(
            dataList,
            result.source.index,
            result.destination.index
        );
        if (await AutoWeb.autoPromise('saveSchemeList', newDataList)) {
            setDataList(newDataList);
        }
    }

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
            <AppContent>
                <DragList
                    subheader={<ListSubheader>方案列表</ListSubheader>}
                    reSortCallback={reSortCallback}
                >
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
                </DragList>
            </AppContent>
        </>
    );
}