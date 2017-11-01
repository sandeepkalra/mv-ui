import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMyVoiceComponent } from './register-my-voice.component';

describe('RegisterMyVoiceComponent', () => {
  let component: RegisterMyVoiceComponent;
  let fixture: ComponentFixture<RegisterMyVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMyVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMyVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
