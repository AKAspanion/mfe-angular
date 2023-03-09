import { Routes } from '@angular/router';
import {
  reactAppRouteScope,
  vueAppRouteScope,
} from '../constants/microfrontends';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./app-routing.module').then(m => m.AppRoutingModule),
  },
  {
    path: reactAppRouteScope,
    loadChildren: () =>
      import('./remotes/react/react-routing.module').then(
        m => m.ReactRoutingModule
      ),
  },
  {
    path: vueAppRouteScope,
    loadChildren: () =>
      import('./remotes/vue/vue-routing.module').then(m => m.VueRoutingModule),
  },
];
