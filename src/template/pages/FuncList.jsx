import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import AppContent from '../components/AppContent';

import DragList from '../components/DragList';
import DragListItem from '../components/DragListItem';
import ListSubheader from '@mui/material/ListSubheader';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default (props) => {
    const param = useParams();
    const { schemeName } = param;

    const navigate = useNavigate();

    const [funcList, setFuncList] = React.useState([]);

    const reOrderCallback = async (result) => {

    };


    React.useEffect(() => {
        (async () => {
            const scheme = await AutoWeb.autoPromise('getScheme', schemeName);
            // TODO
            // setFuncList(newFuncList);
        })()
    }, [schemeName]);

    return (
        <>
            <AppBar
                leftElement={<ChevronLeftIcon />}
                onIconButtonClick={() => navigate(-1)}
                subTitle="功能列表"
                rightElement={<SettingsIcon onClick={() => {
                    // TODO 方案的公共配置
                    debugger;
                }} />}
            />
            <AppContent>
                <DragList
                    subheader={<ListSubheader>方案 - {schemeName}</ListSubheader>}
                    reOrderCallback={reOrderCallback}
                >
                    {funcList.map((item, index) => (
                        <DragListItem
                            key={`item-${index}`}
                            text={item.name}
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