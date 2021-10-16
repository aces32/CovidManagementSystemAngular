import { TestBed } from '@angular/core/testing';

import { IndividualLabsService } from './individual-labs.service';

describe('IndividualLabsService', () => {
  let service: IndividualLabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualLabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
