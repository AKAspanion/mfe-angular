import react from 'react';

import('./bootstrap').then(e => {
  const localRoot = document.getElementById('react-remote-root');

  e.default.mount(localRoot!, { history: true });
});
