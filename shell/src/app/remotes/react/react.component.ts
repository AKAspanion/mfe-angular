import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { reactAppRouteBasePath } from 'shell/src/constants/microfrontends';
import { environment } from 'shell/src/environments/environment';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactRemote implements OnDestroy {
  public remoteEntry: string = `${environment.reactMFEHost}remoteEntry.js`;
  public reactAppBasename: string = reactAppRouteBasePath;
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
      '[remote-react] navigated',
      this.navigationHandler,
      false
    );
  }
  ngOnDestroy(): void {
    window.removeEventListener(
      '[remote-react] navigated',
      this.navigationHandler,
      false
    );
  }
}
