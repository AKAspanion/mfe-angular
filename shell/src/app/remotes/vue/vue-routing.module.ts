import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reactAppRouteScope } from 'shell/src/constants/microfrontends';
import { VueRemote } from './vue.component';

const routes: Routes = [
  { path: '', component: VueRemote },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: `/${reactAppRouteScope}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class VueRoutingModule {}
