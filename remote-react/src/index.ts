import react from 'react';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

import('./bootstrap').then(e => {
  const localRoot = document.getElementById('react-remote-root');

  e.default.mount(localRoot!, {
    history: createBrowserRouter(routes),
  });
});
