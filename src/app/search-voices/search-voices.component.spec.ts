import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVoicesComponent } from './search-voices.component';

describe('SearchVoicesComponent', () => {
  let component: SearchVoicesComponent;
  let fixture: ComponentFixture<SearchVoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
