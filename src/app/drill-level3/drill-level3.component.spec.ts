import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillLevel3Component } from './drill-level3.component';

describe('DrillLevel3Component', () => {
  let component: DrillLevel3Component;
  let fixture: ComponentFixture<DrillLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
