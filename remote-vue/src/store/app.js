import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({ inContainer: false }),
  getters: {
    isInContainer: state => state.inContainer,
  },
});
