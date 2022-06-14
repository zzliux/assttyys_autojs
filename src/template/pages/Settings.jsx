import React from 'react';
import List from '@mui/material/List';
import AppBar from '../components/AppBar';
import AppContent from '../components/AppContent';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ConfigListItem from '../components/ConfigListItem';

export default () => {

  const [list, setList] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const settings = await AutoWeb.autoPromise('getSettings');
      setList(settings);
    })();
  }, []);

  // const listEles = list.map((item, index) => {
  //     return (
  //         <ListItem key={index}>
  //             <ListItemIcon>
  //                 {item.icon}
  //             </ListItemIcon>
  //             <ListItemText primary={item.desc} />
  //             <Switch
  //                 checked={item.enabled}
  //                 onChange={handleToggle(index)}
  //             />
  //         </ListItem>
  //     );
  // });

  return (
    <>
      <AppBar
        leftElement={<ChevronLeftIcon />}
        onIconButtonClick={() => navigate(-1)}
        subTitle="应用设置"
      />
      <AppContent>
        <List sx={{ pr: '16px' }}>
          {list.map((item, index) => {
            return (
              <ConfigListItem
                key={index}
                configItem={{
                  name: item.name,
                  desc: item.desc,
                  value: item.value || item.enabled || '',
                  type: item.stype || 'switch',
                  data: item.data,
                }}
                onChange={(e, value) => {
                  AutoWeb.autoPromise('saveSetting', {
                    name: item.name,
                    value: value,
                    enabled: value,
                    type: item.type,
                    stype: item.stype,
                  });
                }}
                sx={{
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: 'rgba(0, 0, 0, .7)',
                  height: '20px'
                }}
              />
            )
          })}
        </List>
      </AppContent>
    </>
  );
}