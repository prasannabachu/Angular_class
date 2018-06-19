import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillLevel2Component } from './drill-level2.component';

describe('DrillLevel2Component', () => {
  let component: DrillLevel2Component;
  let fixture: ComponentFixture<DrillLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
