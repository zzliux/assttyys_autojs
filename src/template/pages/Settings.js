import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NotesIcon from '@mui/icons-material/Notes';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';

export default function Settings() {
    const [list, setList] = React.useState([{
        desc: '无障碍服务',
        name: 'autoService',
        enabled: false,
        type: 'autojs_inner_setting_auto_service',
        icon: <SettingsAccessibilityIcon />,
    }, {
        desc: '截图权限',
        name: 'screenCapturePermission',
        enabled: false,
        type: 'autojs_inner_settings_capture_permission',
        icon: <ScreenshotMonitorIcon />,
    }, {
        desc: '悬浮窗权限',
        name: 'floatyPerminssion',
        enabled: false,
        type: 'autojs_inner_setting_floaty_permission',
        icon: <TagFacesIcon />,
    }, {
        desc: '音量上键停止脚本及程序',
        name: 'stop_all_on_volume_up',
        type: 'autojs_inner_setting',
        enabled: false,
        icon: <VolumeUpIcon />,
    }, {
        desc: '前台服务',
        name: 'foreground_service',
        type: 'autojs_inner_setting',
        enabled: false,
        icon: <NotesIcon />,
    }, {
        desc: '忽略电池优化',
        name: 'ignoreBatteryOptimization',
        type: 'autojs_inner_setting_power_manage',
        enabled: false,
        icon: <Battery1BarIcon />,
    }]);

    const handleToggle = (index) => async () => {
        const newList = list.splice(0);
        const result = await AutoWeb.autoPromise('saveSetting', {
            name: newList[index].name,
            enabled: !newList[index].enabled,
            type: newList[index].type,
        });
        if (result) {
            newList[index].enabled = !newList[index].enabled;
        }
        setList(newList);
    };

    React.useEffect(() => {
        (async () => {
            const settings = await AutoWeb.autoPromise('getSettings');
            settings.forEach((item) => {
                const index = list.findIndex((i) => i.name === item.name);
                if (index > -1) {
                    item.icon = list[index].icon;
                }
            });
            setList(settings);
        })();
    }, []);

    const listEles = list.map((item, index) => {
        return (
            <ListItem key={index}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.desc} />
                <Switch
                    checked={item.enabled}
                    onChange={handleToggle(index)}
                />
            </ListItem>
        );
    });

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<ListSubheader>Settings</ListSubheader>}
        >
            {listEles}
        </List>
    );
}