import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'eg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleNavbar = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
