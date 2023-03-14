import merge from 'lodash.merge';
import { createApp } from 'vue';
import App from './App.vue';
import createStore from './store';

const app = (state = {}, inContainer) => {
  const newState = merge(state, { inContainer });
  console.log(state);
  console.log(newState);
  const store = createStore(newState);

  return createApp(App).use(store);
};

export default app;
