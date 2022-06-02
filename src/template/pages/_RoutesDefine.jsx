import React from 'react';
import SchemeList from './SchemeList';
import FuncList from './FuncList';

import Search from './Search';
import People from './People';
import Settings from './Settings';


export default { SchemeList, Search, People, Settings };
export const routesDefine = [{
    path: '/SchemeList',
    element: <SchemeList />
} , {
    path: '/FuncList/:schemeName',
    element: <FuncList />
}


, {
    path: '/Search',
    element: <Search />
}, {
    path: '/People',
    element: <People />
}, {
    path: '/Settings',
    element: <Settings />
}];