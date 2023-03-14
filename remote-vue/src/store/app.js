import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({ appName: '', standalone: false }),
  getters: {
    isStandalone: state => state.standalone,
    getAppName: state => state.appName,
  },
  actions: {
    setAppName(v) {
      this.appName = v;
    },
  },
});
