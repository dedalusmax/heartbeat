import { TestBed } from '@angular/core/testing';

import { HeartbeatLibService } from './heartbeat-lib.service';

describe('HeartbeatLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeartbeatLibService = TestBed.get(HeartbeatLibService);
    expect(service).toBeTruthy();
  });
});
