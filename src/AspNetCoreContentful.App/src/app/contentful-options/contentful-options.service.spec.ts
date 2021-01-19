import { TestBed } from '@angular/core/testing';

import { ContentfulOptionsService } from './contentful-options.service';

describe('ContentfulOptionsService', () => {
  let service: ContentfulOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
