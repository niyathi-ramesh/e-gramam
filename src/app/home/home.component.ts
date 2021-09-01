import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    {
      path: 'assets/images/cherukunnu-annapurna-devi-temple-kannur-kerala.jpg',
    },
    { path: 'assets/images/ambala-kulam.jpg' },
    { path: 'assets/images/madayi-para.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
