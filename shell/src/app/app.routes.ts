import { Routes } from '@angular/router';
import {
  reactAppRouteScope,
  vueAppRouteScope,
} from '../constants/microfrontends';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./app-routing.module').then(m => m.AppRoutingModule),
  },
  {
    path: reactAppRouteScope,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin',
    },
    loadChildren: () =>
      import('./remotes/react/react-routing.module').then(
        m => m.ReactRoutingModule
      ),
  },
  {
    path: vueAppRouteScope,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./remotes/vue/vue-routing.module').then(m => m.VueRoutingModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
