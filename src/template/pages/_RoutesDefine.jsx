import React from 'react';
import SchemeList from './SchemeList';
import Search from './Search';
import People from './People';
import Settings from './Settings';

export default { SchemeList, Search, People, Settings };
export const routesDefine = [{
    path: '/SchemeList',
    element: <SchemeList />
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