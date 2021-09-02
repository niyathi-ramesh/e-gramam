import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEducationComponent } from './administration-education.component';

describe('AdministrationEducationComponent', () => {
  let component: AdministrationEducationComponent;
  let fixture: ComponentFixture<AdministrationEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
