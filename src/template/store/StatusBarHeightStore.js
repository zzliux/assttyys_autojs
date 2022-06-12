import { makeAutoObservable } from 'mobx';

class StatusBarHeightStore {
  statusBarHeight = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setStatusBarHeight(height) {
    this.statusBarHeight = height;
  }
}

export { StatusBarHeightStore }
