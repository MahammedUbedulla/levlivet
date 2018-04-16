import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceDashboardComponent } from './preference-dashboard.component';

describe('PreferenceDashboardComponent', () => {
  let component: PreferenceDashboardComponent;
  let fixture: ComponentFixture<PreferenceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
