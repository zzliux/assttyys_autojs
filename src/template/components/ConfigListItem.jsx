import React, { useEffect } from 'react';

import Switch from '@mui/material/Switch';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import _ from 'lodash';


// 输入框防抖, 放外面防止因重新调用函数而导致防抖失效
const handleTextChangeDebounce = _.debounce((e, onChange) => {
  onChange && onChange(e, e.target.value)
}, 700);


export default (prop) => {
  const { configItem, onChange } = prop;
  const [value, setValue] = React.useState(configItem.value || configItem.default);
  const handleSelectChange = (e) => {
    onChange && onChange(e, e.target.value)
    setValue(e.target.value);
  };

  const handleSwitchChange = (e) => {
    onChange && onChange(e, e.target.checked)
    setValue(e.target.checked);
  }

  const handleTextChange = (e) => {
    handleTextChangeDebounce(e, onChange);
    setValue(e.target.value);
  };



  return (
    <div className="config-list-item">
      <ListItem
        sx={{ color: 'rgba(0, 0, 0, .6)', fontSize: '12px', pt: '4px', pb: '4px' }}
      >
        <ListItemText
          primaryTypographyProps={{ sx: { fontSize: '12px', pr: '10px' } }}
          primary={configItem.desc}

        />
        <span className="config-list-item-input">
          {(() => {
            if (configItem.type === 'switch') {
              return (
                <Switch
                  size="small"
                  checked={value}
                  onChange={e => handleSwitchChange(e)}
                />
              );
            } else if (configItem.type === 'list') {
              return (
                <FormControl variant="standard" sx={{ minWidth: '80px' }}>
                  <Select
                    size="small"
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
                <TextField
                  variant="standard"
                  value={value}
                  onChange={handleTextChange}
                />
              );
            }
          })()}
        </span>
      </ListItem>
      <Divider variant="fullWidth" component="li" sx={{ ml: '16px' }} />
    </div>
  )
}
