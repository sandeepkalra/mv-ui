import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordAndPinComponent } from './forgot-password-and-pin.component';

describe('ForgotPasswordAndPinComponent', () => {
  let component: ForgotPasswordAndPinComponent;
  let fixture: ComponentFixture<ForgotPasswordAndPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordAndPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordAndPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
