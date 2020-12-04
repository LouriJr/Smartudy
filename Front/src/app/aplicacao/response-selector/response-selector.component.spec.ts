import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSelectorComponent } from './response-selector.component';

describe('ResponseSelectorComponent', () => {
  let component: ResponseSelectorComponent;
  let fixture: ComponentFixture<ResponseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
