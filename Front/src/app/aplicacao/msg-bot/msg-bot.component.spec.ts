import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgBotComponent } from './msg-bot.component';

describe('MsgBotComponent', () => {
  let component: MsgBotComponent;
  let fixture: ComponentFixture<MsgBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
