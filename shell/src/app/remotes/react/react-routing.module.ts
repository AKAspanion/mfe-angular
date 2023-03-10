import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reactAppRouteBasePath } from 'shell/src/constants/microfrontends';
import { ReactRemote } from './react.component';

const routes: Routes = [
  { path: '', component: ReactRemote },
  {
    path: '**',
    redirectTo: reactAppRouteBasePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'disabled' })],
  exports: [RouterModule],
})
export class ReactRoutingModule {}
