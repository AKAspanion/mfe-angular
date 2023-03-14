import routing from './router';
import createApp from './app.js';

const mount = (mountPoint, { state, basename, standalone, history }) =>
  createApp(state, standalone)
    .use(routing(basename, history))
    .mount(mountPoint);

export default { mount };
