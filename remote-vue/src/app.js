import { createApp } from 'vue';
import App from './App.vue';
import createStore from './store';

const app = inContainer => {
  const store = createStore({ appName: 'VueApp', inContainer });

  return createApp(App).use(store);
};

export default app;
