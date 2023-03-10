import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reactAppRouteBasePath } from 'shell/src/constants/microfrontends';
import { VueRemote } from './vue.component';

const routes: Routes = [
  { path: '', component: VueRemote },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: reactAppRouteBasePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class VueRoutingModule {}
