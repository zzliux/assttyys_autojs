import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import AppContent from '../components/AppContent';

import DragList from '../components/DragList';
import DragListItem from '../components/DragListItem';
import ConfigListItem from '../components/ConfigListItem';

import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import defaultFuncList from '../../common/funcList';
import { Flipped } from "react-flip-toolkit";


import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



export default (props) => {
  const param = useParams();
  const { schemeName } = param;

  const navigate = useNavigate();

  const [funcList, setFuncList] = React.useState([]);
  const [schemeNameList, setSchemeNameList] = React.useState([]);
  const [collapsedIndex, setCollapsedIndex] = React.useState(-1);

  const reOrderCallback = async (result) => {
    const newFuncList = reOrder(
      funcList,
      result.source.index,
      result.destination.index
    );
    reSortFuncList(newFuncList);
    setFuncList(newFuncList);
    await AutoWeb.autoPromise('saveSchemeList', getScheme(newFuncList));
    // TODO 失败的话数据回滚
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
    reSortFuncList(newFuncList);
    setFuncList(newFuncList);
    await AutoWeb.autoPromise('saveScheme', getScheme(newFuncList));
    // TODO 失败的话数据回滚
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
      const [scheme, schemeList] = await Promise.all([
        AutoWeb.autoPromise('getScheme', schemeName),
        AutoWeb.autoPromise('getSchemeList')
      ]);
      setSchemeNameList(schemeList.map((item) => item.schemeName));
      // TODO
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
          subheader={<ListSubheader sx={{height: '30px', lineHeight: '30px'}}>方案 - {schemeName}</ListSubheader>}
          reOrderCallback={reOrderCallback}
        >
          {funcList.map((item, index) => (
            <Flipped key={`item-${item.id}`} flipId={`item-${item.id}`}>
              <DragListItem
                text={`${item.id} ${item.name}${item.config ? ' *' : ''}`}
                secondaryText={item.desc}
                index={index}
                collapsed={index == collapsedIndex}
                collapsedCallback={(status) => { 
                  if (status) {
                    setCollapsedIndex(index);
                  } else {
                    setCollapsedIndex(-1);
                  }
                }}
                collapse={item.config && (
                  <div style={{ maxHeight: '270px', overflow: 'scroll' }}>
                    {item.config.map((configGroup, configGroupIndex) => (
                      <div key={configGroupIndex} >
                        <Divider variant="fullWidth" component="li" sx={{ ml: '32px', mb: '6px' }} />
                        <List
                          sx={{ pl: '32px', color: '#1976d2', fontSize: '12px' }}
                          subheader={configGroup.desc}
                          component="div"
                        >
                          {configGroup.config.map((configItem, configItemIndex) => {
                            if (configItem.type === 'scheme') {
                              configItem.type = 'list';
                              configItem.data = schemeNameList;
                            }
                            return (
                              <ConfigListItem configItem={configItem} key={configItemIndex} />
                            )
                          })}
                        </List>
                      </div>
                    ))}
                  </div>
                )}
              >
                <div>
                  <Switch
                    checked={item.checked ? true : false}
                    onChange={e => handleCheck(index, e)}
                    onClick={e => e.stopPropagation()}
                  />
                </div>
              </DragListItem>
            </Flipped>
          ))}
        </DragList>
      </AppContent>
    </>
  );
}
