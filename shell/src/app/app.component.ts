import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { reactAppRouteScope } from '../constants/microfrontends';
import { MicrofrontendService } from '../microfrontends/microfrontend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shell';
  private initLocation: string;
  private reactAppBasename: string = `/${reactAppRouteScope}`;

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
          new CustomEvent('[shell] navigated', { detail: url })
        );
      } else if (url === this.reactAppBasename) {
        window.dispatchEvent(
          new CustomEvent('[shell] navigated', {
            detail: this.reactAppBasename,
          })
        );
      }
    }
  };
  private routeSync = () => {
    // TODO find out an event for this
    setTimeout(() => {
      if (this.initLocation) {
        this.handleNavigation(this.initLocation);
      }
    }, 100);
  };
  ngOnInit(): void {
    if (!this.initLocation) {
      this.initLocation = this._location.path();
    }

    window.addEventListener('[remote-react] mounted', this.routeSync, false);
  }
  ngOnDestroy(): void {
    window.removeEventListener('[remote-react] mounted', this.routeSync, false);
  }
}
