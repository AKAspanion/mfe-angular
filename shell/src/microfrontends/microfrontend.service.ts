import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setReactStore } from '../app/store/react.actions';
import { setVueStore } from '../app/store/vue.actions';
import { buildRoutes } from '../utils/route-utils';
import { Microfrontend } from './microfrontend.model';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[];

  constructor(private router: Router, private store: Store<{ react: any }>) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    const stateSyncReact = v => {
      this.store.dispatch(setReactStore([v.detail]));
    };

    const stateSyncVue = v => {
      this.store.dispatch(setVueStore([v.detail]));
    };

    window.addEventListener('[remote-react] state sync', stateSyncReact, false);
    window.addEventListener('[remote-vue] state sync', stateSyncVue, false);
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [];
  }
}
