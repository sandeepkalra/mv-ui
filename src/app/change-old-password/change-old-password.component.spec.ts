import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOldPasswordComponent } from './change-old-password.component';

describe('ChangeOldPasswordComponent', () => {
  let component: ChangeOldPasswordComponent;
  let fixture: ComponentFixture<ChangeOldPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOldPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
