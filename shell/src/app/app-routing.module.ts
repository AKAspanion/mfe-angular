import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { HomeComponent } from './pages/home.component';
import { PageOne } from './pages/page-one/page-one.component';
import { PageTwo } from './pages/page-two/page-two.component';

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
