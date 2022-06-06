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
import { Flipped } from "react-flip-toolkit";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ConfigListItem = (prop) => {
  const { configItem } = prop;
  const [value, setValue] = React.useState(configItem.value || configItem.default);
  const handleSelectChange = (e) => {
    // TODO 执行回调，保存配置
    setValue(e.target.value);
  };

  const handleSwitchChange = (e) => {
    // TODO 执行回调，保存配置
    setValue(e.target.checked);
  }

  return (
    <div>
      <ListItemButton
        sx={{ color: 'rgba(0, 0, 0, .6)', fontSize: '12px', pt: '4px', pb: '4px' }}
      >
        <ListItemText
          primaryTypographyProps={{ sx: { fontSize: '12px', pr: '10px' } }}
          primary={configItem.desc}

        />
        <span style={{ display: 'flex', flexShrink: 0, width: '80px' }}>
          {(() => {
            if (configItem.type === 'switch') {
              return (
                <Switch
                  checked={value}
                  onChange={e => handleSwitchChange(e)}
                />
              );
            } else if (configItem.type === 'list') {
              return (
                <FormControl variant="standard" sx={{ minWidth: '80px' }}>
                  <Select
                    value={value}
                    onChange={handleSelectChange}
                    sx={{ fontSize: '12px' }}
                  >
                    {configItem.data.map((listItem, listItemIndex) => (
                      <MenuItem sx={{ fontSize: '12px', pt: 0, pb: 0, height: '32px' }} key={listItemIndex} value={listItem}>{listItem}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )
            } else {
              return (
                value
              );
            }
          })()}
        </span>
      </ListItemButton>
      <Divider variant="fullWidth" component="li" sx={{ ml: '16px' }} />
    </div>
  )
}

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
      console.log(newFunclist);
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
            <Flipped key={`item-${item.id}`} flipId={`item-${item.id}`}>
              <DragListItem
                text={`${item.id} ${item.name}${item.config ? ' *' : ''}`}
                secondaryText={item.desc}
                index={index}
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
                          {configGroup.config.map((configItem, configItemIndex) => (
                            <ConfigListItem configItem={configItem} key={configItemIndex} />
                          ))}
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