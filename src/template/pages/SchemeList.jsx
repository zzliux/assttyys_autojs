import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import AppBar from '../components/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default () => {
    const navigate = useNavigate();
    const [dataList, setDataList] = React.useState([]);

    const handleStar = (index) => async () => {
        const newDataList = dataList.splice(0);
        console.log(dataList);
        newDataList[index].star = !newDataList[index].star;
        const result = await AutoWeb.autoPromise('saveSchemeList', newDataList);
        if (result) {
            setDataList(newDataList);
        }
    }

    React.useEffect(() => {
        (async () => {
            const newDataList = await AutoWeb.autoPromise('getSchemeList');
            setDataList(newDataList);
        })();
    }, []);

    const dataListEles = dataList.map((item, index) => {
        return (
            <div key={index} style={{ color: 'rgba(0, 0, 0, .7)' }}>
                <ListItemButton>
                    {/* <ListItemIcon>
                <WifiIcon />
            </ListItemIcon> */}
                    <ListItemText primary={item.schemeName} />
                    <DragHandleIcon sx={{ mr: '20px' }} />
                    <div onClick={handleStar(index)} >
                        {item.star ? <StarRoundedIcon sx={{ mr: '10px', color: '#1976d2' }} /> : <StarBorderRoundedIcon sx={{ mr: '10px' }} />}
                    </div>
                </ListItemButton>
                <Divider variant="fullWidth" component="li" />
            </div>
        )
    });

    return (
        <>
            <AppBar
                leftElement={<MenuIcon />}
                onIconButtonClick={() => navigate('/Settings')}
            />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader>方案列表</ListSubheader>}
            >
                <Divider variant="fullWidth" component="li" />
                {dataListEles}
            </List>
        </>
    );
}