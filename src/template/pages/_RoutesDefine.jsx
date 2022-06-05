import SchemeList from './SchemeList';
import FuncList from './FuncList';

import Search from './Search';
import People from './People';
import Settings from './Settings';


export default { SchemeList, Search, People, Settings };
export const routesDefine = [{
    path: '/SchemeList',
    Element: SchemeList
} , {
    path: '/FuncList/:schemeName',
    Element: FuncList
}


, {
    path: '/Search',
    Element: Search
}, {
    path: '/People',
    Element: People
}, {
    path: '/Settings',
    Element: Settings
}];