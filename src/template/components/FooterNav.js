import React from 'react';
import { routesDefine } from '../pages/_RoutesDefine';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export default () => {
    const [routeIndex, setRouteIndex] = React.useState(0); // 路由索引
    const navigate = useNavigate(); // 路由跳转
    const location = useLocation();

    React.useEffect(() => {
        for (let i = 0; i < routesDefine.length; i++) {
            if (location.pathname === routesDefine[i].path) {
                setRouteIndex(i);
                break;
            }
        }
    });

    return (
        <div className="footer">
            <BottomNavigation
                showLabels
                value={routeIndex}
                onChange={(event, newValue) => {
                    navigate(routesDefine[newValue].path);
                    setRouteIndex(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction label="People" icon={<PeopleIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </div>
    );
}