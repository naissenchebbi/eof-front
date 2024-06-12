import { TestBed } from '@angular/core/testing';

import { NarService } from './nar.service';

describe('NarService', () => {
  let service: NarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
