import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageOne } from './pages/home/page-one/page-one.component';
import { PageTwo } from './pages/home/page-two/page-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page-1', component: PageOne },
  { path: 'page-2', component: PageTwo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
