import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import AppContent from '../components/AppContent';

import DragList from '../components/DragList';
import DragListItem from '../components/DragListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import defaultFuncList from '../../common/funcList';

export default (props) => {
    const param = useParams();
    const { schemeName } = param;

    const navigate = useNavigate();

    const [funcList, setFuncList] = React.useState([]);

    const reOrderCallback = async (result) => {

    };

    const handleCheck = (index) => async () => {};


    React.useEffect(() => {
        (async () => {
            const scheme = await AutoWeb.autoPromise('getScheme', schemeName);
            // TODO
            // setFuncList(newFuncList);
            const newFunclist = [...defaultFuncList];
            newFunclist.forEach((item, index) => {
                for (let i = 0; i < scheme.list.length; i++) {
                    if (item.id === scheme.list[i]) {
                        newFunclist[index].checked = true;
                        break;
                    }
                }
            });
            newFunclist.sort((a, b) => {
                if (a.checked === b.checked) {
                    return a.id - b.id;
                } else {
                    return a.checked ? -1 : 1;
                }
            });
            setFuncList(newFunclist);
        })();
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
                            text={`${item.id} ${item.name}`}
                            index={index}
                            onClick={() => navigate(`/FuncList/${item.schemeName}`)}
                        >
                            <div onClick={handleCheck(index)} >
                                <Switch checked={item.checked ? true : false}/>
                            </div>
                        </DragListItem>
                    ))}
                </DragList>
            </AppContent>
        </>
    );
}