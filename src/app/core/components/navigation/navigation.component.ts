import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

import { navList } from 'src/app/app.constants';

@Component({
  selector: 'eg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  @Output() toggleNavbar = new EventEmitter<void>();
  readonly navList = navList;
  activeUrl: string | undefined;
  event$;

  constructor(private router: Router) {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.activeUrl = event.url.split('/').pop();
      }
    });
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
