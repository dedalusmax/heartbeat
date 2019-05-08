import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartbeatLibComponent } from './heartbeat-lib.component';

describe('HeartbeatLibComponent', () => {
  let component: HeartbeatLibComponent;
  let fixture: ComponentFixture<HeartbeatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartbeatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartbeatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
