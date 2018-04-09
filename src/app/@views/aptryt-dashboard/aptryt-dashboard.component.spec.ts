import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptrytDashboardComponent } from './aptryt-dashboard.component';

describe('AptrytDashboardComponent', () => {
  let component: AptrytDashboardComponent;
  let fixture: ComponentFixture<AptrytDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptrytDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptrytDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
