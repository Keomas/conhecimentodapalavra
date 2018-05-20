import { TestBed, inject } from '@angular/core/testing';

import { CitationsService } from './citations.service';

describe('CitationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitationsService]
    });
  });

  it('should be created', inject([CitationsService], (service: CitationsService) => {
    expect(service).toBeTruthy();
  }));
});
