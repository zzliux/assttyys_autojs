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
    const namedIcon = {
        autoService: <SettingsAccessibilityIcon />,
        screenCapturePermission: <ScreenshotMonitorIcon />,
        floatyPerminssion: <TagFacesIcon />,
        stop_all_on_volume_up: <VolumeUpIcon />,
        foreground_service: <NotesIcon />,
        ignoreBatteryOptimization: <Battery1BarIcon />,
        __other: <NotesIcon />,
    };

    const [list, setList] = React.useState([]);

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
                item.icon = namedIcon[item.name] || namedIcon.__other;
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