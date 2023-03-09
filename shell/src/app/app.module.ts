import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { MicrofrontendService } from './microfrontends/microfrontend.service';
import { HomeComponent } from '../pages/home/home.component';
import { PageOne } from '../pages/home/page-one/page-one.component';
import { PageTwo } from '../pages/home/page-two/page-two.component';
import { FederatedComponent } from '../components/federated/federated.component';
// import { NgxsModule } from '@ngxs/store';

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
