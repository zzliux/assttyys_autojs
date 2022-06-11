import SchemeList from './SchemeList';
import FuncList from './FuncList';

import Settings from './Settings';


export default { SchemeList, FuncList, Settings };
export const routesDefine = [{
    path: '/SchemeList',
    Element: SchemeList
} , {
    path: '/FuncList/:schemeName',
    Element: FuncList
}

, {
    path: '/Settings',
    Element: Settings
}];