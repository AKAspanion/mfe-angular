import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { vueAppRouteBasePath } from 'shell/src/constants/microfrontends';
import { VueRemote } from './vue.component';

const routes: Routes = [
  { path: '', component: VueRemote },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: vueAppRouteBasePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class VueRoutingModule {}
