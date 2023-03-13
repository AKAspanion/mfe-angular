import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { useAppStore } from './store/app';

const state = useAppStore(store);

const app = inContainer => {
  state.$state = { inContainer };

  return createApp(App);
};

export default app;
