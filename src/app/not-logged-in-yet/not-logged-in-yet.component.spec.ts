import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInYetComponent } from './not-logged-in-yet.component';

describe('NotLoggedInYetComponent', () => {
  let component: NotLoggedInYetComponent;
  let fixture: ComponentFixture<NotLoggedInYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedInYetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedInYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
