import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceLabsComponent } from './preference-labs.component';

describe('PreferenceLabsComponent', () => {
  let component: PreferenceLabsComponent;
  let fixture: ComponentFixture<PreferenceLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
