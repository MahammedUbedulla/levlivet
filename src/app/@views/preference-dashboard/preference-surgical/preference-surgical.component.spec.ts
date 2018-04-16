import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceSurgicalComponent } from './preference-surgical.component';

describe('PreferenceSurgicalComponent', () => {
  let component: PreferenceSurgicalComponent;
  let fixture: ComponentFixture<PreferenceSurgicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceSurgicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceSurgicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
