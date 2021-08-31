import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'eg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$
      .pipe(debounceTime(100))
      .subscribe((evt: Event) => {
        const w = evt.target as Window;
        if (w.innerWidth >= 768 && this.sidenav.opened) {
          this.sidenav.toggle();
        }
      });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
