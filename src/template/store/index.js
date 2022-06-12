import { StatusBarHeightStore } from './StatusBarHeightStore';
import React from 'react';

class RootStore {
    constructor() {
        // 新的store放在这里
        this.statusBarHeightStore = new StatusBarHeightStore();
    }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore }
