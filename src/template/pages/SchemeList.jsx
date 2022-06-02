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
    const [schemeList, setSchemeList] = React.useState([]);

    const handleStar = (index) => async () => {
        const newSchemeList = [...schemeList];
        newSchemeList[index].star = !newSchemeList[index].star;
        const result = await AutoWeb.autoPromise('saveSchemeList', newSchemeList);
        if (result) {
            setSchemeList(newSchemeList);
        }
    };

    const reOrderCallback = async (result) => {
        const newSchemeList = reOrder(
            schemeList,
            result.source.index,
            result.destination.index
        );
        if (await AutoWeb.autoPromise('saveSchemeList', newSchemeList)) {
            setSchemeList(newSchemeList);
        }
    }

    const reOrder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    React.useEffect(() => {
        (async () => {
            const newDataList = await AutoWeb.autoPromise('getSchemeList');
            setSchemeList(newDataList);
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
                    reOrderCallback={reOrderCallback}
                >
                    {schemeList.map((item, index) => (
                        <DragListItem
                            key={`item-${index}`}
                            text={item.schemeName}
                            index={index}
                            onClick={() => navigate(`/FuncList/${item.schemeName}`)}
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