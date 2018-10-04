import { TestBed } from '@angular/core/testing';

import { ConfigureService } from './configure.service';

describe('ConfigureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigureService = TestBed.get(ConfigureService);
    expect(service).toBeTruthy();
  });
});
