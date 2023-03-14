import { createPinia } from 'pinia';
const store = createPinia();

import { useAppStore } from './app';

const state = useAppStore(store);

const createStore = defaultState => {
  state.$state = { ...defaultState };

  state.$subscribe((_, state) => {
    window.dispatchEvent(
      new CustomEvent('[remote-vue] state sync', { detail: state })
    );
  });

  return store;
};

export default createStore;
