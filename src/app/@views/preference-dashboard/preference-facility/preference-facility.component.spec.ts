import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceFacilityComponent } from './preference-facility.component';

describe('PreferenceFacilityComponent', () => {
  let component: PreferenceFacilityComponent;
  let fixture: ComponentFixture<PreferenceFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
