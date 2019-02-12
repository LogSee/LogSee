import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router, NavigationError, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  loading = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] &&  outlet.activatedRouteData['routeIdx'];
  }

  // Router loading trigger events
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        
        default: {
          break;
        }
      }
    });
  }
}
