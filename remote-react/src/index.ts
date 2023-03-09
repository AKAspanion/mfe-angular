import { createBrowserHistory } from 'history';

import('./bootstrap').then(e => {
  const localRoot = document.getElementById('app1-root');
  const browserHistory = createBrowserHistory();

  e.default.mount(localRoot!, {
    historyStrategy: browserHistory,
  });
});
