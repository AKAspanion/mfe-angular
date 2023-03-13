import bootstrap from './bootstrap';
import { createWebHistory } from 'vue-router';

const history = createWebHistory();

bootstrap.mount('#vue-remote-root', {
  history,
  inContainer: false,
});
