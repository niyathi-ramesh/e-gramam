import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
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
