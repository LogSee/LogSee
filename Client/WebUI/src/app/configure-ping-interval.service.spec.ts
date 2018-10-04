import { TestBed } from '@angular/core/testing';

import { ConfigurePingIntervalService } from './configure-ping-interval.service';

describe('ConfigurePingIntervalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurePingIntervalService = TestBed.get(ConfigurePingIntervalService);
    expect(service).toBeTruthy();
  });
});
