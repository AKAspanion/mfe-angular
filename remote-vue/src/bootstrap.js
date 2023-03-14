import merge from 'lodash.merge';
import { createApp } from 'vue';
import App from './App.vue';
import routing from './router';
import createStore from './store';

const mount = (mountPoint, { state, basename, standalone, history }) => {
  const newState = merge(structuredClone(state), { standalone });

  const store = createStore(newState);

  createApp(App).use(store).use(routing(basename, history)).mount(mountPoint);
};

export default { mount };
