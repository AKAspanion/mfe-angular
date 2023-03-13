import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({ appName: '', inContainer: false }),
  getters: {
    isInContainer: state => state.inContainer,
    getAppName: state => state.appName,
  },
  actions: {
    setAppName(v) {
      this.appName = v;
    },
  },
});
