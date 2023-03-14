import routing from './router';
import createApp from './app.js';

const mount = (mountPoint, { state, basename, inContainer, history }) =>
  createApp(state, inContainer)
    .use(routing(basename, history))
    .mount(mountPoint);

export default { mount };
