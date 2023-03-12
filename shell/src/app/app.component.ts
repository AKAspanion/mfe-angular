import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import {
  reactAppRouteBasePath,
  vueAppRouteBasePath,
} from '../constants/microfrontends';
import { MicrofrontendService } from '../microfrontends/microfrontend.service';

let startUrl = '';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  public sidebarOpen = false;
  private reactAppBasename: string = reactAppRouteBasePath;
  private vueAppBasename: string = vueAppRouteBasePath;

  constructor(
    public mfService: MicrofrontendService,
    private _location: Location,
    private _router: Router
  ) {
    _router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        startUrl = event.url;
      }
      if (event instanceof NavigationEnd) {
        this.handleNavigation(event.url);
      }
    });
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
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
  private routeSync = () => {
    if (startUrl) {
      this.handleNavigation(startUrl);
      startUrl = '';
    }
  };
  ngOnInit(): void {
    window.addEventListener('[remote-react] mounted', this.routeSync, false);
    window.addEventListener('[remote-vue] mounted', this.routeSync, false);
  }
  ngOnDestroy(): void {
    window.removeEventListener('[remote-react] mounted', this.routeSync, false);
    window.removeEventListener('[remote-vue] mounted', this.routeSync, false);
  }
}
