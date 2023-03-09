import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reactAppRouteScope } from 'shell/src/constants/microfrontends';
import { ReactRemote } from './react.component';

const routes: Routes = [
  { path: '', component: ReactRemote },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: `/${reactAppRouteScope}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'disabled' })],
  exports: [RouterModule],
})
export class ReactRoutingModule {}
