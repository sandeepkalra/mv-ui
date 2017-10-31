import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotMyPinComponent } from './forgot-my-pin.component';

describe('ForgotMyPinComponent', () => {
  let component: ForgotMyPinComponent;
  let fixture: ComponentFixture<ForgotMyPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotMyPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotMyPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
