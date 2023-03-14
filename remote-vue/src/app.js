import merge from 'lodash.merge';
import { createApp } from 'vue';
import App from './App.vue';
import createStore from './store';

const app = (state = {}, standalone) => {
  console.log('Vue prop state', state);
  const newState = merge(structuredClone(state), { standalone });

  console.log('Vue state', newState);

  const store = createStore(newState);

  return createApp(App).use(store);
};

export default app;
