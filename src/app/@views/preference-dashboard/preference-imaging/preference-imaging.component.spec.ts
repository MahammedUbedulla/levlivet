import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceImagingComponent } from './preference-imaging.component';

describe('PreferenceImagingComponent', () => {
  let component: PreferenceImagingComponent;
  let fixture: ComponentFixture<PreferenceImagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceImagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
