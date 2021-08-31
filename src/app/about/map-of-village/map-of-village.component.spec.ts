import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOfVillageComponent } from './map-of-village.component';

describe('MapOfVillageComponent', () => {
  let component: MapOfVillageComponent;
  let fixture: ComponentFixture<MapOfVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOfVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOfVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
