import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { MicrofrontendService } from '../microfrontends/microfrontend.service';
import { HomeComponent } from './pages/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageOne } from './pages/page-one/page-one.component';
import { PageTwo } from './pages/page-two/page-two.component';
import { FederatedComponent } from '../components/federated/federated.component';
import { ReactRemote } from './remotes/react/react.component';
import { VueRemote } from './remotes/vue/vue.component';
import { RouteEventsService } from './route-events.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';

export function initializeApp(
  mfService: MicrofrontendService
): () => Promise<void> {
  return () => mfService.initialise();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageOne,
    PageTwo,
    ReactRemote,
    VueRemote,
    LoginComponent,
    FederatedComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    AuthGuardService,
    RoleGuardService,
    RouteEventsService,
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
