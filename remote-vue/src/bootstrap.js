import { createApp } from 'vue';
import App from './App.vue';
import routing from './router';

const mount = (mountPoint, { basename, history }) =>
  createApp(App).use(routing(basename, history)).mount(mountPoint);

export default { mount };
