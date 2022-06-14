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
import funclistDist from '../../common/funcList';
import commonConfigDist from '../../common/commonConfig';
import { Flipped } from "react-flip-toolkit";


import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';

import _ from 'lodash';



export default (props) => {
  const param = useParams();
  const { schemeName } = param;

  const navigate = useNavigate();

  const [funcList, setFuncList] = React.useState([]);
  const [schemeNameList, setSchemeNameList] = React.useState([]);
  const [collapsedIndex, setCollapsedIndex] = React.useState(-1);
  const [globalScheme, setGlobalScheme] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [commonConfig, setCommonConfig] = React.useState([]);


  const reOrderCallback = async (result) => {
    const newFuncList = reOrder(
      funcList,
      result.source.index,
      result.destination.index
    );
    reSortFuncList(newFuncList);
    setFuncList(newFuncList);
    await AutoWeb.autoPromise('saveScheme', getScheme(newFuncList));
    // TODO 失败的话数据回滚
  };

  const reOrder = (list, startIndex, endIndex) => {
    const result = _.cloneDeep(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleCheck = (index, e) => (async () => {
    e.stopPropagation();
    const newFuncList = _.cloneDeep(funcList);
    newFuncList[index].checked = !newFuncList[index].checked;
    reSortFuncList(newFuncList);
    setFuncList(newFuncList);
    saveScheme(newFuncList);
    // TODO 失败的话数据回滚
  })();

  const getScheme = (funcList) => {
    const scheme = _.cloneDeep(globalScheme);
    const filteredFuncList = funcList.filter(item => item.checked);
    // 重新生成list字段
    scheme.list = filteredFuncList.map(item => item.id);
    // 重新生成config字段
    const funcConfig = {};
    filteredFuncList.forEach(func => {
      if (func.config) {
        funcConfig[func.id] = {};
        func.config.forEach(configGroup => {
          configGroup?.config?.forEach(config => {
            funcConfig[func.id][config.name] = config.value || config.default;
          });
        });
      }
    });
    scheme.config = funcConfig;
    return scheme;
  };

  const saveScheme = async (funcList) => {
    const scheme = getScheme(funcList);
    await AutoWeb.autoPromise('saveScheme', scheme);
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
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };


  React.useEffect(() => {
    (async () => {
      const [scheme, schemeList] = await Promise.all([
        AutoWeb.autoPromise('getScheme', schemeName),
        AutoWeb.autoPromise('getSchemeList')
      ]);
      setGlobalScheme(scheme);
      setSchemeNameList(schemeList.map((item) => item.schemeName)); // schemeNameList用于给予配置中type === 'scheme'的配置项

      // 根据scheme.list开启funcList的switch
      const newFunclist = _.cloneDeep(funclistDist);
      newFunclist.forEach((item, index) => {
        for (let i = 0; i < scheme.list.length; i++) {
          if (item.id === scheme.list[i]) {
            newFunclist[index].checked = true;
            break;
          }
        }
      });

      // 根据scheme.list的顺序重新排序
      newFunclist.sort((a, b) => {
        const aid = scheme.list.indexOf(a.id);
        const bid = scheme.list.indexOf(b.id);
        if (aid === bid && aid === -1) {
          return 0;
        }
        return aid - bid;
      });

      // 根据scheme.config重新设置funcList的config
      newFunclist.forEach(item => {
        if (item.checked && item.config) {
          item.config.forEach(configGroup => {
            configGroup?.config?.forEach(config => {
              if (scheme.config[item.id] && scheme.config[item.id][config.name]) {
                config.value = scheme.config[item.id][config.name];
              }
            });
          });
        }
      });

      reSortFuncList(newFunclist);
      setFuncList(newFunclist);
      const newCommonConfig = [...commonConfigDist];
      newCommonConfig.forEach(commonConfigGroup => {
        commonConfigGroup.config.forEach(commonConfigItem => {
          commonConfigItem.value = scheme.commonConfig?.[commonConfigItem.name] || commonConfigItem.default;
        });
      });
      setCommonConfig(newCommonConfig);
    })();
  }, [schemeName]);

  return (
    <>
      <AppBar
        leftElement={<ChevronLeftIcon />}
        onIconButtonClick={() => navigate(-1)}
        subTitle="功能列表"
        rightElement={<SettingsIcon onClick={() => {
          setDialogOpen(true);
        }} />}
      />
      <AppContent>
        <DragList
          subheader={<ListSubheader sx={{ height: '30px', lineHeight: '30px' }}>方案 - {schemeName}</ListSubheader>}
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
                  <div>
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
                              <ConfigListItem
                                onChange={(e, value) => {
                                  const newFuncList = _.cloneDeep(funcList);
                                  newFuncList[index].config[configGroupIndex].config[configItemIndex].value = value;
                                  setFuncList(newFuncList);
                                  saveScheme(newFuncList);
                                }}
                                configItem={configItem}
                                key={configItemIndex}
                              />
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
        <Dialog onClose={handleDialogClose} open={dialogOpen}>
          {/* TODO merge scheme commonConfig */}
          <div style={{ maxHeight: '270px', overflow: 'scroll' }}>
            {commonConfig.map((configGroup, configGroupIndex) => (
              <div key={configGroupIndex} >
                <List
                  sx={{ pt: '16px', pr: '16px', color: '#1976d2', fontSize: '12px' }}
                  subheader={<div style={{ paddingLeft: '16px' }}>{configGroup.desc}</div>}
                  component="div"
                >
                  {configGroup.config.map((configItem, configItemIndex) => {
                    if (configItem.type === 'scheme') {
                      configItem.type = 'list';
                      configItem.data = schemeNameList;
                    }
                    return (
                      <ConfigListItem
                        onChange={(e, value) => (async () => {
                          const newFuncList = _.cloneDeep(funcList);
                          const newGlobalScheme = { ...globalScheme };
                          newGlobalScheme.commonConfig[configItem.name] = value;
                          setGlobalScheme(newGlobalScheme);
                          await AutoWeb.autoPromise('saveScheme', getScheme(newFuncList));
                        })()}
                        configItem={configItem}
                        key={configItemIndex}
                      />
                    )
                  })}
                </List>
              </div>
            ))}
          </div>
        </Dialog>
      </AppContent>
    </>
  );
}
