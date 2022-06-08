import React, { useEffect } from 'react';

import Switch from '@mui/material/Switch';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default (prop) => {
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
        <div className="config-list-item">
            <ListItemButton
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
