import { createBrowserHistory } from 'history';

import('./bootstrap').then(e => {
  const localRoot = document.getElementById('react-remote-root');
  const browserHistory = createBrowserHistory();

  e.default.mount(localRoot!, {
    historyStrategy: browserHistory,
  });
});
