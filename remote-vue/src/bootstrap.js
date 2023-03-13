import routing from './router';
import createApp from './app.js';

const mount = (mountPoint, { basename, inContainer, history }) =>
  createApp(inContainer).use(routing(basename, history)).mount(mountPoint);

export default { mount };
