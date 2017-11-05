import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOldPinComponent } from './change-old-pin.component';

describe('ChangeOldPinComponent', () => {
  let component: ChangeOldPinComponent;
  let fixture: ComponentFixture<ChangeOldPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOldPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOldPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
