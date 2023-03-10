import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import {
  reactAppRouteBasePath,
  vueAppRouteBasePath,
} from '../constants/microfrontends';
import { MicrofrontendService } from '../microfrontends/microfrontend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  private initLocation: string;
  private reactAppBasename: string = reactAppRouteBasePath;
  private vueAppBasename: string = vueAppRouteBasePath;

  constructor(
    public mfService: MicrofrontendService,
    private _location: Location,
    private _router: Router
  ) {
    _router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.handleNavigation(event.url);
      }
    });
  }
  private handleNavigation = (url?: string) => {
    if (!url) {
      return;
    }

    if (url.startsWith(this.reactAppBasename)) {
      if (url !== this._location.path()) {
        window.dispatchEvent(
          new CustomEvent('[shell-react] navigated', { detail: url })
        );
      } else if (url === this.reactAppBasename) {
        window.dispatchEvent(
          new CustomEvent('[shell-react] navigated', {
            detail: this.reactAppBasename + '/',
          })
        );
      }
    } else if (url.startsWith(this.vueAppBasename)) {
      if (url !== this._location.path()) {
        window.dispatchEvent(
          new CustomEvent('[shell-vue] navigated', {
            detail: url.replace(this.vueAppBasename, ''),
          })
        );
      } else if (url === this.vueAppBasename) {
        window.dispatchEvent(
          new CustomEvent('[shell-react] navigated', {
            detail: '',
          })
        );
      }
    }
  };
}
