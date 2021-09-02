import { Component, OnInit } from '@angular/core';

import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'eg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  placeName = '';
  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeName = this.placeService.place;
  }
}
