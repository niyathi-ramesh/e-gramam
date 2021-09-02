import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCultureComponent } from './history-culture.component';

describe('HistoryCultureComponent', () => {
  let component: HistoryCultureComponent;
  let fixture: ComponentFixture<HistoryCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryCultureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
