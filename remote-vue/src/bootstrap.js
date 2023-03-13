import routing from './router';
import store from './store';
import createApp from './app.js';

const mount = (mountPoint, { basename, inContainer, history }) =>
  createApp(inContainer)
    .use(store)
    .use(routing(basename, history))
    .mount(mountPoint);

export default { mount };
