import { TestBed } from '@angular/core/testing';

import { BookStoreServicesService } from './book-store-services.service';

describe('BookStoreServicesService', () => {
  let service: BookStoreServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStoreServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
