import merge from 'lodash.merge';
import { createApp } from 'vue';
import App from './App.vue';
import createStore from './store';

const app = (state = {}, inContainer) => {
  console.log('Vue prop state', state);
  const newState = merge(structuredClone(state), { inContainer });

  console.log('Vue state', newState);

  const store = createStore(newState);

  return createApp(App).use(store);
};

export default app;
