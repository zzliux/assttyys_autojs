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
        const newFuncList = reOrder(
            funcList,
            result.source.index,
            result.destination.index
        );
        if (await AutoWeb.autoPromise('saveSchemeList', getScheme(newFuncList))) {
            reSortFuncList(newFuncList);
            setFuncList(newFuncList);
        }
    };

    const reOrder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const handleCheck = (index, e) => (async () => {
        e.stopPropagation();
        const newFuncList = [...funcList];
        newFuncList[index].checked = !newFuncList[index].checked;
        if (await AutoWeb.autoPromise('saveScheme', getScheme(newFuncList))) {
            reSortFuncList(newFuncList);
            setFuncList(newFuncList);
        }
    })();

    // TODO
    const getScheme = (funcList) => {
        return true;
    };

    const reSortFuncList = (funcList) => {
        funcList.sort((a, b) => {
            if (a.checked === b.checked) {
                // TODO 返回 0 还是按 id 排序
                // return a.id - b.id;
                return 0;
            } else {
                return a.checked ? -1 : 1;
            }
        });
    }


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
            reSortFuncList(newFunclist);
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
                            text={`${item.id} ${item.name}${item.config ? '*' : ''}`}
                            secondaryText={item.desc}
                            index={index}
                            // TODO show pannel
                            // onClick={() => navigate(`/FuncList/${item.schemeName}`)}
                        >
                            <div onClick={e => handleCheck(index, e)} >
                                <Switch checked={item.checked ? true : false} />
                            </div>
                        </DragListItem>
                    ))}
                </DragList>
            </AppContent>
        </>
    );
}