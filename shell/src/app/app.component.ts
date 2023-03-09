import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { reactAppRouteScope } from '../constants/microfrontends';
import { MicrofrontendService } from '../microfrontends/microfrontend.service';
import { RouteEventsService } from './route-events.service';

const reactAppBasename = `/${reactAppRouteScope}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shell';
  private initLocation: string;
  constructor(
    public mfService: MicrofrontendService,
    private _location: Location,
    private _router: Router
  ) {
    _router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.handleNavigation(event.url);
      }
    });
  }
  private handleNavigation = (url?: string) => {
    if (!url) {
      return;
    }
    if (url.startsWith(reactAppBasename)) {
      const parsedUrl = url.replace(reactAppBasename, '');
      if (url === this._location.path()) {
        return;
      }

      window.dispatchEvent(
        new CustomEvent('[shell] navigated', { detail: parsedUrl })
      );
    }
  };
  private routeSync = () => {
    console.log('[remote-react] mounted', this.initLocation);
    if (this.initLocation) {
      this.handleNavigation(this.initLocation);
    }
  };
  ngOnInit(): void {
    console.log(this._router);
    if (!this.initLocation) {
      this.initLocation = this._location.path();
    }

    window.addEventListener('[remote-react] mounted', this.routeSync, false);
  }
  ngOnDestroy(): void {
    window.removeEventListener('[remote-react] mounted', this.routeSync, false);
  }
}
