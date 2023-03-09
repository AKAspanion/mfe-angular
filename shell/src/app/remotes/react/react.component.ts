import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { reactAppRouteScope } from 'shell/src/constants/microfrontends';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactRemote implements OnDestroy {
  constructor(private _location: Location) {}
  public reactAppBasename: string = `/${reactAppRouteScope}`;

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
    window.dispatchEvent(new CustomEvent('[remote-react] mounted'));
  }
  ngOnDestroy(): void {
    window.removeEventListener(
      '[remote-react] navigated',
      this.navigationHandler,
      false
    );
  }
}
