import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { vueAppRouteBasePath } from 'shell/src/constants/microfrontends';
import { environment } from 'shell/src/environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVueState } from '../../store/vue.selectors';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss'],
})
export class VueRemote implements OnDestroy {
  public remoteEntry: string = `${environment.vueMFEHost}remoteEntry.js`;
  public vueAppBasename: string = vueAppRouteBasePath;
  vueState$: Observable<any>;

  constructor(
    private _location: Location,
    private store: Store<{ react: any }>
  ) {
    this.vueState$ = store.select(selectVueState);
  }

  private navigationHandler = (event: any) => {
    const newPathname = event.detail;

    if (newPathname === this._location.path()) {
      return;
    }
    this._location.go(newPathname);
  };
  public onMount(e: any) {
    window.addEventListener(
      '[remote-vue] navigated',
      this.navigationHandler,
      false
    );
  }
  ngOnDestroy(): void {
    window.removeEventListener(
      '[remote-vue] navigated',
      this.navigationHandler,
      false
    );
  }
}
