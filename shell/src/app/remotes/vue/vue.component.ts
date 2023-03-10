import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { vueAppRouteBasePath } from 'shell/src/constants/microfrontends';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss'],
})
export class VueRemote implements OnDestroy {
  public vueAppBasename: string = vueAppRouteBasePath;
  constructor(private _location: Location) {}
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
