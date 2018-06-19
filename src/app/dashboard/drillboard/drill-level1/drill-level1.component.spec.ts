import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillLevel1Component } from './drill-level1.component';

describe('DrillLevel1Component', () => {
  let component: DrillLevel1Component;
  let fixture: ComponentFixture<DrillLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
