import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTreatmentPlanComponent } from './patient-treatment-plan.component';

describe('PatientTreatmentPlanComponent', () => {
  let component: PatientTreatmentPlanComponent;
  let fixture: ComponentFixture<PatientTreatmentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTreatmentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
