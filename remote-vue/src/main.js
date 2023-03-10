import bootstrap from './bootstrap';
import { createWebHistory } from 'vue-router';

const history = createWebHistory('/remote-vue');

bootstrap.mount('#vue-remote-root', {
  history,
});
