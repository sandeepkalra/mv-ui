import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMyItemComponent } from './register-my-item.component';

describe('RegisterMyItemComponent', () => {
  let component: RegisterMyItemComponent;
  let fixture: ComponentFixture<RegisterMyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
