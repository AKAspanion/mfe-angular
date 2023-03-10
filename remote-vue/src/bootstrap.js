import { createApp } from 'vue';
import App from './App.vue';
import routing from './router';

const app = createApp(App);

const mount = (mountPoint, { basename, history }) => {
  app.use(routing(basename, history)).mount(mountPoint);
};

export default { mount };
