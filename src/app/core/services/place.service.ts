import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  place = '';

  constructor() {
    this.setPlace();
  }

  // TODO: Might change in future to incorporate other villages.
  setPlace() {
    this.place = 'Cherukunnu';
  }
}
