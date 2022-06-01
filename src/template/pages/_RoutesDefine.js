import React from 'react';
import Home from './Home';
import Search from './Search';
import People from './People';
import Settings from './Settings';

export default { Home, Search, People, Settings };
export const routesDefine = [{
    path: '/Home',
    element: <Home />
}, {
    path: '/Search',
    element: <Search />
}, {
    path: '/People',
    element: <People />
}, {
    path: '/Settings',
    element: <Settings />
}];